import React, { useState } from "react";
import StatsCard from "./components/statscard/StatsCard";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

// Light and Dark Themes
const lightTheme = {
  bg: "#f9f9f9",
  text: "#222",
  card: "#ffffff",
  bgSecondary: "#e0e0e0",
};

const darkTheme = {
  bg: "#121212",
  text: "#fff",
  card: "#1e1e1e",
  bgSecondary: "#333",
};

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  const stats = [
    {
      label: "Easy",
      solved: 120,
      total: 150,
      beat: "80%",
      color: "#4caf50",
    },
    {
      label: "Medium",
      solved: 90,
      total: 120,
      beat: "75%",
      color: "#2196f3",
    },
    {
      label: "Hard",
      solved: 30,
      total: 50,
      beat: "60%",
      color: "#f44336",
    },
  ];

  const totalSolved = stats.reduce((sum, s) => sum + s.solved, 0);
  const totalQuestions = stats.reduce((sum, s) => sum + s.total, 0);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <div
        style={{
          padding: "2rem",
          minHeight: "100vh",
          background: darkMode ? darkTheme.bg : lightTheme.bg,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <button
          onClick={() => setDarkMode(!darkMode)}
          style={{
            marginBottom: "2rem",
            padding: "0.6rem 1.2rem",
            fontSize: "1rem",
            background: darkMode ? "#333" : "#ddd",
            color: darkMode ? "#fff" : "#000",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            transition: "all 0.2s ease",
          }}
        >
          Toggle {darkMode ? "Light" : "Dark"} Mode
        </button>

        <StatsCard solved={totalSolved} total={totalQuestions} stats={stats} />
      </div>
    </ThemeProvider>
  );
};

export default App;