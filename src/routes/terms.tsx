import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | The First Step Sirhind" },
      {
        name: "description",
        content: "Terms of service and purchasing guidelines for The First Step in Sirhind.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Terms of Service"
      title="Terms & Conditions"
      intro="Terms governing the use of this website and purchases made with The First Step."
      sections={[
        {
          title: "Store Products and Availability",
          body: "Photographs and catalogue items displayed are representative of our handcrafted shoe collections. Actual stock availability, colors, and textures may vary according to current inventory in our Sirhind showroom.",
        },
        {
          title: "Pricing and Orders",
          body: "Prices are confirmed at the time of inquiry or in-store purchase. Tax invoices include GSTIN details as issued by The First Step.",
        },
      ]}
    />
  ),
});
