import { createStyles } from "antd-style";

export const OverviewStyles = createStyles(({ css, token }) => {
  return {
    OverviewWrapper: css`
      width: 1240px;
      padding: 48px;
      margin: 0 auto;

      .overview-header-title {
        height: 48px;
        font-size: 36px;
        font-weight: 700;
        line-height: 48px;
      }

      .overview-header-content {
      }
    `,
  };
});
