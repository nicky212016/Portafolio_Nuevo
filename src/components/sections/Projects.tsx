import { useState, useCallback, useRef, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X, Box, Sparkles, Film, Palette, Code } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects.json";
import type { Project } from "../../types";
import { tData } from "../../utils/tData";
import { useFocusTrap } from "../../hooks/useFocusTrap";

const typedProjects = projects as Project[];

const categoryOrder = ["3D", "Motion", "Video", "Design", "Programming"];

const categoryIcons: Record<string, typeof Box> = {
  "3D": Box,
  Motion: Sparkles,
  Video: Film,
  Design: Palette,
  Programming: Code,
};

const INITIAL_VISIBLE = 3;

const Projects = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);
  const [expanded, setExpanded] = useState<Set<string>>(new Set());
  const modalRef = useRef<HTMLDivElement>(null);

  const open = useCallback((project: Project) => setSelected(project), []);
  const close = useCallback(() => setSelected(null), []);

  const toggleCategory = useCallback((cat: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(cat)) next.delete(cat);
      else next.add(cat);
      return next;
    });
  }, []);

  useFocusTrap(modalRef, !!selected);

  const groups = useMemo(() => {
    const map = new Map<string, Project[]>();
    for (const p of typedProjects) {
      const cat = p.category || "Other";
      if (!map.has(cat)) map.set(cat, []);
      map.get(cat)!.push(p);
    }
    return categoryOrder
      .filter((c) => map.has(c))
      .map((c) => ({ category: c, projects: map.get(c)! }));
  }, []);

  return (
    <section id="proyectos" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="section-panel rounded-3xl p-5 sm:p-8">
          {groups.map(({ category, projects: catProjects }) => {
            const Icon = categoryIcons[category] || Box;
            const isExpanded = expanded.has(category);
            const visible = isExpanded ? catProjects : catProjects.slice(0, INITIAL_VISIBLE);
            const hasMore = catProjects.length > INITIAL_VISIBLE;

            return (
              <div key={category} className="mb-10 last:mb-0">
                <div className="mb-5 flex items-center gap-2.5">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/15">
                    <Icon size={16} className="text-primary-400" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white/80">
                    {t(`projects.categories.${category}`)}
                  </h3>
                  <span className="text-xs text-white/30">
                    ({catProjects.length})
                  </span>
                </div>
                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                  {visible.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onSelect={open}
                    />
                  ))}
                </div>
                {hasMore && (
                  <div className="mt-5 flex justify-center">
                    <button
                      onClick={() => toggleCategory(category)}
                      className="rounded-xl border border-primary-500/25 px-5 py-2 text-sm font-medium text-primary-400 transition-colors hover:bg-primary-500/10 hover:border-primary-500/40"
                    >
                      {isExpanded
                        ? t("projects.showLess")
                        : t("projects.showMore", { count: catProjects.length - INITIAL_VISIBLE })}
                    </button>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg/60 p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-label={tData(selected.title)}
              className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl bg-white shadow-2xl dark:bg-dark-card"
            >
              <div className="relative aspect-video bg-gray-100 dark:bg-dark-bg">
                {selected.videoUrl ? (
                  <ReactPlayer
                    url={selected.videoUrl}
                    width="100%"
                    height="100%"
                    light={selected.thumbnail}
                    playing
                    controls
                  />
                ) : (
                  <img
                    src={selected.thumbnail}
                    alt={tData(selected.title)}
                    className="h-full w-full object-cover"
                  />
                )}
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {tData(selected.title)}
                    </h3>
                    <span className="text-sm text-gray-500 dark:text-white/50">
                      {selected.year}
                    </span>
                  </div>
                  <button
                    onClick={close}
                    className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 dark:hover:bg-dark-bg"
                  >
                    <X size={20} />
                  </button>
                </div>

                <p className="mt-4 text-gray-600 dark:text-white/70">
                  {tData(selected.description)}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {selected.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-primary-50 px-3 py-1 text-xs font-medium text-primary-700 dark:bg-primary-950/50 dark:text-primary-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
