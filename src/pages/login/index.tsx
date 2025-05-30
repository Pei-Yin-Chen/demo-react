import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Form,
  Flex,
  Input,
  Checkbox,
  Button,
  Divider,
  Dropdown,
  Space,
} from "antd";
import type { MenuProps } from "antd";
import { useResponsive } from "antd-style";
import { LoginStyle } from "./styles";
import { CommonStyle } from "../../styles/common";
import SvgIcon from "../../components/SvgIcon";
import { GlobalSettingContext } from "../../App";
import { languageMap } from "../../locale";
import { FormattedMessage, useIntl } from "react-intl";

function LoginPage() {
  const [errorMsg, setErrorMsg] = useState(false);
  const { md } = useResponsive();
  const { styles: loginStyles } = LoginStyle();
  const { styles: commonStyles } = CommonStyle();
  const { locale, setLocale } = useContext(GlobalSettingContext);
  const intl = useIntl();
  const navigate = useNavigate();

  const handleSubmit = (values: {
    account: string;
    password: string;
    isRemember: boolean;
  }) => {
    if (values.account === "admin" && values.password === "admin") {
      setErrorMsg(false);
      navigate("/");
    } else {
      setErrorMsg(true);
    }
  };

  const menuItems: MenuProps["items"] = Object.entries(languageMap).map(
    ([key, label]) => ({
      key,
      label,
    })
  );

  const onClick: MenuProps["onClick"] = ({ key }) => {
    setLocale(key);
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
              {!errorMsg && (
                <div className="login-form-box-title">
                  <FormattedMessage id="login.signIn" />
                </div>
              )}
              {errorMsg && (
                <div className="login-form-box-messsage">
                  Invalid username or password
                </div>
              )}
            </div>
            <Flex vertical>
              <Form.Item
                name="account"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: "login.pleaseInputAccount" }),
                  },
                ]}
              >
                <Input
                  className={commonStyles.InputStyle}
                  size="large"
                  placeholder={intl.formatMessage({ id: "login.account" })}
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: intl.formatMessage({ id: "login.pleaseInputPassword" }),
                  },
                ]}
              >
                <Input.Password
                  className={commonStyles.InputStyle}
                  size="large"
                  placeholder={intl.formatMessage({ id: "login.password" })}
                />
              </Form.Item>
            </Flex>
            <Flex gap="small" vertical>
              <Flex justify="space-between" align="center">
                <Form.Item name="isRemember" valuePropName="checked" noStyle>
                  <Checkbox>
                    <FormattedMessage id="login.rememberMe" />
                  </Checkbox>
                </Form.Item>
                <Button
                  className={commonStyles.ButtonLinkStyle}
                  color="primary"
                  variant="link"
                >
                  {intl.formatMessage({ id: "login.forgotPassword" })}
                </Button>
              </Flex>
              <Button type="primary" size="large" htmlType="submit" block>
                <FormattedMessage id="login.signIn" />
              </Button>
              <Divider plain>
                <FormattedMessage id="login.orSignInWith" />
              </Divider>
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
          <li className="login-footer-item">
            <FormattedMessage id="login.privacyPolicy" />
          </li>
          <li className="login-footer-item">
            <FormattedMessage id="login.contactUs" />
          </li>
          <li className="login-footer-item">
            <FormattedMessage id="login.help" />
          </li>
          <li className="login-footer-item">
            <Dropdown
              menu={{ items: menuItems, onClick }}
              className={commonStyles.DropdownBasicStyle}
            >
              <a onClick={(e) => e.preventDefault()}>
                <Space>
                  {languageMap[locale]}
                  <SvgIcon
                    name="triangle-down-normal"
                    size="24"
                    color="#323233"
                  />
                </Space>
              </a>
            </Dropdown>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LoginPage;
