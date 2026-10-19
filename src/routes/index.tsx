import { useState } from "react";
import { Link, createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  CircleDollarSign,
  Footprints,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  ShoppingBag,
  Sparkles,
  Star,
} from "lucide-react";
import heroImage from "@/assets/hero-footwear.jpg";
import menImage from "@/assets/category-men.jpg";
import womenImage from "@/assets/category-women.jpg";
import sneakersImage from "@/assets/category-sneakers.jpg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ProductGrid } from "@/components/ProductGrid";
import {
  address,
  directionsHref,
  gstin,
  instagramHandle,
  instagramHref,
  phoneDisplay,
  phoneHref,
  reviewsHref,
  showroomImage,
  storefrontImage,
  tagline,
  whatsappHref,
} from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The First Step | Premium Footwear Store in Sirhind" },
      {
        name: "description",
        content:
          "Discover men's and women's footwear, sneakers, formal and casual shoes at The First Step in Sirhind, Punjab. Visit or enquire on WhatsApp.",
      },
      { property: "og:title", content: "The First Step | Footwear Store in Sirhind" },
      {
        property: "og:description",
        content:
          "Standout style and everyday comfort at The First Step, Sirhind. Explore the collection, get directions or enquire on WhatsApp.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ShoeStore",
          name: "The First Step",
          telephone: "+919780027090",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Center, Lincoln College Road, Preet Nagar",
            addressLocality: "Sirhind",
            addressRegion: "Punjab",
            postalCode: "140406",
            addressCountry: "IN",
          },
          aggregateRating: { "@type": "AggregateRating", ratingValue: "4.3", reviewCount: "282" },
        }),
      },
    ],
  }),
  component: HomePage,
});

const categories = [
  {
    title: "Men's Footwear",
    copy: "Style that moves with you.",
    image: menImage,
    to: "/men" as const,
  },
  {
    title: "Women's Footwear",
    copy: "A statement in every step.",
    image: womenImage,
    to: "/women" as const,
  },
  {
    title: "Sneakers",
    copy: "Everyday style. Effortless comfort.",
    image: sneakersImage,
    to: "/sneakers" as const,
  },
  {
    title: "Formal Shoes",
    copy: "Made for moments that matter.",
    image: menImage,
    to: "/formal-shoes" as const,
  },
  {
    title: "Casual Footwear",
    copy: "Comfort for everyday living.",
    image: womenImage,
    to: "/casual-shoes" as const,
  },
  {
    title: "Festive Edit",
    copy: "Special-occasion styles on enquiry.",
    image: sneakersImage,
    to: "/contact" as const,
  },
];

const faqs = [
  [
    "What types of footwear are available?",
    "Please contact the store for the current men's, women's, formal, casual, sneaker and festive selection.",
  ],
  [
    "How can I check available sizes?",
    "Share the style and size you need on WhatsApp or call the store before visiting.",
  ],
  [
    "Can I enquire about a product before visiting?",
    "Yes. Use any WhatsApp button on this website or call +91 97800 27090.",
  ],
  [
    "Is home delivery available in my area?",
    "Delivery is offered, but coverage, timing and charges must be confirmed directly with the store.",
  ],
  ["What payment methods are accepted?", "Awaiting confirmation from the store owner."],
  [
    "What is the return or exchange policy?",
    "Awaiting confirmation from the store owner. Please ask before purchase.",
  ],
  ["Where is The First Step located?", address],
];

