import React, { useState } from "react";
import { useNavigate, useLocation, Outlet } from "react-router-dom";
import { Layout, Menu } from "antd";
import { LayoutStyle } from "./styles";
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  PieChartOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import MainHeader from "./MainHeader";

type MenuItem = Required<MenuProps>["items"][number];

const items: MenuItem[] = [
  { key: "loginSetting", icon: <PieChartOutlined />, label: "Option 1" },
  { key: "2", icon: <DesktopOutlined />, label: "Option 2" },
  { key: "3", icon: <ContainerOutlined />, label: "Option 3" },
  {
    key: "sub1",
    label: "Navigation One",
    icon: <MailOutlined />,
    children: [
      { key: "5", label: "Option 5" },
      { key: "6", label: "Option 6" },
      { key: "7", label: "Option 7" },
      { key: "8", label: "Option 8" },
    ],
  },
  {
    key: "sub2",
    label: "Navigation Two",
    icon: <AppstoreOutlined />,
    children: [
      { key: "9", label: "Option 9" },
      { key: "10", label: "Option 10" },
      {
        key: "sub3",
        label: "Submenu",
        children: [
          { key: "11", label: "Option 11" },
          { key: "12", label: "Option 12" },
        ],
      },
    ],
  },
];

function RootContainer() {
  const { Header, Content, Footer, Sider } = Layout;
  const { styles: layoutStyles } = LayoutStyle();
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleSidebar = () => {
    setCollapsed((prev) => !prev);
  };

  const hideSidePath = ["/overview"];
  const showSidebar = !hideSidePath.includes(location.pathname);

  return (
    <>
      <Layout className={layoutStyles.LayoutWrapper}>
        <Header className={layoutStyles.HeaderWrapper}>
          <MainHeader onToggleSidebar={toggleSidebar}></MainHeader>
        </Header>
        {showSidebar && (
          <Layout>
            <Sider width={200} trigger={null} collapsible collapsed={collapsed}>
              <Menu
                theme="light"
                mode="inline"
                style={{ height: "100%" }}
                items={items}
                defaultSelectedKeys={["loginSetting"]}
                onClick={({ key }) => navigate(key)}
              ></Menu>
            </Sider>
            <Content className={layoutStyles.ContentWrapper}>
              <Outlet />
            </Content>
          </Layout>
        )}
        {!showSidebar && (
          <Content className={layoutStyles.ContentWrapper}>
            <Outlet />
          </Content>
        )}
      </Layout>
    </>
  );
}

export default RootContainer;
