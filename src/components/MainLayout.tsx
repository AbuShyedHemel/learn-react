import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <Layout className="h-screen w-screen">
      <Layout.Content>
        <Outlet />
      </Layout.Content>
    </Layout>
  );
};

export default MainLayout;
