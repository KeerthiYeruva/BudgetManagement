import { createStore } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  token: string | null;
  user: User | null;
  login: (token: string, user: User) => void;
  logout: () => void;
}

const getUserFromSessionStorage = (): User | null => {
  const user = sessionStorage.getItem("user");
  if (!user) return null;
  try {
    return JSON.parse(user);
  } catch (error) {
    console.error("Error parsing user from sessionStorage", error);
    sessionStorage.removeItem("user");
    return null;
  }
};

const getTokenFromSessionStorage = (): string | null => {
  return sessionStorage.getItem("userToken");
};

export const useAuthStore = createStore<AuthState>((set) => ({
  isAuthenticated: !!getTokenFromSessionStorage(),
  token: getTokenFromSessionStorage(),
  user: getUserFromSessionStorage(),
  login: (token: string, user: User) => {
    sessionStorage.setItem("userToken", token);
    sessionStorage.setItem("user", JSON.stringify(user));
    set({ isAuthenticated: true, token, user });
  },
  logout: () => {
    sessionStorage.removeItem("userToken");
    sessionStorage.removeItem("user");
    set({ isAuthenticated: false, token: null, user: null });
  },
}));
