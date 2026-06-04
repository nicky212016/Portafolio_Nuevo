import { memo, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  dark: boolean;
  toggleTheme: () => void;
}

const Layout = ({ children, dark, toggleTheme }: LayoutProps) => (
  <div className="relative bg-gray-50 dark:bg-dark-bg transition-colors duration-200">
    <div className="fixed inset-0 bg-pattern opacity-40 dark:opacity-60 pointer-events-none" />

    <div className="fixed top-24 left-10 w-16 h-16 bg-primary-500/20 rounded-full blur-3xl particle" />
    <div
      className="fixed top-1/3 right-16 w-24 h-24 bg-primary-400/15 rounded-full blur-3xl particle"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="fixed bottom-1/4 left-1/3 w-20 h-20 bg-primary-300/15 rounded-full blur-3xl particle"
      style={{ animationDelay: "4s" }}
    />
    <div
      className="fixed top-2/3 right-1/4 w-14 h-14 bg-primary-600/15 rounded-full blur-3xl particle"
      style={{ animationDelay: "1.5s" }}
    />

    <div className="relative z-10">
      <Navbar dark={dark} toggleTheme={toggleTheme} />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default memo(Layout);
