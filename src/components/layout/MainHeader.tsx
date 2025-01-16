import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Space, Button, Dropdown, Avatar } from "antd";
import { SunOutlined, MoonOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import SvgIcon from "../SvgIcon";
import { CommonStyle } from "../../styles/common";
import { HeaderStyle } from "./styles";
import { LanguageContext } from "../../App";
import { languageMap } from "../../locale";
import { FormattedMessage, useIntl } from "react-intl";

interface Props {
  onToggleSidebar: () => void;
}

function MainHeader({ onToggleSidebar }: Props) {
  const [light, setLight] = useState(true);
  const { styles: headerStyles } = HeaderStyle();
  const { styles: commonStyles } = CommonStyle();
  const { locale, setLocale } = useContext(LanguageContext);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleClickTheme = () => {
    setLight(!light);
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "avatar",
      label: (
        <div className={headerStyles.HeaderUserMgntWrapper}>
          <div className="user-management">
            <Avatar
              size="large"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              A
            </Avatar>
            <div>
              <div>admin</div>
              <div>admin@mail.com.tw</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "language",
      label: (
        <div>
          <div><FormattedMessage id="language" /></div>
          <div>{language}</div>
        </div>
      ),
      children: [
        {
          key: "en-US",
          label: "English",
        },
        {
          key: "zh-CN",
          label: "简体中文",
        },
        {
          key: "zh-TW",
          label: "繁體中文",
        },
      ],
    },
    {
      key: "logout",
      label: (
        <div className={headerStyles.HeaderUserMgntWrapper}>
          <div className="logout-management"><FormattedMessage id="logout" /></div>
        </div>
      ),
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "en-US" || key === "zh-CN" || key === "zh-TW") {
      setLocale(key);
      setLanguage(languageMap[key] || "English");
    } else if (key === "logout") {
      navigate("/login");
    }
  }

  return (
    <div className="main-header">
      <div className="left-content">
        <Space align="center">
          <div>
            <Button
              type="text"
              icon={<SvgIcon name="collapse-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={onToggleSidebar}
            />
          </div>
        </Space>
      </div>
      <div className="right-content">
        <SunOutlined
          style={{ fontSize: "20px" }}
          onClick={() => handleClickTheme()}
        />
        <MoonOutlined
          style={{ fontSize: "20px" }}
          onClick={() => handleClickTheme()}
        />
        <SettingOutlined style={{ fontSize: "20px" }} />
        <div>
          {light && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-light-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
          {!light && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-dark-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
        </div>
        <Dropdown menu={{ items: menuItems, onClick }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar
              size="small"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              A
            </Avatar>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default MainHeader;
import { useNavigate } from "react-router-dom";
import { Space, Button, Dropdown, Avatar } from "antd";
import { SunOutlined, MoonOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import SvgIcon from "../SvgIcon";
import { CommonStyle } from "../../styles/common";
import { HeaderStyle } from "./styles";
import { LanguageContext } from "../../App";
import { languageMap } from "../../locale";
import { FormattedMessage, useIntl } from "react-intl";

interface Props {
  onToggleSidebar: () => void;
}

function MainHeader({ onToggleSidebar }: Props) {
  const [light, setLight] = useState(true);
  const { styles: headerStyles } = HeaderStyle();
  const { styles: commonStyles } = CommonStyle();
  const { locale, setLocale } = useContext(LanguageContext);
  const [language, setLanguage] = useState("English");
  const navigate = useNavigate();

  const handleClickTheme = () => {
    setLight(!light);
  };

  const menuItems: MenuProps["items"] = [
    {
      key: "avatar",
      label: (
        <div className={headerStyles.HeaderUserMgntWrapper}>
          <div className="user-management">
            <Avatar
              size="large"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              A
            </Avatar>
            <div>
              <div>admin</div>
              <div>admin@mail.com.tw</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "language",
      label: (
        <div>
          <div><FormattedMessage id="language" /></div>
          <div>{language}</div>
        </div>
      ),
      children: [
        {
          key: "en-US",
          label: "English",
        },
        {
          key: "zh-CN",
          label: "简体中文",
        },
        {
          key: "zh-TW",
          label: "繁體中文",
        },
      ],
    },
    {
      key: "logout",
      label: (
        <div className={headerStyles.HeaderUserMgntWrapper}>
          <div className="logout-management"><FormattedMessage id="logout" /></div>
        </div>
      ),
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    console.log("key", key);
    if (key === "en-US" || key === "zh-CN" || key === "zh-TW") {
      setLocale(key);
      setLanguage(languageMap[key] || "English");
    } else if (key === "logout") {
      navigate("/login");
    }
  }

  return (
    <div className="main-header">
      <div className="left-content">
        <Space align="center">
          <div>
            <Button
              type="text"
              icon={<SvgIcon name="collapse-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={onToggleSidebar}
            />
          </div>
        </Space>
      </div>
      <div className="right-content">
        <SunOutlined
          style={{ fontSize: "20px" }}
          onClick={() => handleClickTheme()}
        />
        <MoonOutlined
          style={{ fontSize: "20px" }}
          onClick={() => handleClickTheme()}
        />
        <SettingOutlined style={{ fontSize: "20px" }} />
        <div>
          {light && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-light-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
          {!light && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-dark-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
        </div>
        <Dropdown menu={{ items: menuItems, onClick }} trigger={["click"]}>
          <a onClick={(e) => e.preventDefault()}>
            <Avatar
              size="small"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              A
            </Avatar>
          </a>
        </Dropdown>
      </div>
    </div>
  );
}

export default MainHeader;
