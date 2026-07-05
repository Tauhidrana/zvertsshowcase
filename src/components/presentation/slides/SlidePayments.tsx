import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image-4.png.asset.json";
import { Sparkles, Infinity as InfIcon, Coins, Package, Award, ShieldCheck } from "lucide-react";

export function SlidePayments() {
  return (
    <UIShowcase
      eyebrow="04 — Payments"
      title={<>Unlock more <span className="italic text-[#B8FF2C]">conversions.</span></>}
      subtitle="One-time payments. Credits never expire. The first purchase also unlocks AI Tutor for lifetime — no subscriptions, no lock-in."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Payments"
      features={[
        { icon: <Coins className="h-4 w-4" />, label: "Convert Credits — pay per playlist" },
        { icon: <InfIcon className="h-4 w-4" />, label: "AI Tutor unlocked for life on first buy" },
        { icon: <Package className="h-4 w-4" />, label: "Single, Mini & Pro Pack tiers" },
        { icon: <Award className="h-4 w-4" />, label: "Pro Pack — Best Value, save 30%" },
        { icon: <Sparkles className="h-4 w-4" />, label: "Credits never expire" },
        { icon: <ShieldCheck className="h-4 w-4" />, label: "Manual approval — secure verification" },
      ]}
      note="Payment is reviewed manually within a few hours — human-checked, refund-friendly."
    />
  );
}
