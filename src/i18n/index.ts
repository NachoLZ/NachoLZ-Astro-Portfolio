import es from "./es.json";
import en from "./en.json";

export const LANGUAGES = {
  es,
  en,
};

export const getI18N = ({
  currentLocale = "en",
}: {
  currentLocale: string | undefined;
}) => {
  if (currentLocale === "es") return es;
  if (currentLocale === "en") return en;
  return en;
};