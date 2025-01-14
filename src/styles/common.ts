import { createStyles } from "antd-style";

export const CommonStyle = createStyles(({ css, token }) => {
  return {
    ButtonLinkStyle: css`
      padding-left: 0;
      padding-right: 0;
      font-weight: bold;
      background: none !important;
      border-color: none !important;
    `,
    ButtonOutlineStyle: css`
      padding: 8px;
      border-radius: 4px;
    `,

    InputStyle: css`
      border-radius: 4px;
    `,

    DropdownBasicStyle: css`
      color: #323233;
      font-weight: bold;
      .ant-space-gap-col-small {
        column-gap: 0;
        .ant-space-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `,
  };
});
