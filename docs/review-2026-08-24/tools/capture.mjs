// Capture mobile screenfuls of every TOP-page design mock, one PNG per screen.
import { spawn } from "node:child_process";
import { mkdirSync, writeFileSync } from "node:fs";
import { setTimeout as sleep } from "node:timers/promises";

const CHROME =
  "/Users/apple/Library/Caches/ms-playwright/chromium-1228/chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing";
const OUT = process.argv[2];
const BASE = "http://localhost:3000/ja";
const W = 390, H = 844, DSF = 2;
const THEMES = ["current", "gyoen-green", "washed-chambray", "chambray-gyoen"];

mkdirSync(OUT, { recursive: true });

const chrome = spawn(CHROME, [
  "--headless=new",
  "--remote-debugging-port=9333",
  "--hide-scrollbars",
  "--force-color-profile=srgb",
  "--disable-gpu",
  "--no-first-run",
  "--user-data-dir=" + OUT + "/.chrome",
  "about:blank",
], { stdio: ["ignore", "pipe", "pipe"] });
chrome.stderr.on("data", () => {});

async function browserWs() {
  for (let i = 0; i < 60; i++) {
    try {
      const r = await fetch("http://127.0.0.1:9333/json/version");
      return (await r.json()).webSocketDebuggerUrl;
    } catch { await sleep(300); }
  }
  throw new Error("chrome did not start");
}

const ws = new WebSocket(await browserWs());
await new Promise((res) => (ws.onopen = res));
let id = 0;
const pending = new Map();
const listeners = [];
ws.onmessage = (e) => {
  const m = JSON.parse(e.data);
  if (m.id && pending.has(m.id)) {
    const { res, rej } = pending.get(m.id);
    pending.delete(m.id);
    m.error ? rej(new Error(JSON.stringify(m.error))) : res(m.result);
  } else if (m.method) {
    for (const l of [...listeners]) l(m);
  }
};
const send = (method, params = {}, sessionId) =>
  new Promise((res, rej) => {
    const i = ++id;
    pending.set(i, { res, rej });
    ws.send(JSON.stringify({ id: i, method, params, sessionId }));
  });
const once = (method, sessionId, ms = 30000) =>
  new Promise((res, rej) => {
    const t = setTimeout(() => { off(); rej(new Error("timeout " + method)); }, ms);
    const l = (m) => {
      if (m.method === method && (!sessionId || m.sessionId === sessionId)) { off(); res(m.params); }
    };
    const off = () => { clearTimeout(t); listeners.splice(listeners.indexOf(l), 1); };
    listeners.push(l);
  });

const manifest = [];

for (const theme of THEMES) {
  const { targetId } = await send("Target.createTarget", { url: "about:blank" });
  const { sessionId } = await send("Target.attachToTarget", { targetId, flatten: true });
  const S = sessionId;
  const ev = (m, p) => send(m, p, S);

  await ev("Page.enable");
  await ev("Runtime.enable");
  await ev("Emulation.setDeviceMetricsOverride", {
    width: W, height: H, deviceScaleFactor: DSF, mobile: true,
    screenOrientation: { angle: 0, type: "portraitPrimary" },
  });
  await ev("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });

  const loaded = once("Page.loadEventFired", S, 60000);
  await ev("Page.navigate", { url: `${BASE}?theme=${theme}` });
  await loaded;

  const evalJs = async (expr, awaitPromise = false) => {
    const r = await ev("Runtime.evaluate", { expression: expr, returnByValue: true, awaitPromise });
    if (r.exceptionDetails) throw new Error(theme + ": " + JSON.stringify(r.exceptionDetails));
    return r.result.value;
  };

  await evalJs("document.fonts.ready.then(()=>1)", true);
  // review-only palette switcher must not appear in the handout
  await evalJs(`(()=>{const s=document.createElement('style');
    s.textContent='[data-theme-mock]{display:none!important}';
    document.head.appendChild(s);return 1})()`);
  await sleep(1500);

  // walk the page once so every IntersectionObserver has fired, then rewind
  const height = await evalJs(`(async()=>{
    const h=()=>Math.max(document.body.scrollHeight,document.documentElement.scrollHeight);
    for(let y=0;y<h();y+=400){window.scrollTo(0,y);await new Promise(r=>setTimeout(r,60));}
    document.querySelectorAll('.rv').forEach(e=>e.classList.add('in'));
    document.querySelectorAll('.reveal').forEach(e=>e.classList.add('is-visible'));
    window.scrollTo(0,0);await new Promise(r=>setTimeout(r,600));return h();})()`, true);

  const sections = await evalJs(`(()=>{
    const root=document.querySelector('[data-design]:not([hidden])')||document.body;
    const all=[...document.querySelectorAll('main[data-design], [data-design]')]
      .filter(el=>el.getBoundingClientRect().height>10);
    const host=all[0]||document.body;
    return [...host.querySelectorAll(':scope > section, :scope > header, :scope > footer')]
      .map(el=>({id:el.id||'',cls:el.className||'',
        top:Math.round(el.getBoundingClientRect().top+window.scrollY),
        h:Math.round(el.getBoundingClientRect().height)}))
      .filter(s=>s.h>40);})()`);

  const frames = [];
  const step = H;
  const last = Math.max(0, height - H);
  const stops = [];
  for (let y = 0; y < last; y += step) stops.push(y);
  stops.push(last);

  let n = 0;
  for (const y of stops) {
    await evalJs(`window.scrollTo(0,${y});1`);
    await sleep(450);
    const shot = await ev("Page.captureScreenshot", { format: "png", optimizeForSpeed: false });
    const file = `${theme}-${String(++n).padStart(2, "0")}.png`;
    writeFileSync(`${OUT}/${file}`, Buffer.from(shot.data, "base64"));
    frames.push({ file, y });
  }

  manifest.push({ theme, height, frames, sections });
  console.log(theme, "height", height, "frames", frames.length);
  await send("Target.closeTarget", { targetId });
}

writeFileSync(`${OUT}/manifest.json`, JSON.stringify(manifest, null, 2));
ws.close();
chrome.kill();
console.log("done");
