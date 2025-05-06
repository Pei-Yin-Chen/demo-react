import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Space, Button, Dropdown, Avatar, theme } from "antd";
import { SunOutlined, MoonOutlined, SettingOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import type { ThemeConfig } from "antd/lib";
import { darkTheme, lightTheme } from "../../styles/theme";
import SvgIcon from "../SvgIcon";
import { CommonStyle } from "../../styles/common";
import { LayoutStyle } from "./styles";
import { GlobalSettingContext } from "../../App";
import { languageMap } from "../../locale";
import { FormattedMessage, useIntl } from "react-intl";

interface Props {
  onToggleSidebar: () => void;
}

function MainHeader({ onToggleSidebar }: Props) {
  type ThemeMode = "light" | "dark";
  const [themeMode, setThemeMode] = useState<ThemeMode>("light");
  const { styles: layoutStyles } = LayoutStyle();
  const { styles: commonStyles } = CommonStyle();
  const { locale, setLocale, themeConfig, setThemeConfig } =
    useContext(GlobalSettingContext);
  const navigate = useNavigate();

  const handleClickTheme = () => {
    const nextMode = themeMode === "light" ? "dark" : "light";
    setThemeMode(nextMode);
    setThemeConfig(nextMode === "light" ? lightTheme : darkTheme);
  };

  const avatarMenuItems: MenuProps["items"] = [
    {
      key: "avatar",
      label: (
        <div className={layoutStyles.HeaderUserMgntWrapper}>
          <div className="user-management">
            <Avatar
              size="large"
              style={{ backgroundColor: "#fde3cf", color: "#f56a00" }}
            >
              A
            </Avatar>
            <div>
              <div className="setting-field-main-title">admin</div>
              <div className="setting-field-subtitle">admin@mail.com.tw</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      key: "language",
      label: (
        <div className={layoutStyles.HeaderUserMgntWrapper}>
          <div className="language-management">
            <div className="setting-field-main-title">
              <FormattedMessage id="header.language" />
            </div>
            <div className="setting-field-subtitle">{languageMap[locale]}</div>
          </div>
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
        <div className={layoutStyles.HeaderUserMgntWrapper}>
          <div className="logout-management">
            <div className="setting-field-main-title">
              <FormattedMessage id="header.logout" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const adminSettingMenuItems: MenuProps["items"] = [
    {
      key: "adminSetting",
      label: (
        <div className={layoutStyles.HeaderUserMgntWrapper}>
          <div className="admin-setting-management">
            <div className="setting-field-main-title">
              <FormattedMessage id="header.adminSetting" />
            </div>
          </div>
        </div>
      ),
    },
  ];

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "en-US" || key === "zh-CN" || key === "zh-TW") {
      setLocale(key);
    } else if (key === "logout") {
      navigate("/login");
    } else if (key === "adminSetting") {
      navigate("/loginSetting");
    }
  };

  const handleClickLogo = () => {
    navigate("/overview");
  };

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
          <div className="logo" onClick={() => handleClickLogo()}>
            <div className="logo-icon">
              <SvgIcon name="react" size="24" />
            </div>
            <div className="logo-name">React</div>
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
        <Dropdown
          menu={{ items: adminSettingMenuItems, onClick }}
          trigger={["click"]}
          placement="bottom"
        >
          <Button
            type="text"
            icon={<SettingOutlined style={{ fontSize: "20px", color: "#89898a" }} />}
            className={commonStyles.ButtonTextStyle}
            onClick={(e) => e.preventDefault()}
          />
        </Dropdown>
        <div>
          {themeMode === "light" && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-light-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
          {!(themeMode === "light") && (
            <Button
              type="text"
              icon={<SvgIcon name="theme-dark-normal" size="24" />}
              className={commonStyles.ButtonTextStyle}
              onClick={() => handleClickTheme()}
            />
          )}
        </div>
        <Dropdown
          menu={{ items: avatarMenuItems, onClick }}
          trigger={["click"]}
        >
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
