import { Layout, theme } from "antd";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";

const AuthenticatedLayout = () => {
  const { token } = theme.useToken();

  return (
    <Layout className="h-screen w-screen" hasSider>
      <Layout.Sider collapsible collapsedWidth={48}>
        <Sidebar />
      </Layout.Sider>

      <Layout.Content>
        <Layout className="h-full w-full">
          <Layout.Header
            className="bg-inherit h-min leading-none p-2"
            style={{
              borderBottom: "1px solid",
              borderColor: token.colorBorder,
            }}
          >
            <Header />
          </Layout.Header>

          <Layout.Content className="p-4 overflow-auto">
            <Outlet />
          </Layout.Content>
        </Layout>
      </Layout.Content>
    </Layout>
  );
};

export default AuthenticatedLayout;
