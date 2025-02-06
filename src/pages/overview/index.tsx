import React, { useState } from "react";
import { Radio, Flex, Button, Divider } from "antd";
import { AreaChartOutlined, PieChartOutlined, BarChartOutlined, IeOutlined, ChromeOutlined } from "@ant-design/icons";
import SvgIcon from "../../components/SvgIcon";
import { OverviewStyles } from "./styles";
import { CommonStyle } from "../../styles/common";

function OverviewPage() {
  const { styles: overviewStyles } = OverviewStyles();
  const { styles: commonStyles } = CommonStyle();
  const [dataLayout, setDataLayout] = useState<"content" | "card">("content");

  const dataset = [
    {
      type: "Chart",
      items: [
        { name: "Area Chart", icon: AreaChartOutlined, color: "#33c4ff", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae iusto eaque, maiores eius quo magnam consequatur, vel reprehenderit quas odio adipisci esse quae dolor, quos modi quaerat culpa illum." },
        { name: "Pie Chart", icon: PieChartOutlined, color: "#33c4ff", description: "Lorem ipsum" },
        { name: "Bar Chart", icon: BarChartOutlined, color: "#33c4ff", description: "Lorem ipsum dolor sit" },
      ],
    },
    {
      type: "Browser",
      items: [
        { name: "IE", icon: IeOutlined, color: "#28a745", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae iusto eaque, maiores eius quo magnam consequatur, vel reprehenderit quas odio adipisci esse quae dolor, quos modi quaerat culpa illum." },
        { name: "Chrome", icon: ChromeOutlined, color: "#28a745", description: "Lorem ipsum dolor sit" },
      ],
    },
  ]

  const [contentIcon, setContentIcon] = useState("content-normal");
  const [cardIcon, setCardIcon] = useState("card-normal");

  return (
    <div className={overviewStyles.OverviewWrapper}>
      <div className="overview-header">
        <div className="overview-header-title">Welcome, Admin</div>
        <div className="overview-header-content">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
          <div>
            <Radio.Group
              value={dataLayout}
              onChange={(e) => setDataLayout(e.target.value)}
              className={commonStyles.RadioGroupStyle}
            >
              <Radio.Button
                value="content"
                onMouseEnter={() => setContentIcon("content-hover")}
                onMouseLeave={() => setContentIcon("content-normal")}
              >
                <SvgIcon name={dataLayout === "content" ? "content-active" : contentIcon} size="24" />
              </Radio.Button>
              <Radio.Button
                value="card"
                onMouseEnter={() => setCardIcon("card-hover")}
                onMouseLeave={() => setCardIcon("card-normal")}
              >
                <SvgIcon name={dataLayout === "card" ? "card-active" : cardIcon} size="24" />
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="overview-body">
        <div className="overview-body-dataset">
          {dataset.map((category, categoryIndex) => (
            <div key={categoryIndex} className="dataset-list-group">
              <div className="dataset-list-title">{category.type}</div>
              <div className="dataset-list">
                <div className="dataset-list-outer">
                  {category.items.map((item, itemIndex) => (
                  <div className="dataset-list-box">
                    <Flex key={itemIndex} gap="small">
                      <span className="dataset-list-app-icon" style={{ fontSize: 48, color: item.color }}>
                        {React.createElement(item.icon)}
                      </span>
                      <div className="dataset-list-app">
                        <div className="dataset-list-app-title">{item.name}</div>
                        <div className="dataset-list-app-content">{item.description}</div>
                      </div>
                    </Flex>
                  </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="overview-body-aside">
          <div>
            <div className="aside-area">Document</div>
            <div className="document-link">
              <Button
                className={commonStyles.ButtonLinkStyle}
                color="primary"
                variant="link"
              >
                Quick start
              </Button>
            </div>
            <div className="document-link">
              <Button
                className={commonStyles.ButtonLinkStyle}
                color="primary"
                variant="link"
              >
                Contact us
              </Button>
            </div>
            <Divider />
            <div>
              <div className="aside-area">Notification</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
