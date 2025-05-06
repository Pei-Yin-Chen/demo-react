import { createStyles } from "antd-style";

export const LayoutStyle = createStyles(({ css, token }) => {
  return {
    LayoutWrapper: css`
      display: flex;
      flex-direction: column;
      height: 100vh;
    `,

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

          .logo {
            height: 56px;
            padding: 0;
            cursor: pointer;

            .logo-icon {
            }

            .logo-name {
              height: inherit;
              font-size: 28px;
              padding: 0 8px;
            }
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
          color: ${token.colorTextLabel};
          font-weight: 700;
        }

        .setting-field-subtitle {
          color: ${token.colorTextSecondary};
          font-size: 12px;
        }
      }

      .language-management {
        .setting-field-main-title {
          color: ${token.colorTextLabel};
        }

        .setting-field-subtitle {
          color: ${token.colorTextSecondary};
          font-size: 12px;
        }
      }

      .logout-management {
        .setting-field-main-title {
          color: ${token.colorTextLabel};
        }

        .setting-field-subtitle {
          color: ${token.colorTextSecondary};
          font-size: 12px;
        }
      }

      .admin-setting-management {
        .setting-field-main-title {
          color: ${token.colorTextLabel};
        }

        .setting-field-subtitle {
          color: ${token.colorTextSecondary};
          font-size: 12px;
        }
      }
    `,

    ContentWrapper: css`
      flex: 1;
      width: 100%;
      overflow: auto;
    `,
  };
});
