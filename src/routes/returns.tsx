import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/returns")({
  head: () => ({
    meta: [
      { title: "Returns & Exchanges | The First Step Sirhind" },
      {
        name: "description",
        content: "Returns and exchange policy for The First Step in Sirhind, Punjab.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Customer Care"
      title="Returns & Exchanges"
      intro="Our guidelines for returns, exchanges, and sizing adjustments."
      sections={[
        {
          title: "Size Exchanges",
          body: "We recommend trying footwear on in-store for the best fit. For items requiring exchange due to size, please contact the store within 48 hours of purchase with your receipt and packaging in original condition.",
        },
        {
          title: "Store Policy Confirmation",
          body: "Specific exchange timelines and conditions for handmade footwear should be reconfirmed with the store team before completing your purchase.",
        },
      ]}
    />
  ),
});
