import { useState } from "react";
import { Row, Col, Switch, Space } from "antd";
import LoginViewPage from "../../components/loginView";
import { LoginSettingStyle } from "./styles";
import { CommonStyle } from "../../styles/common";
import { FormattedMessage, useIntl } from "react-intl";

function LoginSettingPage() {
  const { styles: loginSettingStyles } = LoginSettingStyle();
  const { styles: commonStyles } = CommonStyle();
  const intl = useIntl();
  const switchConfig = [
    {
      key: "privacyPolicy",
      label: intl.formatMessage({ id: "login.privacyPolicy" }),
    },
    { key: "contactUs", label: intl.formatMessage({ id: "login.contactUs" }) },
    { key: "help", label: intl.formatMessage({ id: "login.help" }) },
  ];

  const [settings, setSettings] = useState(
    switchConfig.reduce((acc, curr) => {
      acc[curr.key] = true;
      return acc;
    }, {} as Record<string, boolean>)
  );

  const handleToggle = (key: string, checked: boolean) => {
    setSettings((prev) => ({
      ...prev,
      [key]: checked,
    }));
  };

  return (
    <div className={loginSettingStyles.LoginSettingWrapper}>
      <div className="header-box">
        <div className="header-box-title">
          <FormattedMessage id="loginSetting.loginPage" />
        </div>
      </div>
      <div className="body-box">
        <div className="body-box-title">
          <FormattedMessage id="loginSetting.pageSetting" />
        </div>
        <div className="body-box-setting">
          <Row gutter={16}>
            {switchConfig.map(({ key, label }) => (
              <Col key={key} className="body-box-setting-option" span={6}>
                <div className="body-box-setting-option-title">{label}</div>
                <div className="body-box-setting-option-action">
                  <Space size="small" align="center">
                    <Switch
                      size="small"
                      checked={settings[key]}
                      onChange={(checked) => handleToggle(key, checked)}
                      className={commonStyles.SwitchStyle}
                    />
                    {settings[key] && <FormattedMessage id="loginSetting.show" />}
                    {!settings[key] && <FormattedMessage id="loginSetting.hide" />}
                  </Space>
                </div>
              </Col>
            ))}
          </Row>
        </div>
        <div className="body-box-title">
          <FormattedMessage id="loginSetting.loginPageView" />
        </div>
        <div className="body-box-preview">
          <LoginViewPage settings={settings} />
        </div>
      </div>
    </div>
  );
}

export default LoginSettingPage;
