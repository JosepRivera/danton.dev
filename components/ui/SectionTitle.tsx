import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionTitle({ title, subtitle, className }: SectionTitleProps) {
  return (
    <div className={cn("mb-12", className)}>
      <h2 className="text-3xl font-bold text-storm-fg tracking-tight">{title}</h2>
      <div className="mt-2 h-px w-12 bg-storm-accent" />
      {subtitle && <p className="mt-4 text-storm-fg2 text-base">{subtitle}</p>}
    </div>
  );
}
