import Image from "next/image";
import { cn } from "@/lib/cn";

type PlaceholderImageProps = {
  label?: string;
  ratio?: "square" | "portrait" | "landscape" | "wide" | "tall";
  tone?: "warm" | "cool" | "ink" | "sand";
  className?: string;
  showLabel?: boolean;
  src?: string;
  fit?: "cover" | "contain";
  sizes?: string;
  priority?: boolean;
};

const ratios: Record<NonNullable<PlaceholderImageProps["ratio"]>, string> = {
  square: "aspect-square",
  portrait: "aspect-[3/4]",
  landscape: "aspect-[4/3]",
  wide: "aspect-[16/9]",
  tall: "aspect-[2/3]",
};

const gradients: Record<NonNullable<PlaceholderImageProps["tone"]>, string> = {
  warm:
    "bg-[radial-gradient(120%_120%_at_20%_10%,#c2a888_0%,#7a5b3f_45%,#2f2519_100%)]",
  cool:
    "bg-[radial-gradient(120%_120%_at_80%_20%,#8a9aa8_0%,#3a4b5e_50%,#171e29_100%)]",
  ink:
    "bg-[radial-gradient(120%_120%_at_50%_10%,#4a3f34_0%,#1a1611_60%,#0b0906_100%)]",
  sand:
    "bg-[radial-gradient(120%_120%_at_30%_80%,#e0d4bb_0%,#b19a72_50%,#5a4a30_100%)]",
};

/**
 * Renders a next/image when `src` is provided; otherwise falls back to a
 * neutral gradient placeholder that respects the target aspect ratio.
 * Same wrapper size in both cases — safe to swap without a layout shift.
 */
export function PlaceholderImage({
  label,
  ratio = "portrait",
  tone = "warm",
  className,
  showLabel = false,
  src,
  fit = "cover",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority,
}: PlaceholderImageProps) {
  return (
    <div
      role="img"
      aria-label={label ?? "Artwork"}
      className={cn(
        "relative overflow-hidden",
        ratios[ratio],
        src ? "bg-canvas-soft" : gradients[tone],
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={label ?? ""}
          fill
          sizes={sizes}
          priority={priority}
          className={cn(fit === "contain" ? "object-contain" : "object-cover")}
        />
      ) : (
        <>
          <div className="absolute inset-0 opacity-[0.06] mix-blend-overlay bg-[repeating-linear-gradient(45deg,rgba(255,255,255,0.5)_0px,rgba(255,255,255,0.5)_1px,transparent_1px,transparent_5px)]" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
        </>
      )}
      {showLabel && label ? (
        <span className="absolute bottom-3 left-4 text-[0.65rem] uppercase tracking-[0.2em] text-white/70 drop-shadow">
          {label}
        </span>
      ) : null}
    </div>
  );
}
