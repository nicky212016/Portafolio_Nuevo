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

        <div className="mx-auto flex max-w-3xl flex-col items-center gap-8 text-center sm:flex-row sm:text-left">
          <img
            src={typedProfile.avatar}
            alt={typedProfile.name}
            loading="lazy"
            className="h-40 w-40 flex-shrink-0 rounded-2xl object-cover shadow-md"
          />
          <div>
            <p className="text-lg leading-relaxed text-gray-600 dark:text-white/70">
              {tData(typedProfile.bio)}
            </p>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-sm text-gray-500 dark:text-white/50 sm:justify-start">
              <span className="flex items-center gap-1.5">
                <MapPin size={14} />
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
