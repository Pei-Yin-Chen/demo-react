import { useState } from "react"
import { Form, Flex, Input, Checkbox, Button, Divider } from "antd";
import { useResponsive } from "antd-style";
import { LoginStyle } from "./styles";
import { CommonStyle } from "../../styles/common";
import SvgIcon from "../../components/SvgIcon";

function LoginPage() {
  const [errorMsg, setErrorMsg] = useState(false);
  const { md } = useResponsive();
  const { styles: loginStyles } = LoginStyle();
  const { styles: commonStyles } = CommonStyle();

  const handleSubmit = (values: { account: string; password: string; isRemember: boolean }) => {
    if (values.account === 'admin' && values.password === 'admin') {
      setErrorMsg(false);
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className={loginStyles.LoginWrapper}>
      <div className="login-main">
        <div className="login-box">
          <Form
            name="login"
            initialValues={{ isRemember: true }}
            onFinish={handleSubmit}
            autoComplete="off"
          >
            <div className="login-welcome-area">Welcome to React</div>
            <div className="login-form-box">
              {!errorMsg && <div className="login-form-box-title">Sign in</div>}
              {errorMsg && <div className="login-form-box-messsage">
                Invalid username or password
              </div>}
            </div>
            <Flex vertical>
              <Form.Item
                name="account"
                rules={[{ required: true, message: 'Please input your account!' }]}
              >
                <Input
                  className={commonStyles.InputStyle}
                  size="large"
                  placeholder="Account"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password
                  className={commonStyles.InputStyle}
                  size="large"
                  placeholder="Password"
                />
              </Form.Item>
            </Flex>
            <Flex gap="small" vertical>
              <Flex justify="space-between" align="center">
                <Form.Item
                  name="isRemember"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox>Remenber me</Checkbox>
                </Form.Item>
                <Button
                  className={commonStyles.ButtonLinkStyle}
                  color="primary"
                  variant="link"
                >
                  Forgot password
                </Button>
              </Flex>
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                block
              >
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
          </Form>
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
