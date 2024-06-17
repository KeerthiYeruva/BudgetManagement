import { createStore } from "zustand";

interface UserProfileState {
  user: User | null;
  setUser: (user: User) => void;
  updateUserProfile: (updatedUser: Partial<User>) => void;
}

export const useUserProfileStore = createStore<UserProfileState>((set) => ({
  user: (() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  })(),
  setUser: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  updateUserProfile: (updatedUser: Partial<User>) => {
    set((state) => {
      if (!state.user) {
        throw new Error("User not set");
      }
      const newUser: User = { ...state.user, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    });
  },
}));
