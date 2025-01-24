import { createContext, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import { ConfigProvider, theme, ThemeConfig } from "antd";
import enUS from "antd/locale/en_US";
import zhTW from "antd/locale/zh_TW";
import zhCN from "antd/locale/zh_CN";
import { IntlProvider } from "react-intl";
import { locales } from "./locale";

interface GlobalSettingContextType {
  locale: string;
  setLocale: (lang: string) => void;
  themeConfig: ThemeConfig;
  setThemeConfig: (config: ThemeConfig) => void;
}

const GlobalSettingContext = createContext<GlobalSettingContextType>({
  locale: "zh-TW",
  setLocale: () => {},
  themeConfig: { algorithm: theme.defaultAlgorithm },
  setThemeConfig: () => {},
});

function App() {
  const [locale, setLocale] = useState("zh-TW");
  const [themeConfig, setThemeConfig] = useState<ThemeConfig>({
    algorithm: theme.defaultAlgorithm,
  });

  const antdLocale =
    locale === "zh-CN" ? zhCN : locale === "zh-TW" ? zhTW : enUS;

  return (
    <GlobalSettingContext.Provider
      value={{ locale, setLocale, themeConfig, setThemeConfig }}
    >
      <ConfigProvider locale={antdLocale} theme={themeConfig}>
        <IntlProvider
          locale={locale}
          messages={locales[locale]}
          defaultLocale="zh-TW"
        >
          <RouterProvider router={routers} />
        </IntlProvider>
      </ConfigProvider>
    </GlobalSettingContext.Provider>
  );
}

export default App;
export { GlobalSettingContext };
