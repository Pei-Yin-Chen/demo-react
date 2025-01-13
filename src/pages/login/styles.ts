import { createStyles } from "antd-style";

export const LoginStyle = createStyles(({ css, token }) => {
  return {
    LoginWrapper: css`
      width: 100%;
      height: 100vh;
      min-height: 600px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background: linear-gradient(to bottom, #a2d5c6, #07689f);

      @media (max-width: 768px) {
        min-height: 860px;
        justify-content: space-around;
      }

      .login-main {
        height: calc(100vh - 48px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          height: calc(100vh - 168px);
          flex-grow: 1;
        }
      }

      .login-box {
        width: 380px;
        padding: 24px;
        border-radius: 12px;
        background-color: #ffffff;
        opacity: 0.8;

        .login-welcome-area {
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #323233;
          text-align: center;
          font-weight: bold;
          font-size: 20px;
        }

        .login-form-box {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          padding-bottom: 8px;

          .login-form-box-title {
            color: #323233;
            font-weight: bold;
            font-size: 16px;
          }

          .login-form-box-messsage {
            color: #ff4d4f;
            font-size: 16px;
          }
        }

        .login-msg-area {
          font-size: 14px;
          line-height: 20px;
          color: #e6757b;
        }
      }

      .login-footer {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 48px;
        width: 100%;
        position: fixed;
        left: 0;
        bottom: 0;

        @media (max-width: 768px) {
          justify-content: center;
          position: static;
          height: auto;
        }

        .login-footer-links {
          display: flex;
          justify-content: flex-start;
          padding-left: 0;
          list-style-type: none;

          @media (max-width: 768px) {
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 24px;
            margin-bottom: 24px;
          }
        }

        li {
          color: #323233;
          font-weight: bold;
          padding: 0 20px;
          border-right: 1px solid #323233;
          cursor: pointer;

          @media (max-width: 768px) {
            padding: 0;
            border-right: none;
          }
        }

        li:first-child {
          @media (max-width: 768px) {
            padding: 0;
          }
        }

        li:last-child {
          border-right: none;
        }
      }
    `,
  };
})
