import { MessageCircle, MoveUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { sampleProducts, whatsappHref } from "@/lib/store";

export function ProductGrid({ limit = 4 }: { limit?: number }) {
  return (
    <div className="grid gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
      {sampleProducts.slice(0, limit).map((product, index) => (
        <article key={product.name} className="group min-w-0">
          <div className="relative aspect-[4/5] overflow-hidden bg-stone">
            <img
              src={product.image}
              alt={`${product.name}, sample catalogue presentation`}
              loading="lazy"
              width={1408}
              height={1104}
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.035]"
            />
            <span className="absolute left-3 top-3 bg-ivory px-2.5 py-1.5 text-[0.58rem] font-bold uppercase tracking-[0.12em] text-ink">
              Preview only
            </span>
          </div>
          <p className="mt-4 text-[0.65rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
            {product.collection}
          </p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-ink">{product.name}</h3>
          <p className="mt-1 text-xs text-muted-foreground">
            Price, sizes & availability to be confirmed
          </p>
          <Button asChild variant="link" className="mt-3 h-auto p-0 text-[0.65rem]">
            <a
              href={whatsappHref(
                `Hello The First Step, I'd like to ask about the ${product.name}.`,
              )}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle /> Enquire on WhatsApp <MoveUpRight />
            </a>
          </Button>
        </article>
      ))}
    </div>
  );
}
