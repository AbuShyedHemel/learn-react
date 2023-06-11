import { DashboardOutlined, ShoppingOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  return (
    <Menu
      selectedKeys={[pathname.split("/")[1]]}
      theme="dark"
      items={[
        {
          key: "dashboard",
          title: "Dashboard",
          icon: <DashboardOutlined />,
          label: "Dashboard",
          onClick: () => navigate("/dashboard"),
        },
        {
          key: "products",
          title: "Products",
          icon: <ShoppingOutlined />,
          label: "Products",
          onClick: () => navigate("/products"),
        },
      ]}
    />
  );
};

export default Sidebar;
