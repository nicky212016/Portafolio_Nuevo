import i18next from "i18next";

export type Translatable = string | Record<string, string>;

export const tData = (value: Translatable): string => {
  if (typeof value === "string") return value;
  return value[i18next.resolvedLanguage] || value.en || "";
};
