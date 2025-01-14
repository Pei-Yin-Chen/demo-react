import { createContext, useState } from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import routers from "./routes";
import { ConfigProvider } from "antd";
import enUS from "antd/locale/en_US";
import zhTW from "antd/locale/zh_TW";
import zhCN from "antd/locale/zh_CN";
import { IntlProvider } from "react-intl";
import { locales } from "./locale";

const LanguageContext = createContext({
  locale: "en-US",
  setLocale: (lang: string) => {},
});

function App() {
  const [locale, setLocale] = useState("en-US");

  const antdLocale =
    locale === "zh-CN" ? zhCN : locale === "zh-TW" ? zhTW : enUS;

  return (
    <LanguageContext.Provider value={{ locale, setLocale }}>
      <ConfigProvider locale={antdLocale}>
        <IntlProvider
          locale={locale}
          messages={locales[locale]}
          defaultLocale="en-US"
        >
          <RouterProvider router={routers} />
        </IntlProvider>
      </ConfigProvider>
    </LanguageContext.Provider>
  );
}

export default App;
export { LanguageContext };
