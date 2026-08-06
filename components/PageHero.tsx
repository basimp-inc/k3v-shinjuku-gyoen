import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  headingLines: string[];
  description?: string;
};

export default function PageHero({ eyebrow, headingLines, description }: PageHeroProps) {
  return (
    <section className="bg-[#f3ece1] px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-[#8a6b45]">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-3xl leading-[1.4] text-[#4a3a24] md:text-4xl">
            {headingLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          {description && (
            <p className="mt-5 max-w-xl text-sm leading-[1.8] text-[#6f5c3f] md:text-base">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
