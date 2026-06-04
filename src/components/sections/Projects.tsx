import { useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import ReactPlayer from "react-player/lazy";
import SectionTitle from "../ui/SectionTitle";
import ProjectCard from "../ui/ProjectCard";
import projects from "../../data/projects.json";
import type { Project } from "../../types";
import { tData } from "../../utils/tData";

const typedProjects = projects as Project[];

const Projects = () => {
  const { t } = useTranslation();
  const [selected, setSelected] = useState<Project | null>(null);

  const open = useCallback((project: Project) => setSelected(project), []);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="proyectos" className="glass-card py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("projects.title")} subtitle={t("projects.subtitle")} />

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {typedProjects.map((project) => (
            <ProjectCard key={project.id} project={project} onSelect={open} />
          ))}
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
