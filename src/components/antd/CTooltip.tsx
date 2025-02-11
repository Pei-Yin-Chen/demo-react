import { useState, useEffect, useRef } from "react";
import { Tooltip } from "antd";
import { TooltipPlacement } from "antd/es/tooltip";

interface CTooltipProps {
  text: string;
  placement?: TooltipPlacement;
  maxWidth?: string | number;
  height?: string;
  lineHeight?: string;
  fontSize?: string;
  color?: string;
}

function CTooltip({
  text,
  placement = "bottom",
  maxWidth = 300,
  height = "16px",
  lineHeight = "16px",
  fontSize = "12px",
  color = "#89898A",
}: CTooltipProps) {
  const textRef = useRef<HTMLDivElement>(null);
  const [isOverflow, setIsOverflow] = useState(false);

  useEffect(() => {
    if (textRef.current) {
      setIsOverflow(textRef.current.scrollWidth > textRef.current.clientWidth);
    }
  }, [text]);

  const content = (
    <div
      ref={textRef}
      style={{
        maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
        height,
        lineHeight,
        fontSize,
        color,
        whiteSpace: "nowrap",
        overflow: "hidden",
        textOverflow: "ellipsis",
        display: "inline-block",
        verticalAlign: "middle",
      }}
    >
      {text}
    </div>
  );

  return isOverflow ? (
    <Tooltip title={text} placement={placement}>
      {content}
    </Tooltip>
  ) : (
    content
  );
}

export default CTooltip;
