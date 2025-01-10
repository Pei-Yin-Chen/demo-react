import { createStyles } from "antd-style";

export const LoginStyle = createStyles(({ css, token }) => {
  return {
    LoginWrapper: css`
      width: 100%;
      height: 100vh;
      min-height: 500px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      background: linear-gradient(to bottom, #a2d5c6, #07689f);

      @media (max-width: 768px) {
        min-height: 860px;
        justify-content: space-between;
      }

      .login-main {
        height: calc(100vh - 48px);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        @media (max-width: 768px) {
          height: calc(100vh - 168px);
        }
      }

      .login-box {
        width: 380px;
        padding: 24px;
        border-radius: 24px;

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

        .login-form-title {
          color: #323233;
          font-weight: bold;
          line-height: 24px;
        }

        .login-msg-area {
          font-size: 14px;
          line-height: 20px;
          color: #e6757b;
        }
      }

      .login-footer {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 48px;
        position: fixed;
        left: 24px;
        bottom: 0;

        @media (max-width: 768px) {
          position: static;
          height: auto;
        }

        .login-footer-links {
          display: flex;
          justify-content: center;
          padding-left: 0;
          list-style-type: none;

          @media (max-width: 768px) {
            flex-direction: column;
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
          padding-left: 0;

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
