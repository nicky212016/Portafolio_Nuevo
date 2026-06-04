import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import skills from "../../data/skills.json";
import type { Skill } from "../../types";

const typedSkills = skills as Skill[];

const categoryColor: Record<string, string> = {
  Motion: "text-primary-500 border-primary-500/30",
  Video: "text-primary-400 border-primary-400/30",
  Design: "text-primary-600 border-primary-600/30",
  "3D": "text-primary-700 border-primary-700/30",
  Programming: "text-primary-500 border-primary-500/30",
};

const defaultColor = "text-gray-500 border-gray-500/30";

const Skills = () => {
  const { t } = useTranslation();

  return (
    <section id="habilidades" className="py-24">
      <div className="mx-auto max-w-6xl px-4">
        <SectionTitle title={t("skills.title")} subtitle={t("skills.subtitle")} />
        <div className="mx-auto flex max-w-3xl flex-wrap justify-center gap-2">
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
    </section>
  );
};

export default Skills;
