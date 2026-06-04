import { memo, ElementType } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Github, Linkedin, Youtube } from "lucide-react";
import SectionTitle from "../ui/SectionTitle";
import profile from "../../data/profile.json";
import social from "../../data/social.json";
import type { Profile, Social } from "../../types";

const typedProfile = profile as unknown as Profile;
const typedSocial = social as Social;

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

interface SocialLink {
  key: string;
  icon: ElementType;
  label: string;
}

const socialLinks: SocialLink[] = [
  { key: "github", icon: Github, label: "GitHub" },
  { key: "linkedin", icon: Linkedin, label: "LinkedIn" },
  { key: "instagram", icon: InstagramIcon, label: "Instagram" },
  { key: "youtube", icon: Youtube, label: "YouTube" },
];

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section id="contacto" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("contact.title")} subtitle={t("contact.subtitle")} />

        <div className="mx-auto max-w-xl">
          <a
            href={`mailto:${typedProfile.email}`}
            className="group flex items-center justify-center gap-3 rounded-2xl border border-dark-border/50 bg-dark-card/40 p-5 text-lg font-medium text-gray-300 shadow-lg backdrop-blur-sm transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]"
          >
            <Mail size={22} className="transition-colors group-hover:text-neon-cyan" />
            {typedProfile.email}
          </a>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            {socialLinks.map(({ key, icon: Icon, label }) =>
              typedSocial[key] ? (
                <a
                  key={key}
                  href={typedSocial[key]}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2 rounded-xl border border-dark-border/50 bg-dark-card/30 px-4 py-2.5 text-sm font-medium text-gray-400 shadow-sm backdrop-blur-sm transition-all hover:border-neon-cyan/40 hover:text-neon-cyan hover:shadow-[0_0_20px_rgba(0,240,255,0.1)]"
                >
                  <Icon size={18} className="transition-transform group-hover:scale-110" />
                  {label}
                </a>
              ) : null,
            )}
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            {t("contact.message")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default memo(Contact);
