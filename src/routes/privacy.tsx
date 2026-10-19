import { createFileRoute } from "@tanstack/react-router";
import { InfoPage } from "@/components/InfoPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | The First Step Sirhind" },
      {
        name: "description",
        content: "Privacy policy for The First Step website and customer interactions.",
      },
    ],
  }),
  component: () => (
    <InfoPage
      eyebrow="Legal & Privacy"
      title="Privacy Policy"
      intro="How The First Step handles customer communications and data."
      sections={[
        {
          title: "Personal Information",
          body: "When you contact us via WhatsApp, phone, or in person, your contact details are used solely to assist you with inquiries, orders, and customer service. We do not sell or distribute your data to third parties.",
        },
        {
          title: "Communications",
          body: "We will only send updates regarding your inquiries or orders requested by you. You may opt out of messages at any time.",
        },
      ]}
    />
  ),
});
