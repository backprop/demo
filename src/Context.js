// Contexts.js
import { createContext, useState } from 'react';

export const ThemeContext = createContext('');
export const AuthContext = createContext('');

export function ThemeContextProvider({ children }) {
    const [theme, setTheme] = useState('light');
  
    return (
      <ThemeContext.Provider value={{ theme, setTheme }}>
        {children}
      </ThemeContext.Provider>
    );
  }

  export function AuthContextProvider({ children }) {
    const [uid, setUid] = useState('');
  
    return (
      <AuthContext.Provider value={{ uid, setUid }}>
        {children}
      </AuthContext.Provider>
    );
  }