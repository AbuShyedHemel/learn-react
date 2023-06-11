import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { App as AntApp, ConfigProvider, theme as antTheme } from "antd";
import { RouterProvider } from "react-router-dom";
import { useAuth } from "./providers/AuthProvider";
import { useTheme } from "./providers/ThemeProvider";
import { authenticatedRouter, publicRouter } from "./router";

function App() {
  const { isDark } = useTheme();
  const { isAuthenticated } = useAuth();

  const queryClient = new QueryClient();

  return (
    <ConfigProvider
      theme={{
        algorithm: isDark ? antTheme.darkAlgorithm : antTheme.defaultAlgorithm,
      }}
    >
      <AntApp notification={{ placement: "bottomLeft" }}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider
            router={isAuthenticated ? authenticatedRouter : publicRouter}
          />
        </QueryClientProvider>
      </AntApp>
    </ConfigProvider>
  );
}

export default App;
