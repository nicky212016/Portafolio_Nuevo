import { memo, ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  dark: boolean;
  toggleTheme: () => void;
}

const Layout = ({ children, dark, toggleTheme }: LayoutProps) => (
  <>
    <Navbar dark={dark} toggleTheme={toggleTheme} />
    <main>{children}</main>
    <Footer />
  </>
);

export default memo(Layout);
