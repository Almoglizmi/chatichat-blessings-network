
import React from "react";
import { cn } from "@/lib/utils";
import { Check } from "lucide-react";

interface PrayerCategoryCardProps {
  label: string;
  selected: boolean;
  onClick: () => void;
  className?: string;
}

const PrayerCategoryCard: React.FC<PrayerCategoryCardProps> = ({
  label,
  selected,
  onClick,
  className,
}) => {
  return (
    <div
      onClick={onClick}
      className={cn(
        "flex items-center justify-between p-4 rounded-xl cursor-pointer",
        "transition-all duration-300 ease-in-out",
        "border border-white/30 backdrop-blur-sm",
        selected
          ? "bg-primary/10 shadow-md border-primary/50"
          : "bg-white/50 hover:bg-white/70",
        className
      )}
    >
      <span className="font-medium text-lg">{label}</span>
      {selected && (
        <Check className="h-5 w-5 text-primary animate-scale-in" />
      )}
    </div>
  );
};

export default PrayerCategoryCard;
