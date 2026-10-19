import { AlertCircle } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export function InfoPage({
  title,
  eyebrow,
  intro,
  sections,
}: {
  title: string;
  eyebrow: string;
  intro: string;
  sections: { title: string; body: string }[];
}) {
  return (
    <main>
      <PageIntro eyebrow={eyebrow} title={title} description={intro} />
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 flex gap-3 border border-champagne/50 bg-secondary/40 p-4 text-sm leading-6 text-foreground">
            <AlertCircle className="mt-0.5 size-5 shrink-0 text-champagne" />
            <p>
              This information must be confirmed by the store owner before the website is published.
            </p>
          </div>
          <div className="divide-y divide-border">
            {sections.map((section) => (
              <section key={section.title} className="py-8">
                <h2 className="font-display text-3xl font-semibold text-ink">{section.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{section.body}</p>
              </section>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
