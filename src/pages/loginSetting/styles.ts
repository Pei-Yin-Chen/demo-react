import { createStyles } from "antd-style";

export const LoginSettingStyle = createStyles(({ css, token }) => {
  return {
    LoginSettingWrapper: css`
      display: flex;
      flex-direction: column;
      height: 100%;
      overflow: auto;

      .header-box {
        height: 42px;
        background-color: #fafafa;
        padding: 0 20px;
        margin: 6px 6px 3px;

        .header-box-title {
          line-height: 42px;
        }
      }

      .body-box {
        height: calc(100% - 42px);
        background-color: #fafafa;
        padding: 0 20px;
        margin: 3px 6px 6px;

        .body-box-title {
          line-height: 42px;
        }

        .body-box-preview {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          height: 678px;
          background-color: #e6e6e6;
        }
      }
    `,
  };
});
