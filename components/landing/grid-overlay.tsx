import { cn } from "@/lib/utils";

type GridOverlayProps = {
  className?: string;
};

export function GridOverlay({ className }: GridOverlayProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 flex justify-center",
        className,
      )}
      aria-hidden="true"
    >
      <div className="grid h-full w-full grid-cols-6 gap-3.5 px-4">
        <div className="border-r border-[#e0dbcf]" />
        <div className="border-r border-[#e0dbcf]" />
        <div className="border-r border-[#e0dbcf]" />
        <div className="border-r border-[#e0dbcf]" />
        <div className="border-r border-[#e0dbcf]" />
      </div>
      <div className="absolute flex h-full w-full flex-col justify-between">
        <div className="border-t border-[#e0dbcf]" />
        <div className="border-t border-[#e0dbcf]" />
        <div className="border-t border-[#e0dbcf]" />
        <div className="border-t border-[#e0dbcf]" />
        <div className="border-t border-[#e0dbcf]" />
      </div>
    </div>
  );
}
