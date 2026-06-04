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
      className="group cursor-pointer overflow-hidden rounded-2xl border border-dark-border/50 bg-dark-card/40 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-neon-cyan/40 hover:shadow-[0_0_30px_rgba(0,240,255,0.15)]"
    >
      <div className="relative aspect-video overflow-hidden bg-dark-bg">
        <img
          src={project.thumbnail}
          alt={tData(project.title)}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-dark-bg/0 transition-all group-hover:bg-dark-bg/40">
          <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white/80 bg-dark-card/60 opacity-0 shadow-lg backdrop-blur-sm transition-all group-hover:opacity-100 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]">
            <Play size={20} className="ml-0.5 text-white" />
          </div>
        </div>
      </div>
      <div className="p-5">
        {project.tags.length > 0 && (
          <div className="mb-2 flex items-center gap-2">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-neon-cyan/20 bg-neon-cyan/5 px-2.5 py-0.5 text-xs font-medium text-neon-cyan"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
        <h3 className="text-lg font-semibold text-white transition-colors group-hover:text-neon-cyan">
          {tData(project.title)}
        </h3>
        <p className="mt-1 line-clamp-2 text-sm text-gray-400">
          {tData(project.description)}
        </p>
      </div>
    </article>
  );
};

export default memo(ProjectCard);
