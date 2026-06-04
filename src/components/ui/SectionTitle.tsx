import { memo } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-12 text-center">
    <h2 className="inline-block bg-gradient-electric bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl">
      {title}
    </h2>
    <div className="mx-auto mt-3 h-0.5 w-24 animate-glow rounded-full bg-gradient-electric" />
    {subtitle && (
      <p className="mt-4 text-gray-500 dark:text-white/50">{subtitle}</p>
    )}
  </div>
);

export default memo(SectionTitle);
