import { Link } from "@tanstack/react-router";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return (
    <Link to="/" aria-label="The First Step home" className={inverse ? "text-ivory" : "text-ink"}>
      <span className="block font-display text-[1.65rem] leading-none font-semibold uppercase">
        The First Step
      </span>
      <span className="mt-1 block text-[0.54rem] font-semibold uppercase tracking-[0.28em] text-champagne">
        Footwear · Sirhind
      </span>
    </Link>
  );
}
