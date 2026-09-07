import Reveal from "./Reveal";

type PageHeroProps = {
  eyebrow: string;
  headingLines: string[];
  description?: string;
};

export default function PageHero({ eyebrow, headingLines, description }: PageHeroProps) {
  return (
    <section className="bg-(--color-bg) px-6 py-16 md:px-10 md:py-24">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="font-en text-xs tracking-[0.25em] text-(--color-accent)">{eyebrow}</p>
          <h1 className="mt-4 max-w-2xl text-3xl leading-[1.4] text-(--color-text) md:text-4xl">
            {headingLines.map((line, i) => (
              <span key={line}>
                {line}
                {i < headingLines.length - 1 && <br />}
              </span>
            ))}
          </h1>
          {description && (
            <p className="mt-5 max-w-(--measure-lead) text-base leading-[1.8] text-(--color-text-soft) md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
