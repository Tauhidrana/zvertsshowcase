import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image-3.png.asset.json";
import { Target, Trophy, Flame, ListChecks, Clock, TrendingUp } from "lucide-react";

export function SlideGrowth() {
  return (
    <UIShowcase
      eyebrow="03 — Growth"
      title={<>Be better than <span className="italic text-[#B8FF2C]">yesterday.</span></>}
      subtitle="Consistency beats binge learning. A daily mission, a comparison against yesterday, and a leaderboard that keeps momentum alive."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Growth"
      features={[
        { icon: <Target className="h-4 w-4" />, label: "Today's Goal with 2/3 mission tracker" },
        { icon: <ListChecks className="h-4 w-4" />, label: "Daily Challenge to close the loop" },
        { icon: <TrendingUp className="h-4 w-4" />, label: "Yesterday vs Today comparison" },
        { icon: <Clock className="h-4 w-4" />, label: "Lessons, quizzes & minutes learned" },
        { icon: <Flame className="h-4 w-4" />, label: "Streak grows only when mission completes" },
        { icon: <Trophy className="h-4 w-4" />, label: "Top Players leaderboard" },
      ]}
      note="Streak grows when you complete today's mission — not by just opening the app."
    />
  );
}
