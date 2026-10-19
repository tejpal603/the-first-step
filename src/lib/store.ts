import menImage from "@/assets/category-men.jpg";
import womenImage from "@/assets/category-women.jpg";
import sneakersImage from "@/assets/category-sneakers.jpg";
import storefrontImage from "@/assets/storefront.jpg";
import showroomImage from "@/assets/showroom.jpg";

export { storefrontImage, showroomImage };
export const tagline = "A House of Premium Handmade Shoes";
export const phoneDisplay = "+91 97800 27090";
export const phoneHref = "tel:+919780027090";
export const whatsappNumber = "97800-27090";
export const instagramHandle = "@thefirststep_shoes";
export const instagramHref = "https://instagram.com/thefirststep_shoes";
export const gstin = "03JCTPS8416K1Z3";
export const address =
  "Center, Lincoln College Road, Preet Nagar, Sirhind, Fatehgarh Sahib, Punjab 140406";
export const whatsappBase = "https://wa.me/919780027090";
export const directionsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`The First Step, ${address}`)}`;
export const reviewsHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`The First Step, ${address}`)}`;

export type CollectionKey = "men" | "women" | "formal-shoes" | "casual-shoes" | "sneakers";

export const collections: Record<
  CollectionKey,
  {
    title: string;
    eyebrow: string;
    description: string;
    image: string;
    imageAlt: string;
    route: `/${CollectionKey}`;
  }
> = {
  men: {
    title: "Men's Footwear",
    eyebrow: "The Men's Edit",
    description:
      "Smart silhouettes and everyday comfort, selected to carry you through every part of the day.",
    image: menImage,
    imageAlt: "Editorial display of men's formal shoes, loafers and sneakers",
    route: "/men",
  },
  women: {
    title: "Women's Footwear",
    eyebrow: "The Women's Edit",
    description:
      "Polished flats, modern heels and easy everyday shapes for a wardrobe that moves with you.",
    image: womenImage,
    imageAlt: "Editorial display of women's flats, heels and sneakers",
    route: "/women",
  },
  "formal-shoes": {
    title: "Formal Shoes",
    eyebrow: "Dress With Intention",
    description:
      "Refined shapes for work, celebrations and the moments that deserve a considered finish.",
    image: menImage,
    imageAlt: "Black and brown leather formal shoes on stone plinths",
    route: "/formal-shoes",
  },
  "casual-shoes": {
    title: "Casual Shoes",
    eyebrow: "Everyday, Elevated",
    description: "Relaxed pairs designed around effortless styling and day-long ease.",
    image: womenImage,
    imageAlt: "Premium casual footwear arranged in a warm studio",
    route: "/casual-shoes",
  },
  sneakers: {
    title: "Sneakers",
    eyebrow: "Modern Essentials",
    description: "Clean, versatile sneakers that make everyday dressing feel considered.",
    image: sneakersImage,
    imageAlt: "Black and ivory leather sneakers in an editorial studio",
    route: "/sneakers",
  },
};

export const sampleProducts = [
  {
    name: "Classic Leather Formal",
    note: "Sample catalogue item",
    image: menImage,
    collection: "Formal",
  },
  {
    name: "Everyday Comfort Sneaker",
    note: "Sample catalogue item",
    image: sneakersImage,
    collection: "Sneakers",
  },
  {
    name: "Contemporary Flat",
    note: "Sample catalogue item",
    image: womenImage,
    collection: "Women's",
  },
  {
    name: "Premium Casual Loafer",
    note: "Sample catalogue item",
    image: menImage,
    collection: "Casual",
  },
];

export function whatsappHref(message: string) {
  return `${whatsappBase}?text=${encodeURIComponent(message)}`;
}
