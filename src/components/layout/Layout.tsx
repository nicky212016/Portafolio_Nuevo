import { memo, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="relative bg-dark-bg transition-colors duration-200">
    <div className="pointer-events-none fixed inset-0 starfield-bg opacity-100" />
    <div className="pointer-events-none fixed inset-0 opacity-100">
      <div className="star-layer star-layer-1" />
      <div className="star-layer star-layer-2" />
      <div className="star-layer star-layer-3" />
    </div>
    <div className="fixed inset-0 bg-pattern opacity-25 pointer-events-none" />

    <div className="pointer-events-none fixed top-24 left-10 h-16 w-16 rounded-full bg-primary-500/15 blur-3xl particle" />
    <div
      className="pointer-events-none fixed top-1/3 right-16 h-24 w-24 rounded-full bg-primary-400/10 blur-3xl particle"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="pointer-events-none fixed bottom-1/4 left-1/3 h-20 w-20 rounded-full bg-primary-300/10 blur-3xl particle"
      style={{ animationDelay: "4s" }}
    />
    <div
      className="pointer-events-none fixed top-2/3 right-1/4 h-14 w-14 rounded-full bg-primary-600/10 blur-3xl particle"
      style={{ animationDelay: "1.5s" }}
    />

    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default memo(Layout);
