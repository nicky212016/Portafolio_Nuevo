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
    <section id="sobre-mi" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("about.title")} subtitle={t("about.subtitle")} />

        <div className="glass-card card-hover mx-auto flex max-w-4xl flex-col items-center gap-8 rounded-2xl p-8 sm:flex-row sm:p-10">
          <div className="relative flex-shrink-0">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-primary opacity-40 blur-lg" />
            <img
              src={typedProfile.avatar}
              alt={typedProfile.name}
              loading="lazy"
              className="relative h-40 w-40 rounded-2xl object-cover shadow-lg sm:h-48 sm:w-48"
            />
          </div>
          <div className="flex-1 text-center sm:text-left">
            <p className="text-base leading-relaxed text-gray-700 dark:text-gray-200 sm:text-lg">
              {tData(typedProfile.bio)}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-white/60 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} className="text-primary-500" />
                {tData(typedProfile.location)}
              </span>
              <a
                href={`mailto:${typedProfile.email}`}
                className="flex items-center gap-1.5 transition-colors hover:text-primary-500 dark:hover:text-primary-400"
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
