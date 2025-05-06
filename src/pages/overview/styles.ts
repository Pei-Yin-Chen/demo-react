import { createStyles } from "antd-style";

export const OverviewStyles = createStyles(({ css }) => {
  return {
    OverviewWrapper: css`
      width: 1240px;
      height: 100%;
      padding: 48px;
      margin: 0 auto;

      .overview-header {
        .overview-header-title {
          height: 48px;
          font-size: 36px;
          font-weight: 700;
          line-height: 48px;
        }

        .overview-header-content {
          display: flex;
          justify-content: space-between;
          font-size: 20px;
          color: #89898a;

          div:first-child {
            flex: 1;
          }
        }
      }

      .overview-body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        padding: 48px 0;

        .overview-body-dataset {
          width: 100%;
          min-width: 600px;
          padding-right: 48px;

          .dataset-list-group {
            padding-top: 12px;
            border-bottom: 1px solid #c8c8c8;

            .dataset-list-title {
              height: 24px;
              line-height: 24px;
              margin: 8px 0;
              font-weight: 700;
              font-size: 16px;
            }

            .dataset-list {
              padding: 12px 0 24px;

              .dataset-list-outer {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                grid-template-rows: auto auto;
                grid-gap: 12px 24px;

                .dataset-list-app-icon {
                  width: 64px;
                  height: 64px;
                  background-color: #ffffff;
                  border: 1px solid #c8c8c8;
                  border-radius: 4px;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                }

                .dataset-list-app {
                  margin-left: 8px;
                  padding: 12px;
                  cursor: pointer;
                  border-radius: 4px;
                  width: 276px;

                  &:hover {
                    background-color: #f2f7fd;
                  }
                  &:active {
                    background-color: #e6f0fb;
                  }

                  .dataset-list-app-title {
                    height: 24px;
                    line-height: 24px;
                    font-size: 16px;
                    font-weight: 700;
                    color: #323233;
                  }


                }
              }
            }
          }

          .dataset-list-group:first-child {
            padding-top: 0;
          }

          .dataset-list-group:last-child {
            border-bottom: none;
          }
        }

        .dataset-card {
          padding-top: 12px;

          .dataset-card-outer {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 24px 24px;

            .dataset-card-box {
              border: 1px solid #c8c8c8;
              border-radius: 4px;
              background-color: #f7f8f5;

              &:hover {
                border-color: #89898a;
              }
              &:active {
                border-color: #008cd6;
              }
            }

            .dataset-card-box-row {
              height: 200px;
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
              text-align: center;
              cursor: pointer;

              .dataset-card-app-icon {
                width: 96px;
                height: 96px;
              }

              .dataset-card-app {
                .dataset-card-app-title {
                  height: 24px;
                  line-height: 24px;
                  font-size: 16px;
                  font-weight: 700;
                  color: #323233;
                }
              }
            }
          }
        }

        .overview-body-aside {
          width: 360px;
          height: 665px;
          padding: 16px;
          border: 1px solid #c8c8c8;
          border-radius: 4px;
          background-color: #ffffff;
          box-sizing: content-box;

          .aside-area {
            font-size: 16px;
            font-weight: 700;
            line-height: 24px;
            padding: 8px;
          }

          .document-link {
            margin: 8px;
            font-size: 16px;
            display: flex;
          }

          .notification-list {
            padding: 8px;
            cursor: pointer;

            &:hover {
              background-color: #f2f7fd;
            }

            &:active {
              background-color: #e6f0fb;
            }

            .notification-list-issue {
              div:nth-child(2) {
                height: 16px;
              }

              div:nth-child(3) {
                color: #89898a;
              }

              div:nth-child(4) {
                color: #c8c8c8;
              }
            }

            .notification-list-content {
              padding-left: 32px;
              margin-top: 4px;

              .notification-list-title {
                font-size: 16px;
                line-height: 24px;
                color: #323233;
              }
            }
          }
        }
      }
    `,
  };
});
