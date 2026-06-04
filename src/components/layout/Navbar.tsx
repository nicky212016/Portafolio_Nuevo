import { useState, memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Moon, Sun, Languages } from "lucide-react";
import i18next from "i18next";

interface NavLink {
  href: string;
  key: string;
}

const links: NavLink[] = [
  { href: "#inicio", key: "nav.home" },
  { href: "#sobre-mi", key: "nav.about" },
  { href: "#proyectos", key: "nav.projects" },
  { href: "#habilidades", key: "nav.skills" },
  { href: "#contacto", key: "nav.contact" },
];

interface NavbarProps {
  dark: boolean;
  toggleTheme: () => void;
}

const Navbar = ({ dark, toggleTheme }: NavbarProps) => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  const toggleLang = useCallback(() => {
    const next = i18next.language === "en" ? "es" : "en";
    i18next.changeLanguage(next);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-white/50 backdrop-blur-xl dark:border-dark-border/50 dark:bg-dark-bg/50">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#inicio"
          className="text-lg font-semibold tracking-tight text-primary-500 dark:text-primary-400"
        >
          Portfolio
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900 dark:text-white/60 dark:hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-gray-200 pl-4 dark:border-dark-border">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 dark:text-white/50 dark:hover:bg-dark-card"
              aria-label="Cambiar idioma"
            >
              <Languages size={14} />
              {i18next.language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-white/60 dark:hover:bg-dark-card"
              aria-label="Cambiar tema"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-gray-100 dark:text-white/50 dark:hover:bg-dark-card"
            aria-label="Cambiar idioma"
          >
            {i18next.language === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-white/60 dark:hover:bg-dark-card"
            aria-label="Cambiar tema"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="rounded-full p-2 text-gray-600 transition-colors hover:bg-gray-100 dark:text-white/60 dark:hover:bg-dark-card"
            aria-label="Menú"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden border-t border-gray-200/80 dark:border-dark-border/80 md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-100 dark:text-white/60 dark:hover:bg-dark-card"
                >
                  {t(link.key)}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default memo(Navbar);
