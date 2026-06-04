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
    <nav className="fixed top-0 z-50 w-full border-b border-dark-border/30 bg-dark-bg/90 backdrop-blur-xl dark:border-dark-border/30 dark:bg-dark-bg/90">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#inicio"
          className="bg-gradient-electric bg-clip-text text-lg font-bold tracking-tight text-transparent"
        >
          NC
        </a>

        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-all hover:bg-white/5 hover:text-white"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-dark-border pl-3">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Cambiar idioma"
            >
              <Languages size={14} />
              {i18next.language === "en" ? "ES" : "EN"}
            </button>
            <button
              onClick={toggleTheme}
              className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
              aria-label="Cambiar tema"
            >
              {dark ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="rounded-lg px-2.5 py-1.5 text-xs font-medium text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Cambiar idioma"
          >
            {i18next.language === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={toggleTheme}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
            aria-label="Cambiar tema"
          >
            {dark ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <button
            onClick={toggleMenu}
            className="rounded-lg p-2 text-gray-500 transition-colors hover:bg-white/5 hover:text-white"
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
            className="overflow-hidden border-t border-dark-border/30 md:hidden"
          >
            <div className="flex flex-col gap-1 px-4 pb-4 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-gray-400 transition-colors hover:bg-white/5 hover:text-white"
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
