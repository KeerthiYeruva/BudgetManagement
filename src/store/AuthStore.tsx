import { createStore } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

export const useAuthStore = createStore<AuthState>((set) => ({
  isAuthenticated: !!localStorage.getItem("userToken"),
  token: localStorage.getItem("userToken"),
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  login: (token: string, user: any) => {
    localStorage.setItem("userToken", token);
    localStorage.setItem("user", JSON.stringify(user));
    set({ isAuthenticated: true, token, user });
  },
  logout: () => {
    localStorage.removeItem("userToken");
    localStorage.removeItem("user");
    set({ isAuthenticated: false, token: null, user: null });
  },
}));
