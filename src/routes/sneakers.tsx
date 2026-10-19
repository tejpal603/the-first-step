import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
export const Route = createFileRoute("/sneakers")({
  head: () => ({
    meta: [
      { title: "Sneakers in Sirhind | The First Step" },
      {
        name: "description",
        content:
          "Explore versatile everyday sneakers at The First Step footwear store in Sirhind. Enquire for current colors, sizes and prices.",
      },
      { property: "og:title", content: "Sneakers | The First Step" },
      { property: "og:description", content: "Modern sneakers at The First Step in Sirhind." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CollectionPage collectionKey="sneakers" />,
});
