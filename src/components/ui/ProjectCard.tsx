import { memo, useCallback } from "react";
import { Play } from "lucide-react";
import type { Project } from "../../types";
import { tData } from "../../utils/tData";

interface ProjectCardProps {
  project: Project;
  onSelect: (project: Project) => void;
}

const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  const handleClick = useCallback(() => onSelect(project), [project, onSelect]);

  return (
    <article
      onClick={handleClick}
      className="group card-hover cursor-pointer overflow-hidden rounded-2xl glass-card"
    >
      <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-dark-bg">
        <img
          src={project.thumbnail}
          alt={tData(project.title)}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-colors group-hover:bg-black/30">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-opacity group-hover:opacity-100 dark:bg-dark-card/90">
            <Play size={20} className="ml-0.5 text-gray-900 dark:text-white" />
          </div>
        </div>
      </div>
      <div className="p-5">
        <div className="mb-2 flex items-start justify-between gap-2">
          {project.tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
          <span className="text-xs font-medium text-gray-400 dark:text-white/40">
            {project.year}
          </span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          {tData(project.title)}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-500 dark:text-white/50">
          {tData(project.description)}
        </p>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
