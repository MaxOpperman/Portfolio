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
    typography: {
      body1: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Noto Sans"',
          '"Segoe UI"',
          'Roboto',
          '"Oxygen"',
          '"Ubuntu"',
          '"Cantarell"',
          '"Fira Sans"',
          '"Droid Sans"',
          '"Helvetica Neue"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
      },
      h1: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Franklin Gothic Medium"',
          '"serif"',
        ].join(','),
        textShadow: '2px 2px 4px black',
        color: 'inherit',
        userSelect: 'none',
      },
      h3: {
        textShadow: '2px 2px 4px black',
        color: 'inherit',
        margin: '0 8px',
        userSelect: 'none',
      },
      h6: {
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Audiowide"',
          '"serif"',
        ].join(','),
        margin: '0 4px',
        display: { xs: 'none', md: 'flex' },
        fontWeight: 700,
        color: 'inherit',
        textDecoration: 'none',
        cursor: 'default',
        userSelect: 'none',
      },
      subtitle1: {
        cursor: 'pointer',
        position: 'relative',
        display: 'inline-block',
        color: 'inherit',
        mx: 1,
        textDecoration: 'none',
        '&::after': {
          content: '""',
          position: 'absolute',
          bottom: '-3px',
          left: 0,
          height: '2px',
          backgroundColor: 'currentColor',
          transition: 'width 0.3s ease-in-out',
        },
      },
    },
    palette: {
      mode: currentTheme,
    },
  }));
  const [activeSection, setActiveSection] = React.useState("home");
  React.useEffect(() => {
    setTheme((prevTheme) => createTheme({
      ...prevTheme,
      palette: {
        ...prevTheme.palette,
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
