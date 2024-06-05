// src/components/PrivateRoute.tsx
import React from "react";
import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store";
import { useStore } from "zustand";

interface PrivateRouteProps {
  element: React.ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ element }) => {
  const { isAuthenticated } = useStore(useAuthStore);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
