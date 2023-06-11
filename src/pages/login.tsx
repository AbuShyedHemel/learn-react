import { Button, Col, Form, Input, Row, Space } from "antd";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login, isLoading } = useLogin();

  return (
    <Row className="h-full" align="middle" justify="center">
      <Col>
        <Form
          onFinish={(values) => {
            login({ username: values.username, password: values.password });
          }}
        >
          <Form.Item name="username" rules={[{ required: true }]}>
            <Input placeholder="UserName"></Input>
          </Form.Item>

          <Form.Item name="password" rules={[{ required: true }]}>
            <Input.Password placeholder="Password"></Input.Password>
          </Form.Item>

          <Button
            htmlType="submit"
            type="primary"
            className="w-full"
            loading={isLoading}
          >
            Login
          </Button>
        </Form>
        <Space>
          <h4>Forgot your password?</h4>

          <Link to="">
            <Button type="primary" danger>
              Click Here?
            </Button>
          </Link>
        </Space>
      </Col>
    </Row>
  );
};

export default LoginPage;
