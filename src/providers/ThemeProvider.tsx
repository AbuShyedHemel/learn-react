import React, { useState } from "react";

interface ThemeContext {
  isDark: boolean;
  toggleDark: () => void;
}

const ThemeContext = React.createContext<ThemeContext>({
  isDark: false,
  toggleDark: () => undefined,
});

export const useTheme = () => React.useContext(ThemeContext);

type ThemeProviderProps = {
  children: React.ReactNode;
};

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [isDark, setIsDark] = useState(false);
  const toggleDark = () => setIsDark(!isDark);

  return (
    <ThemeContext.Provider value={{ isDark, toggleDark }}>
      {children}
    </ThemeContext.Provider>
  );
};
