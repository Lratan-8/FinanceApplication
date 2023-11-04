import { useState } from "react";
import "./App.css";
import Authentication from "./components/authentication/Authentication";
import TopbarHomePage from "./components/homepage/TopbarHomePage";
import darktheme from "./themes/darktheme";
import lightTheme from "./themes/lightTheme";
function App() {


  const [theme, settheme] = useState(darktheme)

  const changeTheme = () =>{
   if(theme === darktheme){
    settheme(lightTheme)
   }else{
    settheme(darktheme)
   }
  }
  

  return (
    <div style={{backgroundColor: theme.themeLightDark}}>
      <TopbarHomePage changeTheme={changeTheme} theme={theme}/>
      <div className="appBodyStyle">
      <Authentication theme={theme}/>
      </div>
    </div>
  );
}

export default App;
