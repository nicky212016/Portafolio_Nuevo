import { lazy, Suspense, memo } from "react";
import Layout from "./components/layout/Layout";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";

const Contact = lazy(() => import("./components/sections/Contact"));

const App = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Suspense fallback={null}>
        <Contact />
      </Suspense>
    </Layout>
  );
}

export default memo(App);
