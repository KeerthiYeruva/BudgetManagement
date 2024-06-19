import { createStore } from "zustand";

interface UserProfileState {
  user: User | null;
  setUser: (user: User) => void;
  updateUserProfile: (updatedUser: Partial<User>) => void;
}

const getUserFromSessionStorage = (): User | null => {
  const storedUser = sessionStorage.getItem("user");
  return storedUser ? JSON.parse(storedUser) : null;
};

const setUserToSessionStorage = (user: User): void => {
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const useUserProfileStore = createStore<UserProfileState>((set) => ({
  user: getUserFromSessionStorage(),
  setUser: (user: User) => {
    setUserToSessionStorage(user);
    set({ user });
  },
  updateUserProfile: (updatedUser: Partial<User>) => {
    set((state) => {
      if (!state.user) {
        throw new Error("User not set");
      }
      const newUser: User = { ...state.user, ...updatedUser };
      setUserToSessionStorage(newUser);
      return { user: newUser };
    });
  },
}));
