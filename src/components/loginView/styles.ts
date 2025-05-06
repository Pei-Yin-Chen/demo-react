import { createStyles } from "antd-style";
import previewImage from "../../assets/icons/chrome.svg";

export const LoginViewStyles = createStyles(({ css }) => {
  return {
    LoginViewWrapper: css`
      .login-view-top {
        width: 1010px;
        height: 56px;
        background-image: url(${previewImage});
      }

      .login-view-bottom {
        width: 1010px;
        height: 574.75px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: linear-gradient(to bottom, #a2d5c6, #07689f);

        .login-view-main {
          width: 1280px;
          height: 720px;
          display: flex;
          justify-content: center;
          align-items: center;
          transform: scale(0.789);

          .login-view-box {
            width: 380px;
            height: 450px;
            padding: 24px;
            border-radius: 12px;
            background-color: #ffffff;
            opacity: 0.8;

            .login-view-welcome-area {
              height: 48px;
              display: flex;
              align-items: center;
              justify-content: center;
              color: #323233;
              text-align: center;
              font-weight: 700;
              font-size: 20px;
            }

            .login-view-box-title {
              color: #323233;
              font-weight: 700;
              font-size: 16px;
              margin: 0 0 8px;
            }

            .login-view-input {
              height: 40px;
              line-height: 26px;
              font-size: 16px;
              color: #d9d9d9;
              margin-bottom: 16px;
              padding: 7px 11px;
              border: 1px solid #d9d9d9;
              border-radius: 4px;
            }

            .login-view-row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 32px;

              .login-view-remember-me {
                display: flex;
                align-items: center;
              }

              .login-view-forgot-password {
                color: #1677ff;
              }
            }

            .login-view-sign-in {
              width: 100%;
              height: 40px;
              line-height: 40px;
              text-align: center;
              padding: 0 15px;
              font-size: 16px;
              color: #ffffff;
              background: #1677ff;
              border-radius: 8px;
            }

            .login-view-button {
              display: flex;
              align-items: center;
              padding: 8px;
              border: 1px solid #d9d9d9;
              border-radius: 4px;

              span {
                padding-left: 8px;
              }
            }
          }
        }

        .login-view-footer {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          height: 48px;
          width: 1280px;
          transform: scale(0.789);

          .login-view-footer-links {
            display: flex;
            justify-content: flex-start;
            padding-left: 0;
            list-style-type: none;
          }

          li {
            display: flex;
            align-items: center;
            color: #323233;
            font-weight: 700;
            padding: 0 20px;
            border-right: 1px solid #323233;
            cursor: pointer;
          }

          li:last-child {
            border-right: none;
          }
        }
      }
    `,
  };
});
