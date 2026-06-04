import { memo } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-12 text-center">
    <h2 className="text-gradient text-3xl font-bold tracking-tight sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 dark:text-white/50 sm:text-base">{subtitle}</p>
    )}
  </div>
);

export default memo(SectionTitle);
