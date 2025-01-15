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
  React.useEffect(() => {
    const home = document.getElementById("home");
    const projects = document.getElementById("projects");
    const about = document.getElementById("about");
    if (activeSection === "home") {
      home.scrollIntoView({ behavior: "smooth" });
    } else if (activeSection === "projects") {
      projects.scrollIntoView({ behavior: "smooth" });
    } else if (activeSection === "about") {
      about.scrollIntoView({ behavior: "smooth" });
    }
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
      <div id="home">
        <Home />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id="about">
        <About />
      </div>
    </ThemeProvider>
  );
}

export default App;
