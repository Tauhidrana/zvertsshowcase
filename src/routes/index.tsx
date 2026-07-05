import { createFileRoute } from "@tanstack/react-router";
import { Presentation } from "@/components/presentation/Presentation";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZverTs — AI-Powered Structured Learning" },
      {
        name: "description",
        content:
          "ZverTs is an AI-powered structured learning platform. Others help you start learning. ZverTs helps you finish it.",
      },
      { property: "og:title", content: "ZverTs — AI-Powered Structured Learning" },
      {
        property: "og:description",
        content: "Turn any playlist into a structured course with AI tutoring, daily missions and gamified progress.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return <Presentation />;
}
