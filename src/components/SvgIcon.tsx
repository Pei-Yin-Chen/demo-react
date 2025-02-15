import React from "react";

export interface SvgIconProps {
  name: string;
  prefix?: string;
  color?: string;
  size?: string | number;
  className?: string;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  prefix = "icon",
  color = "#89898A",
  size = "16",
  className = "",
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg
      {...props}
      aria-hidden="true"
      width={size}
      height={size}
      fill={color}
      className={className}
    >
      <use href={symbolId} fill={color} />
    </svg>
  );
};

export default SvgIcon;
