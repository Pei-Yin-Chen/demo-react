import { createStyles } from "antd-style";

export const HeaderStyle = createStyles(({ css, token }) => {
  return {
    HeaderWrapper: css`
      height: 56px;
      padding: 0 20px;

      .main-header {
        height: inherit;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .left-content {
          height: inherit;
          display: flex;
          align-items: center;
          column-gap: 8px;

          div {
            display: flex;
            align-items: center;
          }
        }

        .right-content {
          height: inherit;
          display: flex;
          align-items: center;
          column-gap: 8px;

          div {
            display: flex;
            align-items: center;
          }
        }
      }
    `,

    HeaderUserMgntWrapper: css`
      height: 44px;
      display: flex;
      align-items: center;

      .user-management {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        column-gap: 8px;

        .setting-field-main-title {
          color: #323233;
          font-weight: bold;
        }

        .setting-field-subtitle {
          color: #89898a;
          font-size: 12px;
        }
      }

      .language-management {
        .setting-field-main-title {
          color: #323233;
        }

        .setting-field-subtitle {
          color: #89898a;
          font-size: 12px;
        }
      }

      .logout-management {
        .setting-field-main-title {
          color: #323233;
        }

        .setting-field-subtitle {
          color: #89898a;
          font-size: 12px;
        }
      }
    `,

    ContentWrapper: css`
      height: calc(100vh - 56px);
      width: calc(100% - 200px);
    `,
  };
});
