import React, { useState } from "react";
import { Button } from "antd";
import { BaseButtonProps } from "antd/es/button/button";
import SvgIcon, { SvgIconProps } from "../SvgIcon";

interface EntendButtonProps extends BaseButtonProps {
  iconName?: string;
  iconSize?: number;
  iconClassName?: string;
  colorClass?: string;
  children?: string;
}

function CButton({
  type,
  color,
  variant,
  icon,
  iconName,
  iconSize,
  iconClassName,
  iconPosition = "start",
  className,
  colorClass,
  children,
}: EntendButtonProps) {
  const [currentStatus, setCurrentStatus] = useState("normal");

  let iconElement: React.ReactNode = null;

  // 1️⃣ 如果 `icon` 是有效的 React 組件（Ant Design Icon）
  if (React.isValidElement(icon)) {
    iconElement = icon;
  }
  // 2️⃣ 如果 `iconName` 存在，則渲染 `SvgIcon`
  else if (iconName) {
    const nameParts = iconName.split("-") || [];
    let newIconName = "";
    if (nameParts.length > 0) {
      nameParts[nameParts.length - 1] = currentStatus;
      newIconName = nameParts.join("-");
    }
    const svgProps: SvgIconProps = {
      name: newIconName,
      size: iconSize,
      className: iconClassName,
    };
    iconElement = <SvgIcon {...svgProps} />;
  }

  return (
    <Button
      type={type}
      color={color}
      variant={variant}
      iconPosition={iconPosition}
      className={`${className} ${colorClass} flex items-center ${
        iconPosition === "end" ? "flex-row-reverse" : "flex-row"
      }`}
      onMouseEnter={() => setCurrentStatus("hover")}
      onMouseLeave={() => setCurrentStatus("normal")}
      onMouseDown={() => setCurrentStatus("active")}
      onMouseUp={() => setCurrentStatus("hover")}
    >
      {iconElement && <span className="flex">{iconElement}</span>}
      <span className="flex">{children}</span>
    </Button>
  );
}

export default CButton;
