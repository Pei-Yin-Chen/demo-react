import en_US from "./en-US";
import zh_CN from "./zh-CN";
import zh_TW from "./zh-TW";

interface Translations {
  [key: string]: {
    [key: string]: string;
  };
}

export const locales: Translations = {
  "en-US": { ...en_US },
  "zh-CN": { ...zh_CN },
  "zh-TW": { ...zh_TW },
};

export const languageMap: Record<string, string> = {
  "en-US": "English",
  "zh-CN": "简体中文",
  "zh-TW": "繁體中文",
};
