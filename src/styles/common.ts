import { createStyles } from "antd-style";

export const CommonStyle = createStyles(({ css }) => {
  return {
    ButtonLinkStyle: css`
      padding-left: 0;
      padding-right: 0;
      font-weight: 700;
      border: none;

      .ant-btn-variant-link {
        box-shadow: none;
      }

      .ant-btn-color-primary {
        box-shadow: none;
      }

      :hover {
        border: none;
      }

      :focus {
        outline: none;
      }

      /* 藍色字體 */
      &.btn-blue-color {
        color: #008cd6 !important;
      }

      &.btn-blue-color:hover {
        color: #006aa5 !important;
      }

      &.btn-blue-color:active {
        color: #008cd6 !important;
      }

      /* icon 180度旋轉 */
      .icon-rotate {
        transform: rotate(180deg);
      }
    `,

    ButtonOutlineStyle: css`
      padding: 8px;
      border-radius: 4px;
    `,

    ButtonTextStyle: css`
      :hover {
        border: none;
      }

      :focus {
        outline: none;
      }

      .ant-btn-icon {
        width: 24px;
        height: 24px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0;
        line-height: 24px;
      }

      .ant-btn-text:hover {
        border: none;
      }
    `,

    RadioGroupStyle: css`
      .ant-radio-button-wrapper {
        padding: 0 4px;

        :first-child {
          border-start-start-radius: 4px;
          border-end-start-radius: 4px;
        }

        :last-child {
          border-start-end-radius: 4px;
          border-end-end-radius: 4px;
        }

        span {
          display: flex;
          align-items: center;
          height: 100%;
        }
      }
    `,

    InputStyle: css`
      border-radius: 4px;
    `,

    DropdownBasicStyle: css`
      color: #323233;
      font-weight: 700;

      .ant-space-gap-col-small {
        column-gap: 0;

        .ant-space-item {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      }
    `,

    /* switch 樣式：size分為預設及small */
    SwitchStyle: css`
      background-color: #ffffff;
      border: 2px solid #787878;

      .ant-switch-handle {
        width: 14px;
        height: 14px;
        top: 2px;
        inset-inline-start: 3px;

        &::before {
          background-color: #787878;
        }
      }

      &:hover {
        border-color: #787878;
      }

      &:hover:not(.ant-switch-disabled) {
        background-color: #ffffff;
      }

      &:focus {
        outline: none;
      }

      // 標準大小的高度與行高
      height: 22px;
      line-height: 22px;

      &.ant-switch-small {
        height: 16px;
        line-height: 16px;

        .ant-switch-handle {
          width: 8px;
          height: 8px;
          top: 2px;
          inset-inline-start: 2px;

          &::before {
            background-color: #787878;
          }
        }
      }

      &.ant-switch-checked {
        background-color: #ffffff;
        border: 2px solid #008cd6;

        .ant-switch-handle {
          width: 14px;
          height: 14px;
          top: 2px;
          inset-inline-start: calc(100% - 17px);

          &::before {
            background-color: #008cd6;
          }
        }

        &:hover {
          border-color: #008cd6;
        }

        &:hover:not(.ant-switch-disabled) {
          background-color: #ffffff;
        }

        &:focus {
          outline: none;
        }

        // 標準大小的高度與行高
        height: 22px;
        line-height: 22px;

        &.ant-switch-small {
          height: 16px;
          line-height: 16px;

          .ant-switch-handle {
            width: 8px;
            height: 8px;
            top: 2px;
            inset-inline-start: calc(100% - 10px);

            &::before {
              background-color: #008cd6;
            }
          }
        }
      }
    `,

    TabStyle: css`
      .ant-tabs-tab {
        font-size: 18px;
      }

      .ant-tabs-nav-list {
        .ant-tabs-ink-bar {
          height: 3px;
        }
      }
    `,
  };
});
