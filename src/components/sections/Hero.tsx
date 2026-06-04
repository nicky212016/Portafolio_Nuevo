import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowDown } from "lucide-react";
import profile from "../../data/profile.json";
import type { Profile } from "../../types";
import { tData } from "../../utils/tData";
import HeroScene from "../three/HeroScene";

const typedProfile = profile as unknown as Profile;

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <HeroScene />
      </div>
      <div className="mx-auto flex w-full max-w-6xl flex-col items-center px-4 text-center">
        <div>
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl lg:text-7xl">
            {typedProfile.name}
          </h1>
          <p className="mt-4 text-xl text-gray-600 dark:text-white/70 sm:text-2xl">
            {tData(typedProfile.title)}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 dark:text-white/50">
            {tData(typedProfile.shortBio)}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#proyectos"
            className="rounded-xl bg-primary-500 px-6 py-3 text-sm font-medium text-white shadow-sm transition-colors hover:bg-primary-600"
          >
            {t("hero.viewProjects")}
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-gray-300 px-6 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-dark-border dark:text-white/70 dark:hover:bg-dark-card"
          >
            {t("hero.contact")}
          </a>
        </div>

        <div className="absolute bottom-8">
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-1 text-gray-400 transition-colors hover:text-gray-600 dark:text-white/40 dark:hover:text-white/70"
          >
            <span className="text-xs">{t("hero.scroll")}</span>
            <ArrowDown size={16} className="animate-bounce" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default memo(Hero);
