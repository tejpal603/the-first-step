import { createFileRoute } from "@tanstack/react-router";
import { CollectionPage } from "@/components/CollectionPage";
export const Route = createFileRoute("/formal-shoes")({
  head: () => ({
    meta: [
      { title: "Formal Shoes in Sirhind | The First Step" },
      {
        name: "description",
        content:
          "Discover polished formal footwear for work and occasions at The First Step, Sirhind. Ask about current styles and sizes.",
      },
      { property: "og:title", content: "Formal Shoes | The First Step" },
      {
        property: "og:description",
        content: "Refined formal footwear in Sirhind, available on enquiry.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => <CollectionPage collectionKey="formal-shoes" />,
});
