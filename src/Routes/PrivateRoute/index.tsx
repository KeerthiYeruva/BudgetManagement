import React from "react";
import { Navigate } from "react-router-dom";
import { useStore } from "zustand";
import { useAuthStore } from "../../store"; // Ensure this is the correct path

const PrivateRoute = ({ element }) => {
  const { isAuthenticated } = useStore(useAuthStore);

  return isAuthenticated ? element : <Navigate to="/login" replace />;
};

export default PrivateRoute;
