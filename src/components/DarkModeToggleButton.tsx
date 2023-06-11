import { Button } from "antd";
import { useTheme } from "../providers/ThemeProvider";
import { FormatPainterFilled, FormatPainterOutlined } from "@ant-design/icons";

const DarkModeToggleButton = () => {
  const { isDark, toggleDark } = useTheme();
  return (
    <Button
      onClick={toggleDark}
      icon={isDark ? <FormatPainterFilled /> : <FormatPainterOutlined />}
    />
  );
};

export default DarkModeToggleButton;
