import { LogoutOutlined } from "@ant-design/icons";
import { App, Button, Col, Row } from "antd";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";
import DarkModeToggleButton from "./DarkModeToggleButton";

const Header = () => {
  const navigate = useNavigate();
  const { removeAuthentication } = useAuth();

  const { modal } = App.useApp();

  const handleLogout = () => {
    modal.confirm({
      centered: true,
      title: "Logout",
      content: "Are you sure you want to log out?",
      onOk: () => {
        navigate("/");
        removeAuthentication();
      },
    });
  };

  return (
    <Row align="middle" gutter={[8, 8]}>
      <Col flex={1}></Col>
      <Col>
        <DarkModeToggleButton />
      </Col>
      <Col>
        <Button icon={<LogoutOutlined />} onClick={handleLogout} />
      </Col>
    </Row>
  );
};

export default Header;
