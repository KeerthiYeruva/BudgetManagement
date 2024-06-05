import { createStore } from "zustand";
import { v4 as uuidv4 } from "uuid";

interface Notification {
  id: string;
  message: string;
  type: "success" | "error";
}

interface NotificationStore {
  notifications: Notification[];
  addNotification: (message: string, type: "success" | "error") => void;
  removeNotification: (id: string) => void;
}

export const useNotificationStore = createStore<NotificationStore>((set) => ({
  notifications: [],
  addNotification: (message, type) => {
    const id = uuidv4();
    set((state) => ({
      notifications: [...state.notifications, { id, message, type }],
    }));
    setTimeout(() => {
      set((state) => ({
        notifications: state.notifications.filter((n) => n.id !== id),
      }));
    }, 5000);
  },
  removeNotification: (id) =>
    set((state) => ({
      notifications: state.notifications.filter((n) => n.id !== id),
    })),
}));