function HomePage() {
  const [storeView, setStoreView] = useState<"showroom" | "storefront">("showroom");

  return (
    <main>
      <section className="relative min-h-[78vh] overflow-hidden bg-ink text-ivory sm:min-h-[82vh]">
        <img
          src={heroImage}
          alt="Black leather loafer and ivory sneaker presented on stone plinths"
          width={1600}
          height={1104}
          fetchPriority="high"
          className="absolute inset-0 h-full w-full object-cover object-[64%_center] opacity-70"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/65 to-transparent" />
        <div className="relative mx-auto flex min-h-[78vh] max-w-7xl items-end px-5 pb-14 pt-20 sm:min-h-[82vh] sm:px-8 sm:pb-20">
          <div className="max-w-3xl editorial-reveal">
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Sirhind, Punjab · Your next favourite pair awaits
            </p>
            <h1 className="font-display text-6xl leading-[0.84] font-semibold uppercase sm:text-8xl lg:text-[7.5rem]">
              Step into
              <br />
              something better.
            </h1>
            <p className="mt-7 max-w-xl text-sm leading-7 text-ivory/80 sm:text-base">
              Discover footwear that brings together standout style, everyday comfort, and a look
              that feels uniquely yours.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="champagne" size="lg">
                <Link to="/men">
                  Explore the collection <ArrowRight />
                </Link>
              </Button>
              <Button asChild variant="ivory" size="lg">
                <Link to="/contact">Visit our store</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-26">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Shop by category
            </p>
            <h2 className="mt-3 font-display text-5xl font-semibold uppercase leading-none text-ink sm:text-6xl">
              Find your perfect pair.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              From everyday essentials to occasions worth dressing up for. Current stock is
              available on enquiry.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {categories.map((category) => (
              <Link
                key={category.title}
                to={category.to}
                className="group relative aspect-[4/5] overflow-hidden bg-stone"
              >
                <img
                  src={category.image}
                  alt={`${category.title} editorial footwear collection`}
                  loading="lazy"
                  width={1408}
                  height={1104}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/5 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 text-ivory">
                  <h3 className="font-display text-3xl font-semibold">{category.title}</h3>
                  <p className="mt-1 text-xs text-ivory/70">{category.copy}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                    Explore collection <ArrowRight className="size-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper px-5 py-18 sm:px-8 sm:py-26">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
                The collection edit
              </p>
              <h2 className="mt-3 font-display text-5xl font-semibold uppercase text-ink sm:text-6xl">
                Made to be discovered.
              </h2>
              <p className="mt-4 text-sm text-muted-foreground">
                Sample presentation only — contact the store for real products, prices, sizes and
                stock.
              </p>
            </div>
            <Button asChild variant="editorial">
              <Link to="/men">
                View all footwear <ArrowRight />
              </Link>
            </Button>
          </div>
          <ProductGrid />
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
            <h2 className="font-display text-5xl font-semibold uppercase leading-none text-ink sm:text-6xl">
              Good style
              <br />
              starts here.
            </h2>
            <div className="grid gap-px bg-border sm:grid-cols-2">
              {[
                [
                  Footprints,
                  "Footwear for Every Occasion",
                  "Explore options for everyday wear, work, celebrations and special occasions.",
                ],
                [
                  Sparkles,
                  "Personal Shopping Assistance",
                  "Get help finding a style and size that suits your needs.",
                ],
                [
                  CircleDollarSign,
                  "Clear and Transparent Pricing",
                  "Confirm product prices and applicable offers before purchase.",
                ],
                [
                  ShoppingBag,
                  "Convenient Shopping",
                  "Visit our Sirhind store or enquire about available delivery options.",
                ],
              ].map(([Icon, title, copy]) => {
                const FeatureIcon = Icon as typeof Footprints;
                return (
                  <div key={String(title)} className="bg-background p-7 sm:p-9">
                    <FeatureIcon className="size-6 text-champagne" />
                    <h3 className="mt-6 font-display text-2xl font-semibold text-ink">
                      {String(title)}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">{String(copy)}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="grid bg-ink text-ivory lg:grid-cols-2">
        <div className="relative min-h-[30rem] lg:min-h-[40rem] overflow-hidden bg-black/50">
          <img
            src={storeView === "showroom" ? showroomImage : storefrontImage}
            alt={
              storeView === "showroom"
                ? "The First Step luxury shoe showroom with ambient illumination and try-on lounge in Sirhind"
                : "The First Step flagship store front in Sirhind, Punjab - A House of Premium Handmade Shoes"
            }
            loading="lazy"
            className="h-full w-full object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent lg:hidden" />
          <div className="absolute top-5 left-5 flex gap-2 z-10">
            <button
              type="button"
              onClick={() => setStoreView("showroom")}
              className={`rounded-full px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
                storeView === "showroom"
                  ? "bg-champagne text-ink shadow-lg"
                  : "bg-ink/75 text-ivory/80 hover:bg-ink/95 border border-ivory/20"
              }`}
            >
              Showroom Interior
            </button>
            <button
              type="button"
              onClick={() => setStoreView("storefront")}
              className={`rounded-full px-3.5 py-1.5 text-[0.65rem] font-bold uppercase tracking-wider backdrop-blur-md transition-all ${
                storeView === "storefront"
                  ? "bg-champagne text-ink shadow-lg"
                  : "bg-ink/75 text-ivory/80 hover:bg-ink/95 border border-ivory/20"
              }`}
            >
              Storefront Exterior
            </button>
          </div>
          <div className="absolute bottom-5 left-5 rounded border border-champagne/30 bg-ink/85 px-4 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.14em] text-champagne backdrop-blur-md">
            {storeView === "showroom"
              ? "The Showroom · Try-on Lounge & Display Aisle"
              : "Flagship Storefront · Sirhind, Punjab"}
          </div>
        </div>
        <div className="flex items-center px-6 py-14 sm:px-12 lg:px-16">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              The store experience
            </p>
            <h2 className="mt-5 font-display text-5xl font-semibold uppercase leading-[0.95] sm:text-6xl">
              {tagline}
            </h2>
            <p className="mt-7 text-sm leading-7 text-ivory/70">
              Step into <strong className="text-ivory font-semibold">The First Step</strong> in
              Sirhind. We craft and curate premium handmade footwear designed for standout elegance,
              day-long comfort, and enduring character.
            </p>
            <div className="mt-7 grid grid-cols-2 gap-4 border-y border-ivory/15 py-5 sm:grid-cols-3">
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  Instagram
                </span>
                <a
                  href={instagramHref}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-1 inline-flex items-center gap-1.5 text-xs text-ivory/80 transition-colors hover:text-champagne"
                >
                  <Instagram className="size-3.5" /> {instagramHandle}
                </a>
              </div>
              <div>
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  WhatsApp & Phone
                </span>
                <a
                  href={phoneHref}
                  className="mt-1 inline-flex items-center gap-1.5 text-xs text-ivory/80 transition-colors hover:text-champagne"
                >
                  <Phone className="size-3.5" /> +91 97800 27090
                </a>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <span className="block text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-champagne">
                  GSTIN
                </span>
                <span className="mt-1 block font-mono text-xs text-ivory/80">{gstin}</span>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button asChild variant="champagne">
                <a href={directionsHref} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
              <Button asChild variant="ivory">
                <a
                  href={whatsappHref(
                    "Hello The First Step, I'd like to plan a visit to your store.",
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> WhatsApp enquiry
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Sirhind, Punjab
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold uppercase leading-none text-ink sm:text-6xl">
              Your next pair is closer than you think.
            </h2>
            <address className="mt-7 max-w-md not-italic text-sm leading-7 text-muted-foreground">
              The First Step
              <br />
              {address}
              <br />
              <a href={phoneHref} className="font-semibold text-foreground">
                {phoneDisplay}
              </a>
            </address>
            <p className="mt-4 text-xs text-muted-foreground">
              Complete weekly hours are awaiting owner confirmation.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Button asChild>
                <a href={directionsHref} target="_blank" rel="noreferrer">
                  <MapPin /> Get directions
                </a>
              </Button>
              <Button asChild variant="editorial">
                <a href={phoneHref}>
                  <Phone /> Call the store
                </a>
              </Button>
              <Button asChild variant="champagne">
                <a
                  href={whatsappHref("Hello The First Step, I'd like to plan a visit.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
          <a
            href={directionsHref}
            target="_blank"
            rel="noreferrer"
            className="group relative flex aspect-[5/4] overflow-hidden rounded-sm bg-stone text-center shadow-lg"
          >
            <img
              src={storefrontImage}
              alt="The First Step storefront on Lincoln College Road"
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover opacity-45 transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/40 transition-opacity group-hover:opacity-85" />
            <div className="relative m-auto p-8 text-ivory">
              <MapPin className="mx-auto size-10 text-champagne" />
              <p className="mt-4 font-display text-3xl font-semibold text-ivory sm:text-4xl">
                Lincoln College Road
              </p>
              <p className="mt-2 text-xs text-ivory/80">
                Sirhind, Punjab · Look for the gold storefront signage
              </p>
              <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-champagne">
                Open in Google Maps <ArrowRight className="size-3.5" />
              </span>
            </div>
          </a>
        </div>
      </section>

      <section className="bg-secondary/45 px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div>
            <div className="flex items-center gap-2 text-champagne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-current" />
              ))}
            </div>
            <p className="mt-5 font-display text-7xl font-semibold leading-none text-ink">
              4.3<span className="text-3xl">/5</span>
            </p>
            <p className="mt-3 text-sm text-muted-foreground">From 282 Google reviews</p>
            <p className="mt-3 text-xs text-muted-foreground">
              Rating and count provided by the business listing; reconfirm before launch.
            </p>
            <Button asChild className="mt-7">
              <a href={reviewsHref} target="_blank" rel="noreferrer">
                Read customer reviews <ArrowRight />
              </a>
            </Button>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Authentic feedback only
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold uppercase leading-none text-ink">
              What customers are saying.
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-7 text-muted-foreground">
              We have not reproduced review excerpts without permission. Follow the link to read
              current, unedited customer experiences on Google.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 py-18 sm:px-8 sm:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
              Shopping information
            </p>
            <h2 className="mt-4 font-display text-5xl font-semibold uppercase text-ink">
              Before you visit.
            </h2>
            <p className="mt-5 text-sm leading-7 text-muted-foreground">
              Quick answers for planning your visit or enquiry. Unconfirmed policies are identified
              clearly.
            </p>
          </div>
          <Accordion type="single" collapsible>
            {faqs.map(([question, answer]) => (
              <AccordionItem key={question} value={question}>
                <AccordionTrigger className="py-5 text-left text-base no-underline hover:no-underline">
                  {question}
                </AccordionTrigger>
                <AccordionContent className="pb-6 pr-8 leading-7 text-muted-foreground">
                  {answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="relative overflow-hidden bg-ink px-5 py-20 text-ivory sm:px-8 sm:py-28">
        <img
          src={showroomImage}
          alt="Inside The First Step luxury shoe showroom on Lincoln College Road, Sirhind"
          loading="lazy"
          width={1408}
          height={1104}
          className="absolute inset-0 h-full w-full object-cover opacity-40 object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/80 to-ink/65" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-champagne">
            Take the first step
          </p>
          <h2 className="mt-4 max-w-4xl font-display text-6xl font-semibold uppercase leading-[0.9] sm:text-8xl">
            Your next favourite pair starts here.
          </h2>
          <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/80">
            Visit our Sirhind showroom to browse handpicked footwear, experience personalized try-on
            fittings, and discover pairs made to elevate your wardrobe.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="champagne">
              <Link to="/men">
                Explore footwear <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="ivory">
              <Link to="/contact">Visit the showroom</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
