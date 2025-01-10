import React from "react";

interface SvgIconProps {
  name: string;
  prefix?: string;
  color?: string;
  size?: string | number;
}

const SvgIcon: React.FC<SvgIconProps> = ({
  name,
  prefix = "icon",
  color = "#333",
  size = "16",
  ...props
}) => {
  const symbolId = `#${prefix}-${name}`;

  return (
    <svg {...props} aria-hidden="true" width={size} height={size}>
      <use href={symbolId} fill={color} />
    </svg>
  );
};

export default SvgIcon;
