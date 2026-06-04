import { memo, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
  <div className="relative bg-dark-bg transition-colors duration-200 overflow-x-hidden">
    <div className="pointer-events-none fixed inset-0 starfield-bg opacity-100" />
    <div className="pointer-events-none fixed inset-0 opacity-100">
      <div className="star-layer star-layer-1" />
      <div className="star-layer star-layer-2" />
      <div className="star-layer star-layer-3" />
    </div>
    <div className="fixed inset-0 bg-pattern opacity-25 pointer-events-none" />

    <div className="pointer-events-none fixed top-24 left-10 h-28 w-28 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 opacity-30 blur-2xl particle" />
    <div
      className="pointer-events-none fixed top-1/3 right-20 h-36 w-36 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 opacity-25 blur-2xl particle"
      style={{ animationDelay: "2s" }}
    />
    <div
      className="pointer-events-none fixed bottom-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 opacity-30 blur-2xl particle"
      style={{ animationDelay: "4s" }}
    />
    <div
      className="pointer-events-none fixed top-2/3 right-1/4 h-20 w-20 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 opacity-25 blur-2xl particle"
      style={{ animationDelay: "1.5s" }}
    />
    <div
      className="pointer-events-none fixed bottom-20 left-20 h-24 w-24 rounded-full bg-gradient-to-br from-primary-500 to-amber-600 opacity-25 blur-2xl particle"
      style={{ animationDelay: "3s" }}
    />
    <div
      className="pointer-events-none fixed top-1/4 left-3/4 h-20 w-20 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 opacity-20 blur-2xl particle"
      style={{ animationDelay: "5s" }}
    />

    <div className="relative z-10">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  </div>
);

export default memo(Layout);
