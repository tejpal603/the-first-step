import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery Information | The First Step Sirhind" },
      {
        name: "description",
        content: "Delivery and shipping information for The First Step in Sirhind, Punjab.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Shopping Information"
      title="Delivery & Shipping"
      intro="Details regarding local pickup in Sirhind and regional shipping options."
      sections={[
        {
          title: "In-Store Pickup",
          body: "Customers can visit our Sirhind store during regular business hours to pick up reserved pairs or try on footwear in person.",
        },
        {
          title: "Courier & Delivery Availability",
          body: "Delivery coverage, courier options, estimated timelines, and shipping charges must be confirmed directly with the store via WhatsApp or phone call prior to placing an order.",
        },
      ]}
    />
  ),
});
