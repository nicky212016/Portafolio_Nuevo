import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import skills from "../../data/skills.json";
import type { Skill } from "../../types";
import SectionScene from "../three/SectionScene";
import type { Shape } from "../three/SectionScene";
import { useInView } from "../../hooks/useInView";

const typedSkills = skills as Skill[];

const categoryColor: Record<string, string> = {
  Motion: "text-primary-500 border-primary-500/30",
  Video: "text-primary-500 border-primary-500/30",
  Design: "text-primary-500 border-primary-500/30",
  "3D": "text-primary-700 border-primary-700/30",
  Programming: "text-primary-500 border-primary-500/30",
  Audio: "text-primary-400 border-primary-400/30",
};

const defaultColor = "text-gray-500 border-gray-500/30";

const shapes: Shape[] = [
  { pos: [-2.8, 2.2, 0.5], scale: 0.65, color: "#ea7c00", type: "distort", geometry: "tetrahedron", speed: 1.4 },
  { pos: [3.0, 1.8, -1], scale: 0.6, color: "#f58f33", type: "wobble", geometry: "box", speed: 0.6 },
  { pos: [-2.2, -2.2, -1.5], scale: 0.6, color: "#fac799", type: "distort", geometry: "cylinder", speed: 1.8 },
  { pos: [3.2, -2.0, 0], scale: 0.55, color: "#c76a00", type: "wobble", geometry: "cone", speed: 1.1 },
  { pos: [-0.3, 0.3, -4.5], scale: 0.7, color: "#ea7c00", type: "distort", geometry: "torus", speed: 0.7 },
];

const Skills = () => {
  const { t } = useTranslation();
  const [sectionRef, inView] = useInView<HTMLElement>({ threshold: 0.05 });

  return (
    <section ref={sectionRef} id="habilidades" className="relative overflow-hidden py-24">
      <SectionScene shapes={shapes} inView={inView} />
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("skills.title")} subtitle={t("skills.subtitle")} />
        <div className="section-panel mx-auto max-w-4xl rounded-3xl p-6 sm:p-8">
          <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2.5">
            {typedSkills.map((skill) => (
              <span
                key={skill.name}
                className={`glass-card rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm transition-all duration-300 hover:scale-105 ${
                  categoryColor[skill.category] || defaultColor
                }`}
              >
                {skill.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
