// src/services/authService.ts
import axios from "axios";

const API_URL = "http://example.com/api"; // Replace with your API URL

interface LoginResponse {
  token: string;
}

export const login = async (
  email: string,
  password: string
): Promise<LoginResponse> => {
  const response = await axios.post<LoginResponse>(`${API_URL}/login`, {
    email,
    password,
  });
  return response.data;
};

export const logout = () => {
  localStorage.removeItem("userToken");
};

export const mockLogin = async (userData: any) => {
  const { email, password, firstName, lastName, phoneNumber } = userData;
  // Simulate an API call
  return new Promise<{ token: string; user: User }>((resolve, reject) => {
    setTimeout(() => {
      if (email && password) {
        resolve({
          token: "mockToken123",
          user: {
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
