import { useState, memo, useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Languages } from "lucide-react";
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

const Navbar = () => {
  const { t } = useTranslation();
  const [open, setOpen] = useState(false);
  const [currentHash, setCurrentHash] = useState("");
  const toggleMenu = useCallback(() => setOpen((prev) => !prev), []);
  const closeMenu = useCallback(() => setOpen(false), []);

  useEffect(() => {
    const onHashChange = () => setCurrentHash(window.location.hash);
    setCurrentHash(window.location.hash);
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const toggleLang = useCallback(() => {
    const next = i18next.language === "en" ? "es" : "en";
    i18next.changeLanguage(next);
  }, []);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-dark-border/45 bg-dark-bg/32 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a
          href="#inicio"
          className="text-xl font-bold tracking-tight text-primary-400"
        >
          Portfolio.
        </a>

        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={currentHash === link.href ? "page" : undefined}
              className="text-sm font-medium text-white/60 transition-colors hover:text-primary-400"
            >
              {t(link.key)}
            </a>
          ))}
          <div className="ml-2 flex items-center gap-1 border-l border-dark-border pl-4">
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 rounded-lg px-2.5 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-dark-card hover:text-primary-400"
              aria-label="Cambiar idioma"
            >
              <Languages size={14} />
              {i18next.language === "en" ? "ES" : "EN"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleLang}
            className="flex items-center gap-1 rounded-lg px-2 py-1.5 text-xs font-medium text-white/50 transition-colors hover:bg-dark-card hover:text-primary-400"
            aria-label="Cambiar idioma"
          >
            <Languages size={14} />
            {i18next.language === "en" ? "ES" : "EN"}
          </button>
          <button
            onClick={toggleMenu}
            className="rounded-full p-2 text-white/60 transition-colors hover:bg-dark-card hover:text-primary-400"
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
            className="overflow-hidden border-t border-dark-border/80 bg-dark-bg/85 md:hidden"
          >
            <div className="flex flex-col gap-2 px-4 pb-4 pt-2">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  aria-current={currentHash === link.href ? "page" : undefined}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-white/60 transition-colors hover:bg-dark-card hover:text-primary-400"
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
