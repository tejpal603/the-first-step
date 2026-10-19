import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { Instagram, MapPin, MessageCircle, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageIntro } from "@/components/PageIntro";
import {
  address,
  directionsHref,
  gstin,
  instagramHandle,
  instagramHref,
  phoneDisplay,
  phoneHref,
  showroomImage,
  storefrontImage,
  tagline,
  whatsappHref,
} from "@/lib/store";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Visit & Contact | The First Step in Sirhind" },
      {
        name: "description",
        content:
          "Visit The First Step on Lincoln College Road, Sirhind, Punjab. Contact us on WhatsApp, call, or browse our premium handmade footwear collection in person.",
      },
      { property: "og:title", content: "Visit & Contact | The First Step Sirhind" },
      {
        property: "og:description",
        content: "The First Step storefront and showroom on Lincoln College Road, Sirhind.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/storefront.jpg" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [activePhoto, setActivePhoto] = useState<"showroom" | "storefront">("showroom");

  return (
    <main>
      <PageIntro
        eyebrow="Visit & Contact"
        title="Our Flagship Store"
        description="Experience our collection in person at Lincoln College Road, Sirhind, Punjab."
      />

      <section className="px-5 pb-20 pt-6 sm:px-8 sm:pb-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
            {/* Store & Showroom Image Showcase */}
            <div className="overflow-hidden rounded-md border border-border bg-ink shadow-2xl">
              <div className="relative aspect-[3/4] sm:aspect-[4/5] w-full">
                <img
                  src={activePhoto === "showroom" ? showroomImage : storefrontImage}
                  alt={
                    activePhoto === "showroom"
                      ? "The First Step luxury shoe showroom with ambient illumination and try-on lounge in Sirhind"
                      : "The First Step Storefront - A House of Premium Handmade Shoes in Sirhind"
                  }
                  className="h-full w-full object-cover transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />

                {/* Photo Switcher Pills */}
                <div className="absolute top-4 left-4 flex gap-2 z-10">
                  <button
                    type="button"
                    onClick={() => setActivePhoto("showroom")}
                    className={`rounded-full px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
                      activePhoto === "showroom"
                        ? "bg-champagne text-ink shadow-lg"
                        : "bg-ink/75 text-ivory/80 hover:bg-ink/95 border border-ivory/20"
                    }`}
                  >
                    Interior Showroom
                  </button>
                  <button
                    type="button"
                    onClick={() => setActivePhoto("storefront")}
                    className={`rounded-full px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
                      activePhoto === "storefront"
                        ? "bg-champagne text-ink shadow-lg"
                        : "bg-ink/75 text-ivory/80 hover:bg-ink/95 border border-ivory/20"
                    }`}
                  >
                    Exterior Storefront
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-champagne">
                    {activePhoto === "showroom"
                      ? "The Showroom Experience · Lincoln College Road"
                      : "Lincoln College Road · Sirhind"}
                  </p>
                  <p className="mt-1 font-display text-2xl font-semibold text-ivory">
                    {activePhoto === "showroom" ? "Curated Footwear & Try-On Lounge" : tagline}
                  </p>
                </div>
              </div>
            </div>

            {/* Store details and contact options */}
            <div className="space-y-8 lg:pt-4">
              <div>
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                  Flagship Storefront
                </span>
                <h2 className="mt-3 font-display text-4xl font-semibold uppercase text-ink sm:text-5xl">
                  The First Step
                </h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground">
                  A House of Premium Handmade Shoes. Stop by our showroom to browse our latest
                  designs in men's footwear, formal pairs, casual styles, and everyday sneakers.
                </p>
              </div>

              <div className="grid gap-6 rounded-md border border-border bg-card p-6 sm:p-8">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                    Store Address
                  </h3>
                  <address className="mt-2 not-italic text-sm leading-6 text-foreground font-medium">
                    The First Step
                    <br />
                    {address}
                  </address>
                  <div className="mt-3">
                    <Button asChild size="sm">
                      <a href={directionsHref} target="_blank" rel="noreferrer">
                        <MapPin className="size-4" /> Open in Google Maps
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                    Direct Phone & WhatsApp
                  </h3>
                  <p className="mt-2 text-sm text-foreground font-medium">
                    <a href={phoneHref} className="hover:text-champagne transition-colors">
                      {phoneDisplay}
                    </a>
                  </p>
                  <div className="mt-3 flex flex-wrap gap-3">
                    <Button asChild variant="editorial" size="sm">
                      <a href={phoneHref}>
                        <Phone className="size-4" /> Call Store
                      </a>
                    </Button>
                    <Button asChild variant="champagne" size="sm">
                      <a
                        href={whatsappHref(
                          "Hello The First Step, I'd like to enquire about shoes.",
                        )}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <MessageCircle className="size-4" /> WhatsApp Chat
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="border-t border-border pt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                      Instagram
                    </h3>
                    <a
                      href={instagramHref}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-2 inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-champagne transition-colors"
                    >
                      <Instagram className="size-4 text-champagne" /> {instagramHandle}
                    </a>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                      GSTIN
                    </h3>
                    <p className="mt-2 font-mono text-sm font-medium text-foreground">{gstin}</p>
                  </div>
                </div>

                <div className="border-t border-border pt-6">
                  <h3 className="text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                    Store Hours
                  </h3>
                  <p className="mt-2 text-xs leading-5 text-muted-foreground">
                    Opening hours may vary on holidays. Feel free to call or WhatsApp ahead to
                    confirm current daily hours.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
