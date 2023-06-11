import { Result, Space } from "antd";

const NotFound = () => {
  return (
    <Space align="center" className="h-full w-full justify-center">
      <Result status="404" title="Not Found" className="" />
    </Space>
  );
};

export default NotFound;
