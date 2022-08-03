import { createContext, useState } from "react";
import Header from "./components/Header";
import ResultList from "./components/ResultList";
import Splash from "./components/SplashScreen";
import { ThemeProvider } from "styled-components";
// Create context
export const InputContext = createContext();

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  tagLineColor: "black"
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  tagLineColor: "lavender"
}

const themes = {
  light: LightTheme,
  dark: DarkTheme,
}
function App() {
  const [theme, setTheme] = useState("light")
  const [inputValue, setInputValue] = useState("");

  const value = {
    inputValue, setInputValue
  }
 
 

  return (
   

    <InputContext.Provider value={value}>
    
      <div className="App">      
        <Header />        
        <ResultList />       
      </div>
      <ThemeProvider theme={themes[theme]}>
    <Splash theme={theme} setTheme={setTheme} />
  </ThemeProvider>
    </InputContext.Provider>
    
  );
}

export default App;
