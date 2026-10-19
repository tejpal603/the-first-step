import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
export const Route = createFileRoute("/women")({
  head: () => ({
    meta: [
      { title: "Women's Footwear in Sirhind | The First Step" },
      {
        name: "description",
        content:
          "Explore women's flats, heels, sneakers and everyday footwear at The First Step in Sirhind. Enquire for current availability.",
      },
      { property: "og:title", content: "Women's Footwear | The First Step" },
      {
        property: "og:description",
        content: "Explore women's footwear at The First Step in Sirhind.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CollectionPage collectionKey="women" />,
});
