import React, { createContext, useContext, useState } from "react";

// Buat konteks baru
const ThemeContext = createContext();

// Fungsi penyedia yang menyediakan state dan fungsi untuk tema
export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Fungsi untuk mengubah tema antara gelap dan terang
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Hook kustom untuk menggunakan tema dan fungsi untuk mengubahnya
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
