import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image.png.asset.json";
import { Flame, Gem, Zap, Target, TrendingUp, BarChart3 } from "lucide-react";

export function SlideDashboard() {
  return (
    <UIShowcase
      eyebrow="01 — Dashboard"
      title={<>Motivation, <span className="italic text-[#B8FF2C]">not just progress.</span></>}
      subtitle="A welcome dashboard that turns learning into a daily habit through gamification — streaks, XP, gems and levels alongside real analytics."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Dashboard"
      features={[
        { icon: <Target className="h-4 w-4" />, label: "Today's Mission with live progress bar" },
        { icon: <Flame className="h-4 w-4" />, label: "Streak, XP, Gems & Level indicators" },
        { icon: <Zap className="h-4 w-4" />, label: "Continue Learning — one tap resume" },
        { icon: <BarChart3 className="h-4 w-4" />, label: "Weekly minutes chart" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Completed modules & watch time stats" },
      ]}
      note="Gamification, not guilt. The dashboard motivates students to show up — every single day."
    />
  );
}
