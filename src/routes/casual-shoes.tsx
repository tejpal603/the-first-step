import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
export const Route = createFileRoute("/casual-shoes")({
  head: () => ({
    meta: [
      { title: "Casual Shoes in Sirhind | The First Step" },
      {
        name: "description",
        content:
          "Explore easy everyday casual footwear at The First Step in Sirhind. Contact the store for current products, sizes and prices.",
      },
      { property: "og:title", content: "Casual Shoes | The First Step" },
      {
        property: "og:description",
        content: "Everyday casual footwear at The First Step in Sirhind.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CollectionPage collectionKey="casual-shoes" />,
});
