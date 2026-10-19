import { Link, useRouterState } from "@tanstack/react-router";
import { Instagram, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import { useState, type ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";
import { Button } from "@/components/ui/button";
import {
  address,
  directionsHref,
  gstin,
  instagramHandle,
  instagramHref,
  phoneDisplay,
  phoneHref,
  whatsappHref,
} from "@/lib/store";

const nav = [
  ["Men", "/men"],
  ["Women", "/women"],
  ["Formal", "/formal-shoes"],
  ["Casual", "/casual-shoes"],
  ["Sneakers", "/sneakers"],
  ["Contact", "/contact"],
] as const;

export function StoreShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  return (
    <div className="min-h-screen bg-background">
      <div className="bg-ink px-4 py-2 text-center text-[0.62rem] font-semibold uppercase tracking-[0.13em] text-ivory">
        In-store shopping in Sirhind · Delivery availability on enquiry
      </div>
      <header className="sticky top-0 z-50 border-b border-border/70 bg-ivory/95 backdrop-blur-md">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
          <BrandMark />
          <nav className="hidden items-center gap-6 lg:flex" aria-label="Main navigation">
            {nav.map(([label, to]) => (
              <Link
                key={to}
                to={to}
                className={`text-[0.65rem] font-bold uppercase tracking-[0.12em] transition-colors hover:text-champagne ${pathname === to ? "text-champagne" : "text-foreground"}`}
              >
                {label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="icon">
              <a
                href={whatsappHref("Hello The First Step, I'd like help finding footwear.")}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle />
              </a>
            </Button>
            <Button asChild>
              <Link to="/men">Shop collection</Link>
            </Button>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </Button>
        </div>
        {open && (
          <div className="border-t border-border bg-ivory px-5 py-6 lg:hidden">
            <nav className="grid gap-1" aria-label="Mobile navigation">
              {nav.map(([label, to]) => (
                <Link
                  key={to}
                  to={to}
                  onClick={() => setOpen(false)}
                  className="border-b border-border py-3 font-display text-2xl font-semibold"
                >
                  {label}
                </Link>
              ))}
            </nav>
            <div className="mt-5 grid grid-cols-2 gap-2">
              <Button asChild>
                <a href={phoneHref}>
                  <Phone /> Call
                </a>
              </Button>
              <Button asChild variant="champagne">
                <a
                  href={whatsappHref("Hello The First Step, I'd like help finding footwear.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        )}
      </header>
      {children}
      <footer className="bg-ink px-5 pb-8 pt-16 text-ivory sm:px-8 sm:pt-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-ivory/15 pb-14 md:grid-cols-2 lg:grid-cols-4">
            <div>
              <BrandMark inverse />
              <p className="mt-5 max-w-xs text-sm leading-7 text-ivory/60">
                A welcoming footwear destination for everyday style and special occasions in
                Sirhind.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                Collections
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                {nav.slice(0, 5).map(([label, to]) => (
                  <li key={to}>
                    <Link to={to} className="hover:text-ivory">
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                Visit & enquire
              </h2>
              <address className="mt-5 not-italic text-sm leading-7 text-ivory/70">
                {address}
              </address>
              <a href={phoneHref} className="mt-4 block text-sm hover:text-champagne">
                {phoneDisplay}
              </a>
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-flex items-center gap-1.5 text-sm text-ivory/70 hover:text-champagne transition-colors"
              >
                <Instagram className="size-3.5 text-champagne" /> {instagramHandle}
              </a>
              <p className="mt-2 text-xs text-ivory/45">GSTIN: {gstin}</p>
              <p className="mt-2 text-xs text-ivory/45">
                Weekly opening hours: awaiting owner confirmation.
              </p>
            </div>
            <div>
              <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-champagne">
                Information
              </h2>
              <ul className="mt-5 space-y-3 text-sm text-ivory/70">
                <li>
                  <Link to="/privacy">Privacy</Link>
                </li>
                <li>
                  <Link to="/terms">Terms</Link>
                </li>
                <li>
                  <Link to="/delivery">Delivery</Link>
                </li>
                <li>
                  <Link to="/returns">Returns & exchanges</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-5 pt-7 text-xs text-ivory/45 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 The First Step. Sirhind, Punjab.</p>
            <div className="flex flex-wrap gap-5">
              <a
                href={instagramHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ivory"
              >
                <Instagram className="size-3.5" /> Instagram
              </a>
              <a
                href={directionsHref}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ivory"
              >
                <MapPin className="size-3.5" /> Directions
              </a>
              <a
                href={whatsappHref("Hello The First Step, I'd like to make an enquiry.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-ivory"
              >
                <MessageCircle className="size-3.5" /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
