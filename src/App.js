import { createContext, useState } from 'react';
import './App.css';
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";

export const ThemeContext = createContext('dark');

export default function App() {
  const [theme, setTheme] = useState('dark');

  return (
    <ThemeContext.Provider value={theme}>
      <Header setTheme={setTheme}/>
      <Main/>
    </ThemeContext.Provider>
  );
}
