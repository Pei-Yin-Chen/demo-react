import { useContext } from "react";
import { Flex, Divider } from "antd";
import SvgIcon from "../SvgIcon";
import { GlobalSettingContext } from "../../App";
import { languageMap } from "../../locale";
import { FormattedMessage } from "react-intl";
import { LoginViewStyles } from "./styles";

interface Props {
  settings: Record<string, boolean>;
}

function LoginViewPage({ settings }: Props) {
  const { styles: loginViewStyles } = LoginViewStyles();
  const { locale, setLocale } = useContext(GlobalSettingContext);

  return (
    <div className={loginViewStyles.LoginViewWrapper}>
      <div className="login-view-top"></div>
      <div className="login-view-bottom">
        <div className="login-view-main">
          <div className="login-view-box">
            <div className="login-view-welcome-area">Welcome to React</div>
            <div className="login-view-box-title">
              <FormattedMessage id="login.signIn" />
            </div>
            <div className="login-view-input">
              <FormattedMessage id="login.account" />
            </div>
            <div className="login-view-input">
              <FormattedMessage id="login.password" />
            </div>
            <Flex gap="small" vertical>
              <div className="login-view-row">
                <div className="login-view-remember-me">
                  <SvgIcon name="checkbox-normal" size="24" />
                  <FormattedMessage id="login.rememberMe" />
                </div>
                <div className="login-view-forgot-password">
                  <FormattedMessage id="login.forgotPassword" />
                </div>
              </div>
              <div className="login-view-sign-in">
                <FormattedMessage id="login.signIn" />
              </div>
              <Divider plain>
                <FormattedMessage id="login.orSignInWith" />
              </Divider>
              <Flex justify="space-between" gap="small">
                <div className="login-view-button">
                  <SvgIcon name="3rd-party-microsoft" size="24" />
                  <span>Microsoft</span>
                </div>
                <div className="login-view-button">
                  <SvgIcon name="3rd-party-google" size="24" />
                  <span>Google</span>
                </div>
                <div className="login-view-button">
                  <SvgIcon name="3rd-party-linkedin" size="24" />
                  <span>LinkedIn</span>
                </div>
              </Flex>
            </Flex>
          </div>
        </div>
        <div className="login-view-footer">
          <ul className="login-view-footer-links">
            {settings.privacyPolicy && (
              <li className="login-view-footer-item">
                <FormattedMessage id="login.privacyPolicy" />
              </li>
            )}
            {settings.contactUs && (
              <li className="login-view-footer-item">
                <FormattedMessage id="login.contactUs" />
              </li>
            )}
            {settings.help && (
              <li className="login-view-footer-item">
                <FormattedMessage id="login.help" />
              </li>
            )}
            <li className="login-view-footer-item">
              {languageMap[locale]}
              <SvgIcon name="triangle-down-normal" size="24" color="#323233" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default LoginViewPage;
