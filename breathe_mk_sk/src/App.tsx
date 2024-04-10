import { useEffect, useState } from "react";
import "./App.css";
import { Toggle } from "./components/toggle/Toggle";

function App() {
  const [isDark, setIsDark] = useState(() => {
    const storedIsDark = localStorage.getItem("isDark");
    return storedIsDark ? JSON.parse(storedIsDark) : false;
  });

  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Toggle isChecked={isDark} handleChange={() => setIsDark(!isDark)} />
    </div>
  );
}

export default App;
