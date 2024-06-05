import { createStore } from "zustand";

interface UserProfileState {
  user: User | null;
  setUser: (user: User) => void;
  updateUserProfile: (updatedUser: Partial<User>) => void;
}

export const useUserProfileStore = createStore<UserProfileState>((set) => ({
  user: localStorage.getItem("user")
    ? JSON.parse(localStorage.getItem("user")!)
    : null,
  setUser: (user: User) => {
    localStorage.setItem("user", JSON.stringify(user));
    set({ user });
  },
  updateUserProfile: (updatedUser: Partial<User>) => {
    set((state) => {
      const newUser = { ...state.user, ...updatedUser };
      localStorage.setItem("user", JSON.stringify(newUser));
      return { user: newUser };
    });
  },
}));
