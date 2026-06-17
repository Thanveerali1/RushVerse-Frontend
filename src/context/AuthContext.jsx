import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");

      if (!savedUser) {
        return null;
      }

      return JSON.parse(savedUser);
    } catch (error) {
      console.error(error);
      return null;
    }
  });

  const login = (data) => {
    localStorage.setItem(
      "token",
      data.access_token
    );

    localStorage.setItem(
      "user",
      JSON.stringify(data)
    );

    setUser(data);
  };

  const updateBalance = (newBalance) => {
    setUser((prev) => {
      if (!prev) return prev;

      const updatedUser = {
        ...prev,
        balance: newBalance,
      };

      localStorage.setItem(
        "user",
        JSON.stringify(updatedUser)
      );

      return updatedUser;
    });
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        updateBalance,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}