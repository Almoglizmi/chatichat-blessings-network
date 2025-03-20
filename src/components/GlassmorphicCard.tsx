
import React, { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassmorphicCardProps {
  children: ReactNode;
  className?: string;
}

const GlassmorphicCard: React.FC<GlassmorphicCardProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 shadow-lg transition-all duration-300",
        "hover:shadow-xl border border-white/30",
        "backdrop-blur-md",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassmorphicCard;
