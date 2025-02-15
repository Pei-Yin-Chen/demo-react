import React, { useState, useMemo } from "react";
import {
  Radio,
  Flex,
  Divider,
  Tabs,
  Col,
  Row,
} from "antd";
import type { TabsProps } from "antd";
import {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  IeOutlined,
  ChromeOutlined,
} from "@ant-design/icons";
import SvgIcon from "../../components/SvgIcon";
import { OverviewStyles } from "./styles";
import { CommonStyle } from "../../styles/common";
import CTooltip from "../../components/antd/CTooltip";
import CButton from "../../components/antd/CButton";

function OverviewPage() {
  const { styles: overviewStyles } = OverviewStyles();
  const { styles: commonStyles } = CommonStyle();
  const [dataLayout, setDataLayout] = useState<"content" | "card">("content");

  const dataset = [
    {
      type: "Chart",
      items: [
        {
          name: "Area Chart",
          icon: AreaChartOutlined,
          color: "#33c4ff",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae iusto eaque, maiores eius quo magnam consequatur, vel reprehenderit quas odio adipisci esse quae dolor, quos modi quaerat culpa illum.",
        },
        {
          name: "Pie Chart",
          icon: PieChartOutlined,
          color: "#33c4ff",
          description: "Lorem ipsum",
        },
        {
          name: "Bar Chart",
          icon: BarChartOutlined,
          color: "#33c4ff",
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
    {
      type: "Browser",
      items: [
        {
          name: "IE",
          icon: IeOutlined,
          color: "#28a745",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. A beatae iusto eaque, maiores eius quo magnam consequatur, vel reprehenderit quas odio adipisci esse quae dolor, quos modi quaerat culpa illum.",
        },
        {
          name: "Chrome",
          icon: ChromeOutlined,
          color: "#28a745",
          description: "Lorem ipsum dolor sit",
        },
      ],
    },
  ];

  const [contentIcon, setContentIcon] = useState("content-normal");
  const [cardIcon, setCardIcon] = useState("card-normal");

  const [activeTab, setActiveTab] = useState("Chart");
  const tabCategory: TabsProps["items"] = [
    {
      key: "Chart",
      label: "Chart",
    },
    {
      key: "Browser",
      label: "Browser",
    },
  ];

  const toggleTabCategory = (key: string) => {
    setActiveTab(key);
  };

  const filteredDataset = useMemo(
    () => dataset.find((el) => el.type === activeTab)?.items || [],
    [activeTab]
  );

  const notificationList = [
    {
      user: "Ann",
      type: "Event category",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, quo sit ea autem, itaque quam accusamus alias repudiandae libero nihil voluptates. Expedita esse quibusdam voluptate atque nobis deserunt obcaecati tempore.",
      updateTime: "2024/01/01 08:00",
    },
    {
      user: "Mike",
      type: "Event category",
      description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      updateTime: "2024/02/01 09:00",
    },
    {
      user: "Mike",
      type: "Event category",
      description: "Lorem ipsum dolor sit amet.",
      updateTime: "2024/02/01 10:00",
    },
    {
      user: "Kitty",
      type: "Event category",
      description: "Lorem ipsum dolor sit amet.",
      updateTime: "2024/02/01 10:10",
    },
  ];

  return (
    <div className={overviewStyles.OverviewWrapper}>
      <div className="overview-header">
        <div className="overview-header-title">Welcome, Admin</div>
        <div className="overview-header-content">
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit
            amet consectetur adipisicing elit.
          </div>
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
                <SvgIcon
                  name={
                    dataLayout === "content" ? "content-active" : contentIcon
                  }
                  size="24"
                />
              </Radio.Button>
              <Radio.Button
                value="card"
                onMouseEnter={() => setCardIcon("card-hover")}
                onMouseLeave={() => setCardIcon("card-normal")}
              >
                <SvgIcon
                  name={dataLayout === "card" ? "card-active" : cardIcon}
                  size="24"
                />
              </Radio.Button>
            </Radio.Group>
          </div>
        </div>
      </div>
      <div className="overview-body">
        <div className="overview-body-dataset">
          {dataLayout === "content" ? (
            dataset.map((category, categoryIndex) => (
              <div key={categoryIndex} className="dataset-list-group">
                <div className="dataset-list-title">{category.type}</div>
                <div className="dataset-list">
                  <div className="dataset-list-outer">
                    {category.items.map((item, itemIndex) => (
                      <div className="dataset-list-box">
                        <Flex key={itemIndex} gap="small">
                          <span
                            className="dataset-list-app-icon"
                            style={{ fontSize: 48, color: item.color }}
                          >
                            {React.createElement(item.icon)}
                          </span>
                          <div className="dataset-list-app">
                            <div className="dataset-list-app-title">
                              {item.name}
                            </div>
                            <CTooltip
                              text={item.description}
                              placement="bottom"
                              maxWidth={250}
                              height="16px"
                              lineHeight="16px"
                              fontSize="12px"
                              color="#89898A"
                            />
                          </div>
                        </Flex>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <>
              <div className="dataset-card-title">
                <Tabs
                  defaultActiveKey="1"
                  items={tabCategory}
                  className={commonStyles.TabStyle}
                  onChange={toggleTabCategory}
                />
              </div>
              <div className="dataset-card">
                <div className="dataset-card-outer">
                  {filteredDataset.map((item, itemIndex) => (
                    <div key={itemIndex} className="dataset-card-box">
                      <div className="dataset-card-box-row">
                        <span
                          className="dataset-card-app-icon"
                          style={{ fontSize: 60, color: item.color }}
                        >
                          {React.createElement(item.icon)}
                        </span>
                        <div className="dataset-card-app">
                          <div className="dataset-card-app-title">
                            {item.name}
                          </div>
                          <CTooltip
                            text={item.description}
                            placement="bottom"
                            maxWidth={320}
                            height="16px"
                            lineHeight="16px"
                            fontSize="12px"
                            color="#89898A"
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
        <div className="overview-body-aside">
          <div>
            <div className="aside-area">Document</div>
            <div className="document-link">
              <CButton
                className={commonStyles.ButtonLinkStyle}
                color="primary"
                variant="link"
                iconPosition="end"
                iconName="caret-left-normal"
                iconSize={24}
                iconClassName="icon-rotate"
                colorClass="btn-blue-color"
              >
                Quick start
              </CButton>
            </div>
            <div className="document-link">
              <CButton
                className={commonStyles.ButtonLinkStyle}
                color="primary"
                variant="link"
                iconPosition="end"
                iconName="caret-left-normal"
                iconSize={24}
                iconClassName="icon-rotate"
                colorClass="btn-blue-color"
              >
                Contact us
              </CButton>
            </div>
            <Divider />
            <div>
              <div className="aside-area">Notification</div>
              {notificationList.map((item) => (
                <div className="notification-list">
                  <Row
                    align="middle"
                    gutter={4}
                    className="notification-list-issue"
                  >
                    <Col>
                      <div
                        style={{
                          height: "8px",
                          width: "8px",
                          backgroundColor: "#F55D3E",
                          borderRadius: "50%",
                        }}
                      ></div>
                    </Col>
                    <Col>
                      <SvgIcon name="app-16-normal" size={16} />
                    </Col>
                    <Col flex="auto">
                      <span>{item.user}</span>
                    </Col>
                    <Col>
                      <span>{item.updateTime}</span>
                    </Col>
                  </Row>
                  <div className="notification-list-content">
                    <div className="notification-list-title">{item.type}</div>
                    <CTooltip
                      text={item.description}
                      placement="bottom"
                      maxWidth={278}
                      height="16px"
                      lineHeight="16px"
                      fontSize="12px"
                      color="#89898A"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OverviewPage;
