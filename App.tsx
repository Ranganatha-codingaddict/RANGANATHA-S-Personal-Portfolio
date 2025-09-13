import React, { createContext, useState, useEffect, useContext } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Internship from './components/Internship';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};


const App: React.FC = () => {
  const [theme, setTheme] = useState<Theme>('light');

  useEffect(() => {
    const isDarkMode = localStorage.getItem('theme') === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches);
    
    setTheme(isDarkMode ? 'dark' : 'light');
  }, []);

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="bg-light text-dark dark:bg-dark dark:text-light font-sans antialiased">
        <Header />
        <main className="overflow-x-hidden">
          <Hero />
          <About />
          <Skills />
          <Education />
          <Internship />
          <Projects />
          <Certifications />
          <Resume />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
};

export default App;