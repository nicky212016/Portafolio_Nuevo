import { memo } from "react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => (
  <div className="mb-12 text-center">
    <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
      {title}
    </h2>
    {subtitle && (
      <p className="mt-2 text-gray-500 dark:text-white/50">{subtitle}</p>
    )}
  </div>
);

export default memo(SectionTitle);
