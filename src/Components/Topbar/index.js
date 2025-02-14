import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import ThemeToggler from '../ThemeToggler';
import Container from '@mui/material/Container';

function ElevationScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  return children
    ? React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
      })
    : null;
}

ElevationScroll.propTypes = {
  children: PropTypes.element,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

Topbar.propTypes = {
  currentTheme: PropTypes.string.isRequired,
  setCurrentTheme: PropTypes.func.isRequired,
  activeSection: PropTypes.string.isRequired,
  setActiveSection: PropTypes.func.isRequired,
  isScrollingByClick: PropTypes.bool.isRequired,
  setIsScrollingByClick: PropTypes.func.isRequired,
  isScrollingManually: PropTypes.bool.isRequired,
  setIsScrollingManually: PropTypes.func.isRequired,
};

export default function Topbar({
  currentTheme,
  setCurrentTheme,
  activeSection,
  setActiveSection,
  isScrollingByClick,
  setIsScrollingByClick,
  isScrollingManually,
  setIsScrollingManually,
  ...props
}) {
  const sections = ['home', 'projects', 'about'];

  React.useEffect(() => {
    const handleScroll = () => {
      if (isScrollingByClick) return; // Skip scroll detection if user clicked

      setIsScrollingManually(true); // Mark that the user is scrolling manually
  
      const scrollPosition = window.scrollY;
      let newActiveSection = activeSection;
  
      sections.forEach((section, index) => {
        const el = document.getElementById(section);
        if (el) {
          const { top, height } = el.getBoundingClientRect();
          const sectionTop = top + window.scrollY;
  
          if (index === sections.length - 1) {
            // If it's the last section ("about"), activate it when near the bottom
            if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
              newActiveSection = section;
            }
          } else if (scrollPosition >= sectionTop && scrollPosition < sectionTop + height) {
            newActiveSection = section;
          }
        }
      });
  
      if (newActiveSection !== activeSection) {
        setActiveSection(newActiveSection, false); // This is from scrolling, not clicking
      }
    };
  
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, setActiveSection, isScrollingByClick, isScrollingManually]);

  const handleClick = (section) => {
    setIsScrollingByClick(true); // Disable manual scroll detection during click
    setIsScrollingManually(false); // Reset manual scroll flag
  
    setActiveSection(section, true);
  
    const el = document.getElementById(section);
    if (el) {
      if (section === 'about') {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
      } else {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  
    // Wait until the smooth scroll animation is likely complete (adjust delay if needed)
    setTimeout(() => {
      setIsScrollingByClick(false); // Re-enable scroll detection after clicking
    }, 800);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar>
          <Container maxWidth="xxl">
            <Toolbar disableGutters>
              <Typography variant="h6" noWrap>MAX</Typography>
              {sections.map((section, index) => (
                <Box
                  key={section}
                  sx={{
                    flexGrow: index === 0 ? 1 : 0,
                    justifyContent: 'flex-end',
                    display: 'flex',
                    mx: 1,
                  }}
                >
                  <Typography
                    onClick={(event) => {
                      event.preventDefault();
                      handleClick(section);
                    }}
                  variant='subtitle1'
                  sx={{
                    '&::after': {
                      width: activeSection === section ? '100%' : '0',
                    },
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
              </Box>
            ))}
            <Box sx={{ flexGrow: 0, display: 'flex', mx: 2, size: 32 }}>
              <ThemeToggler theme={currentTheme} themeSetter={setCurrentTheme} />
            </Box>
        </Toolbar>
        </Container>     
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
