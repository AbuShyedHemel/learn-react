import React, { useState } from "react";

interface AuthContext {
  isAuthenticated: boolean;
  authenticate: (token: string) => void;
  removeAuthentication: () => void;
  updateToken: (token: string) => void;
  removeToken: () => void;
  name: string;
}

const AuthContext = React.createContext<AuthContext>({
  isAuthenticated: false,
  authenticate: () => undefined,
  removeAuthentication: () => undefined,
  updateToken: () => undefined,
  removeToken: () => undefined,
  name: "",
});

export const useAuth = () => React.useContext(AuthContext);

type AuthProviderProps = {
  children: React.ReactNode;
};

// Helper Functions
const getToken = () => localStorage.getItem("token");
const setToken = (token: string | undefined) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.removeItem("token");
  }
};

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!getToken());

  const authenticate = (token: string) => {
    setIsAuthenticated(true);
    updateToken(token);
  };

  const removeAuthentication = () => {
    setIsAuthenticated(false);
    removeToken();
  };

  const updateToken = (token: string) => setToken(token);
  const removeToken = () => setToken(undefined);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        authenticate,
        removeAuthentication,
        updateToken,
        removeToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
