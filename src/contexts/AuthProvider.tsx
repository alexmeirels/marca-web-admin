import { useCallback, useMemo, useState } from "react";
import { login as loginRequest } from "../api/authService";
import useCallbackApi from "../hooks/useCallbackApi";
import { AuthContext, type AuthContextValue } from "./authContext";

type LoginResponse = {
  status: number;
  message: string;
  data: Array<{
    token: string;
    refreshToken: string;
    login: boolean;
  }>;
};

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState(
    Boolean(localStorage.getItem("token")),
  );

  const [loginLoading, login, loginError] = useCallbackApi(
    async (email: string, password: string) => {
      const response = (await loginRequest(email, password)) as LoginResponse;
      const payload = response?.data?.[0];

      if (!payload?.token || !payload?.refreshToken) {
        throw new Error("Token ou refreshToken não encontrado na resposta.");
      }

      localStorage.setItem("token", payload.token);
      localStorage.setItem("refreshToken", payload.refreshToken);
      setIsAuthenticated(true);
    },
    [],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");
    setIsAuthenticated(false);
  }, []);

  const value: AuthContextValue = useMemo(
    () => ({
      isAuthenticated,
      loading: loginLoading,
      error: loginError,
      login,
      logout,
    }),
    [isAuthenticated, loginLoading, loginError, login, logout],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
