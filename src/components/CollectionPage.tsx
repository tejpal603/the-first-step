import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/PageIntro";
import { ProductGrid } from "@/components/ProductGrid";
import { collections, whatsappHref, type CollectionKey } from "@/lib/store";

export function CollectionPage({ collectionKey }: { collectionKey: CollectionKey }) {
  const collection = collections[collectionKey];
  return (
    <main>
      <PageIntro
        eyebrow={collection.eyebrow}
        title={collection.title}
        description={collection.description}
      />
      <section className="px-5 py-14 sm:px-8 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="aspect-[5/4] overflow-hidden bg-stone">
            <img
              src={collection.image}
              alt={collection.imageAlt}
              width={1408}
              height={1104}
              className="h-full w-full object-cover"
            />
          </div>
          <div className="pb-2 lg:pb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Visit or enquire
            </p>
            <h2 className="mt-4 font-display text-4xl font-semibold uppercase leading-none text-ink sm:text-5xl">
              Find the pair that feels right.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              The products below demonstrate how the collection can be presented. Contact the store
              for current styles, sizes, prices and availability.
            </p>
            <Button asChild className="mt-7">
              <a
                href={whatsappHref(
                  `Hello The First Step, I'd like to know what is currently available in ${collection.title}.`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                <MessageCircle /> Ask what's available
              </a>
            </Button>
          </div>
        </div>
      </section>
      <section className="bg-paper px-5 py-16 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                Collection preview
              </p>
              <h2 className="mt-3 font-display text-4xl font-semibold uppercase text-ink sm:text-5xl">
                A taste of the edit.
              </h2>
            </div>
            <Button asChild variant="editorial">
              <a
                href={whatsappHref("Hello The First Step, I'd like help choosing footwear.")}
                target="_blank"
                rel="noreferrer"
              >
                Personal assistance <ArrowRight />
              </a>
            </Button>
          </div>
          <ProductGrid />
        </div>
      </section>
    </main>
  );
}
