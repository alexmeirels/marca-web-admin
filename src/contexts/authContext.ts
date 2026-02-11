import { createContext } from "react";

export type AuthContextValue = {
  isAuthenticated: boolean;
  loading: boolean;
  error: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
};

export const AuthContext = createContext<AuthContextValue | undefined>(undefined);
