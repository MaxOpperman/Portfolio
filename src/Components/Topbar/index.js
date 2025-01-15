import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
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

export default function Topbar({
  currentTheme,
  setCurrentTheme,
  activeSection,
  setActiveSection,
  ...props
}) {
  Topbar.propTypes = {
    currentTheme: PropTypes.string.isRequired,
    setCurrentTheme: PropTypes.func.isRequired,
    activeSection: PropTypes.string.isRequired,
    setActiveSection: PropTypes.func.isRequired,
  };
  const sections = ['home', 'projects', 'about'];
  return (
    <React.Fragment>
      <CssBaseline />
      <ElevationScroll {...props}>
        <AppBar
          // style={{ background: 'transparent', boxShadow: 'none'}}
        >
        <Container maxWidth="xxl">
          <Toolbar disableGutters>
            {/* <MdCode sx={{ display: { xs: 'none', md: 'flex' }, ml: 1 }} /> */}
            <Typography
              variant="h6"
              noWrap
              sx={{
                mx: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'Audiowide',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'default',
              }}
            >
              MAX
            </Typography>
            {sections.map((section, index) => (
              <Box
                key={section}
                sx={{ flexGrow: index == 0 ? 1 : 0,
                  justifyContent: 'flex-end',
                  display: 'flex',
                  mx: 1,
                  size: 32
                }}
              >
                <Typography
                  onClick={(event) => {
                    event.preventDefault();
                    setActiveSection(section);
                  }}
                  sx={{
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
                      width: activeSection === section ? '100%' : '0',
                      height: '2px',
                      backgroundColor: 'currentColor',
                      transition: 'width 0.3s ease-in-out',
                    },
                  }}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Typography>
              </Box>
            ))}
            <Box sx={{ flexGrow: 0, display: 'flex', mx: 2, size: 32 }}>
              <Tooltip title="Dark Mode">
                <ThemeToggler theme={currentTheme} themeSetter={setCurrentTheme} />
              </Tooltip>
            </Box>
        </Toolbar>
        </Container>     
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </React.Fragment>
  );
}
