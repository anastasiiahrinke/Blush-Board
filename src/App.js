import Header from "./components/headerSection/Header";
import SideBar from "./components/sideBar/SideBar";
import MainSide from "./components/mainContent/MainSide";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light-theme";
  });

  const [days, setDays] = useState(() => {
    const saved = localStorage.getItem("days");
    return saved
      ? JSON.parse(saved)
      : [
          { day: "Monday", plans: [] },
          { day: "Tuesday", plans: [] },
          { day: "Wednesday", plans: [] },
          { day: "Thursday", plans: [] },
          { day: "Friday", plans: [] },
          { day: "Saturday", plans: [] },
          { day: "Sunday", plans: [] },
        ];
  });

  const chooseTheme = (newTheme) => {
    setTheme(newTheme);
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    localStorage.setItem("days", JSON.stringify(days));
  }, [theme, days]);
  return (
    <div className={`main ${theme}`}>
      <Header />
      <div className="theme-buttons">
        <button onClick={() => chooseTheme("dark-theme")}>🍂</button>
        <button onClick={() => chooseTheme("light-theme")}>🌸</button>
        <button onClick={() => chooseTheme("green-theme")}>🍀</button>
        <button onClick={() => chooseTheme("blue-theme")}>🌑</button>
      </div>
      <SideBar days={days} setDays={setDays} />
      <MainSide days={days} setDays={setDays} />
    </div>
  );
}

export default App;
