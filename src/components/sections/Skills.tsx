import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import skills from "../../data/skills.json";
import type { Skill } from "../../types";

const typedSkills = skills as Skill[];

const categoryColor: Record<string, string> = {
  Motion: "border-neon-cyan/30 bg-neon-cyan/5 text-neon-cyan hover:shadow-[0_0_15px_rgba(0,240,255,0.3)]",
  Video: "border-neon-magenta/30 bg-neon-magenta/5 text-neon-magenta hover:shadow-[0_0_15px_rgba(255,0,229,0.3)]",
  Design: "border-neon-pink/30 bg-neon-pink/5 text-neon-pink hover:shadow-[0_0_15px_rgba(255,45,120,0.3)]",
  "3D": "border-neon-purple/30 bg-neon-purple/5 text-neon-purple hover:shadow-[0_0_15px_rgba(139,92,246,0.3)]",
  Programming: "border-primary-500/30 bg-primary-500/5 text-primary-400 hover:shadow-[0_0_15px_rgba(234,124,0,0.3)]",
};

const defaultColor = "border-gray-600/30 bg-gray-500/5 text-gray-400";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="relative py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("skills.title")} subtitle={t("skills.subtitle")} />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-3">
          {typedSkills.map((skill) => (
            <span
              key={skill.name}
              className={`rounded-full border px-4 py-1.5 text-sm font-medium transition-all duration-300 hover:scale-105 ${
                categoryColor[skill.category] || defaultColor
              }`}
            >
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
