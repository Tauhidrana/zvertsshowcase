import { UIShowcase } from "../UIShowcase";
import shot from "@/assets/zverts-image-5.png.asset.json";
import { User, Camera, Award, Mail, Lock, Bell, BookOpen, Shield } from "lucide-react";

export function SlideSettings() {
  return (
    <UIShowcase
      eyebrow="05 — Settings"
      title={<>Account, <span className="italic text-[#B8FF2C]">your way.</span></>}
      subtitle="Everything a learner needs — profile, security, learning preferences, notifications and privacy — under one calm settings surface."
      screenshotUrl={shot.url}
      screenshotAlt="ZverTs Account Settings"
      features={[
        { icon: <User className="h-4 w-4" />, label: "Profile management" },
        { icon: <Camera className="h-4 w-4" />, label: "Upload avatar" },
        { icon: <Award className="h-4 w-4" />, label: "Certificate name" },
        { icon: <Mail className="h-4 w-4" />, label: "Email update with verification" },
        { icon: <Lock className="h-4 w-4" />, label: "Security & Privacy controls" },
        { icon: <Bell className="h-4 w-4" />, label: "Notification preferences" },
        { icon: <BookOpen className="h-4 w-4" />, label: "Learning preferences" },
        { icon: <Shield className="h-4 w-4" />, label: "Progress visibility" },
      ]}
    />
  );
}
