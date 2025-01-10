import { Flex, Input, Checkbox, Button, Divider } from "antd";
import type { CheckboxProps } from "antd";
import { useResponsive } from "antd-style";
import { LoginStyle } from "./styles";
import { CommonStyle } from "../../styles/common";
import SvgIcon from "../../components/SvgIcon";

function LoginPage() {
  const { md } = useResponsive();
  const { styles: loginStyles } = LoginStyle();
  const { styles: commonStyles } = CommonStyle();

  const onChange: CheckboxProps["onChange"] = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };

  return (
    <div className={loginStyles.LoginWrapper}>
      <div className="login-main">
        <div className="login-box">
          <Flex gap="small" vertical>
            <div className="login-welcome-area">Welcome to React</div>
            <Flex justify="flex-start">
              <span className="login-form-title">Sign in</span>
            </Flex>
            <Input size="large" placeholder="Account" />
            <Input size="large" placeholder="Password" />
            <Flex justify="space-between" align="center">
              <Checkbox onChange={onChange}>Remenber me</Checkbox>
              <Button
                className={commonStyles.ButtonLinkStyle}
                color="primary"
                variant="link"
              >
                Forget password
              </Button>
            </Flex>
            <div className="login-msg-area">
              fejei wgeijwogijwe wegioeiieowg igeiogio wegiwghiwghwei ewgihoeig
              hieg ige hwgo
            </div>
            <Button type="primary" size="large" block>
              Sign in
            </Button>
            <Divider plain>or sign in with</Divider>
            <Flex
              justify="space-between"
              vertical={md ? false : true}
              gap="small"
            >
              <Button
                className={commonStyles.ButtonOutlineStyle}
                size="large"
                icon={<SvgIcon name="3rd-party-microsoft" size="24" />}
                block={md ? false : true}
              >
                Microsoft
              </Button>
              <Button
                className={commonStyles.ButtonOutlineStyle}
                size="large"
                icon={<SvgIcon name="3rd-party-google" size="24" />}
                block={md ? false : true}
              >
                Google
              </Button>
              <Button
                className={commonStyles.ButtonOutlineStyle}
                size="large"
                icon={<SvgIcon name="3rd-party-linkedin" size="24" />}
                block={md ? false : true}
              >
                LinkedIn
              </Button>
            </Flex>
          </Flex>
        </div>
      </div>
      <div className="login-footer">
        <ul className="login-footer-links">
          <li className="login-footer-item">Privacy Policy</li>
          <li className="login-footer-item">Content</li>
          <li className="login-footer-item">Help</li>
          <li className="login-footer-item">Activate License</li>
        </ul>
      </div>
    </div>
  );
}

export default LoginPage;
