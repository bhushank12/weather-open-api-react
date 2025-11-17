import logo from './logo.svg';
import './App.css';
import Weather from './components/Weather.js';
import ThemeContext from './context/ThemeContext.js';
import { createContext, useState } from 'react';


function App() {
  const [theme, setTheme] = useState('light');

  return (
    <ThemeContext.Provider value={{theme, setTheme}}>
      <Weather />
    </ThemeContext.Provider>
  );
}

export default App;
