import { memo, ElementType } from "react";
import { Github, Linkedin, Youtube, Mail } from "lucide-react";
import social from "../../data/social.json";
import profile from "../../data/profile.json";
import type { Social, Profile } from "../../types";

const typedSocial = social as Social;
const typedProfile = profile as Profile;

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const icons: Record<string, ElementType> = {
  github: Github,
  linkedin: Linkedin,
  youtube: Youtube,
  instagram: InstagramIcon,
};

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 dark:border-dark-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-4 py-8">
        <div className="flex items-center gap-4">
          {Object.entries(typedSocial).map(([key, url]) => {
            const Icon = icons[key];
            if (!Icon || !url) return null;
            return (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full p-2 text-gray-500 transition-colors hover:text-primary-500 dark:text-white/40 dark:hover:text-primary-400"
                aria-label={key}
              >
                <Icon size={20} />
              </a>
            );
          })}
          <a
            href={`mailto:${typedProfile.email}`}
            className="rounded-full p-2 text-gray-500 transition-colors hover:text-primary-500 dark:text-white/40 dark:hover:text-primary-400"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        <p className="text-sm text-gray-400 dark:text-white/40">
          &copy; {year} {typedProfile.name}. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default memo(Footer);
