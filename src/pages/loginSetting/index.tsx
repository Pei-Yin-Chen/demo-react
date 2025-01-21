import { LoginSettingStyle } from "./styles";
import { FormattedMessage } from "react-intl";

function LoginSettingPage() {
  const { styles: loginSettingStyles } = LoginSettingStyle();

  return (
    <div className={loginSettingStyles.LoginSettingWrapper}>
      <div className="header-box">
        <div className="header-box-title">
          <FormattedMessage id="loginPage" />
        </div>
      </div>
      <div className="body-box">
        <div className="body-box-title">
          <FormattedMessage id="pageSetting" />
        </div>
        <div className="body-box-title">
          <FormattedMessage id="loginPageView" />
        </div>
        <div className="body-box-preview">
          123
        </div>
      </div>
    </div>
  );
}

export default LoginSettingPage;
