// src/services/authService.ts
import axios from "axios";

const API_URL = "http://example.com/api"; // Replace with your API URL

interface LoginResponse {
  token: string;
  user: User;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error("Login failed:", error);
    throw new Error("Failed to login. Please check your credentials.");
  }
};

export const logout = () => {
  sessionStorage.removeItem("userToken");
  sessionStorage.removeItem("user");
};

export const mockLogin = async (userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
}): Promise<{ token: string; user: User }> => {
  const { email, password, firstName, lastName, phoneNumber } = userData;
  // Simulate an API call
  return new Promise<{ token: string; user: User }>((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: "mockToken123",
          user: {
            id: "mockUserId",
            firstName,
            lastName,
            email,
            phoneNumber,
          },
        });
      } else {
        reject("Invalid email or password");
      }
    }, 1000);
  });
};
