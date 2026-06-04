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
          <h1 className="bg-gradient-electric bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl">
            {typedProfile.name}
          </h1>
          <p className="mt-4 text-xl text-gray-300 sm:text-2xl">
            {tData(typedProfile.title)}
          </p>
          <p className="mx-auto mt-4 max-w-2xl text-base text-gray-500 dark:text-white/50">
            {tData(typedProfile.bio)}
          </p>
        </div>

        <div className="mt-8 flex items-center gap-4">
          <a
            href="#proyectos"
            className="group relative rounded-xl bg-gradient-electric px-6 py-3 text-sm font-medium text-white shadow-lg transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(0,240,255,0.4)]"
          >
            <span className="relative z-10">{t("hero.viewProjects")}</span>
          </a>
          <a
            href="#contacto"
            className="rounded-xl border border-dark-border/60 bg-white/5 px-6 py-3 text-sm font-medium text-gray-300 shadow-sm backdrop-blur-sm transition-all hover:border-neon-cyan/50 hover:bg-white/10 hover:text-white hover:shadow-[0_0_15px_rgba(0,240,255,0.2)]"
          >
            {t("hero.contact")}
          </a>
        </div>

        <div className="absolute bottom-8">
          <a
            href="#sobre-mi"
            className="flex flex-col items-center gap-1 text-gray-500 transition-colors hover:text-white"
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
