import './App.css';
import React from 'react';
import Home from './Sections/Home';
import About from './Sections/About';
import Projects from './Sections/Projects';
import Topbar from './Components/Topbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';


function App() {
  const [currentTheme, setCurrentTheme] = React.useState("dark");

  const [theme, setTheme] = React.useState(createTheme({
    palette: {
      mode: currentTheme,
    },
  }));
  const [activeSection, setActiveSection] = React.useState("home");
  React.useEffect(() => {
    setTheme(createTheme({
      palette: {
        mode: currentTheme,
      },
    }));
  }, [currentTheme]);

  const sections = ['home', 'projects', 'about'];
  React.useEffect(() => {
    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (activeSection === section) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
      }
    });
  }, [activeSection]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Topbar
        currentTheme={currentTheme}
        setCurrentTheme={setCurrentTheme}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      <div className="section" id="home">
        <Home currentTheme={currentTheme} />
      </div>
      <div className="section" id="projects">
        <Projects />
      </div>
      <div className="section" id="about">
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
