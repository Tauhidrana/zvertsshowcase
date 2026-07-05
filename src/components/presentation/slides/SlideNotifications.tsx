import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image-6.png.asset.json";
import { Bell, Lock, Rocket, CheckCheck, Circle, Zap } from "lucide-react";

export function SlideNotifications() {
  return (
    <UIShowcase
      eyebrow="06 — Notifications"
      title={<>Nudges that <span className="italic text-[#B8FF2C]">bring you back.</span></>}
      subtitle="Real-time notifications that celebrate progress and unlock the next step — engineered for engagement and learning consistency."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Notifications"
      features={[
        { icon: <Lock className="h-4 w-4" />, label: "Next lesson unlock alerts" },
        { icon: <Rocket className="h-4 w-4" />, label: "Level Up celebrations" },
        { icon: <Bell className="h-4 w-4" />, label: "Lesson completion notifications" },
        { icon: <Zap className="h-4 w-4" />, label: "Real-time delivery" },
        { icon: <Circle className="h-4 w-4" />, label: "Unread indicator on each item" },
        { icon: <CheckCheck className="h-4 w-4" />, label: "Mark all as read" },
      ]}
      note="Notifications aren't noise — they're the reason students come back tomorrow."
    />
  );
}
