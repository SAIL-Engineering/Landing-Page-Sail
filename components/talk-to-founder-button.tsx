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
                "border-white/50 bg-white/5 text-white backdrop-blur-sm transition-all duration-150 hover:bg-white hover:text-slate-900",
                className
            )}
            onClick={() => {
                if (onBeforeClick) onBeforeClick();
                window.location.href = 'mailto:info@sailgtx.com';
            }}
            {...props}
        >
            Talk to Founder
        </Button>
    );
}
