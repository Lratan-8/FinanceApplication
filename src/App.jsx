import { useState } from "react";
import "./App.css";
import Authentication from "./components/authentication/Authentication";
import TopbarHomePage from "./components/homepage/TopbarHomePage";
import darktheme from "./themes/darktheme";
function App() {


  const [theme, settheme] = useState(darktheme)

  return (
    <>
      <TopbarHomePage settheme={settheme} theme={theme}/>
      <div className="appBodyStyle">
      <Authentication theme={theme}/>
      </div>
    </>
  );
}

export default App;
