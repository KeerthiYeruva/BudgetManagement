// NotificationComponent.tsx
import React from "react";
import { useStore } from "zustand";
import { useNotificationStore } from "../../store";

import "./notification.scss";

const NotificationComponent: React.FC = () => {
  const { notifications, removeNotification } = useStore(useNotificationStore);

  return (
    <div className="notification-container">
      {notifications.map((notification) => (
        <div
          key={notification.id}
          className={`alert alert-${notification.type}`}
          role="alert"
        >
          {notification.message}
          <button
            type="button"
            className="btn-close"
            onClick={() => removeNotification(notification.id)}
          >
            &times;
          </button>
        </div>
      ))}
    </div>
  );
};

export default NotificationComponent;
