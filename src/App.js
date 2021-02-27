import React, { useState } from "react";
import "./globals.css";
import Header from "./components/header";
import TopCardList from "./components/top-card-list";
import Overview from "./components/overview";
import Switch from "./components/switch";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const mainClass = darkMode ? "is-dark-mode" : "is-light-mode";

  return (
    <main className={mainClass}>
      <Header>
        <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
      </Header>
      <TopCardList />
      <Overview />
    </main>
  );
};
export default App;
