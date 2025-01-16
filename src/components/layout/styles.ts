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
      }

      .logout-management {
      }
    `,

    ContentWrapper: css`
      height: calc(100vh - 56px);
      width: calc(100% - 200px);
    `,
  };
});
