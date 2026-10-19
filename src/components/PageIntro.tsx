export function PageIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="bg-ink px-5 pb-18 pt-16 text-ivory sm:px-8 sm:pb-24 sm:pt-22">
      <div className="mx-auto max-w-7xl editorial-reveal">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
          {eyebrow}
        </p>
        <h1 className="max-w-4xl font-display text-5xl leading-[0.92] font-medium uppercase sm:text-7xl lg:text-8xl">
          {title}
        </h1>
        <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/70 sm:text-base">{description}</p>
      </div>
    </section>
  );
}
