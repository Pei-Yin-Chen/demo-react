import { createStyles } from "antd-style";

export const LoadingStyle = createStyles(({ css }) => {
  return {
    LoadingWrapper: css`
      z-index: 99;
      width: 50px;
      height: unset;

      .ant-spin {
        padding: 0;
        margin: 0;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
      }
    `,
  };
});
