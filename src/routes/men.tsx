import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
export const Route = createFileRoute("/men")({
  head: () => ({
    meta: [
      { title: "Men's Footwear in Sirhind | The First Step" },
      {
        name: "description",
        content:
          "Explore men's formal, casual and everyday footwear at The First Step in Sirhind. Contact the store for current styles, sizes and prices.",
      },
      { property: "og:title", content: "Men's Footwear | The First Step" },
      {
        property: "og:description",
        content: "Explore men's footwear at The First Step in Sirhind.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CollectionPage collectionKey="men" />,
});
