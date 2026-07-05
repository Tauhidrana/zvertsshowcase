import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image-2.png.asset.json";
import { Youtube, Eye, BookOpen, CheckCircle2, Lock, Layers } from "lucide-react";

export function SlideCourses() {
  return (
    <UIShowcase
      eyebrow="02 — Courses"
      title={<>Every playlist becomes a <span className="italic text-[#B8FF2C]">course.</span></>}
      subtitle="Paste a YouTube playlist URL and ZverTs converts it into a structured, trackable learning course — lessons, progress and completion built in."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Courses"
      features={[
        { icon: <Youtube className="h-4 w-4" />, label: "YouTube playlist URL import" },
        { icon: <Eye className="h-4 w-4" />, label: "Instant preview before converting" },
        { icon: <Layers className="h-4 w-4" />, label: "Structured course cards with lesson counts" },
        { icon: <BookOpen className="h-4 w-4" />, label: "Per-course progress bar" },
        { icon: <CheckCircle2 className="h-4 w-4" />, label: "Completion status (e.g. 21/21 Done)" },
        { icon: <Lock className="h-4 w-4" />, label: "Private, personal course library" },
      ]}
    />
  );
}
