import { memo } from "react";
import { useTranslation } from "react-i18next";
import { MapPin, Mail } from "lucide-react";
import profile from "../../data/profile.json";
import type { Profile } from "../../types";
import { tData } from "../../utils/tData";
import SectionTitle from "../ui/SectionTitle";

const typedProfile = profile as unknown as Profile;

const About = () => {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="relative py-24">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-bg to-transparent pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-4">
        <SectionTitle title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 rounded-2xl border border-dark-border/50 bg-dark-card/30 p-8 shadow-lg backdrop-blur-sm transition-all hover:border-neon-cyan/30 hover:shadow-[0_0_30px_rgba(0,240,255,0.1)] sm:flex-row sm:p-10">
          <div className="group relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-electric opacity-40 blur-lg transition-opacity group-hover:opacity-70" />
            <img
              src={typedProfile.avatar}
              alt={typedProfile.name}
              loading="lazy"
              className="relative h-40 w-40 rounded-2xl object-cover shadow-lg sm:h-48 sm:w-48"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-lg leading-relaxed text-gray-300">
              {tData(typedProfile.bio)}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-neon-cyan" />
                {tData(typedProfile.location)}
              </span>
              <a
                href={`mailto:${typedProfile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-neon-cyan"
              >
                <Mail size={14} />
                {typedProfile.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default memo(About);
