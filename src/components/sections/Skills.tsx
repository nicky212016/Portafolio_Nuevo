import { useTranslation } from "react-i18next";
import SectionTitle from "../ui/SectionTitle";
import skills from "../../data/skills.json";
import type { Skill } from "../../types";

const typedSkills = skills as Skill[];

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
              className="rounded-full border border-primary-200 bg-primary-50/50 px-4 py-1.5 text-sm font-medium text-primary-700 dark:border-primary-800 dark:bg-primary-950/30 dark:text-primary-300"
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
