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
          color: #494949;
          font-size: 20px;
          font-weight: 700;
          line-height: 42px;
        }
      }

      .body-box {
        height: calc(100% - 42px);
        background-color: #fafafa;
        padding: 0 20px;
        margin: 3px 6px 6px;

        .body-box-title {
          color: #494949;
          font-size: 18px;
          font-weight: 700;
          line-height: 42px;
        }

        .body-box-setting {
          color: #323233;
          padding: 20px 0;

          .body-box-setting-option {
            min-width: 240px;

            .body-box-setting-option-title {
              color: #787878;
              font-weight: 700;
            }

            .body-box-setting-option-action {
              display: flex;
              align-items: center;
              font-size: 16px;
              height: 24px;
              line-height: 24px;
              border-bottom: 1px solid #e6e6e6;
            }
          }
        }

        .body-box-preview {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          min-width: 1060px;
          height: 678px;
          background-color: #e6e6e6;
        }
      }
    `,
  };
});
