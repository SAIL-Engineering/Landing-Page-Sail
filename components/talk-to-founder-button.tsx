"use client";

import { Button } from "@/components/ui/button";
import type { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface TalkToFounderButtonProps extends ButtonProps {
  onBeforeClick?: () => void;
}

export function TalkToFounderButton({
  className,
  onBeforeClick,
  ...props
}: TalkToFounderButtonProps) {
  return (
    <Button
      variant="outline"
      className={cn(
        "border-[#d9d0be] bg-white text-slate-900 transition-all duration-150 hover:border-slate-900 hover:bg-[#f4f5f7] hover:text-slate-900",
        className,
      )}
      onClick={() => {
        if (onBeforeClick) onBeforeClick();
        window.location.href = "mailto:info@sailgtx.com";
      }}
      {...props}
    >
      Talk to Founder
    </Button>
  );
}
