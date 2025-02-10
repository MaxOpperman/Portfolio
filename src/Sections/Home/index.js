import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import ParticleBackground from './ParticleBackground';
import { Container, Fade, Slide, Typography } from '@mui/material';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdOutlineEmail } from 'react-icons/md';

export default function Home({
  currentTheme,
}) {
  Home.propTypes = {
    currentTheme: PropTypes.string.isRequired,
  };
  const containerRef = React.useRef(null);

  const socialLinks = [
    {
      key: "github",
      href: "https://github.com/MaxOpperman",
      icon: <FaGithub size={40} />,
    },
    {
      key: "linkedin",
      href: "https://linkedin.com/in/max-opperman",
      icon: <FaLinkedin size={40} />,
    },
    {
      key: "email",
      href: "mailto:mail@maxopperman.nl",
      icon: <MdOutlineEmail size={40} />,
    },
  ];

  return (
    <Box sx={{ position: 'relative', height: '100vh', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      {/* Particles */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1, // Set lower z-index for particles
        }}
      >
        <ParticleBackground currentTheme={currentTheme} />
      </Box>
      <Container sx={{ display: 'flex', alignItems: 'center', zIndex: 1, marginTop: '-10vh' }} maxWidth={false} ref={containerRef}>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <Slide in timeout={750} container={containerRef.current}>
            <Typography variant='h1' sx={{ mt: 16 }}>
              Max Opperman
            </Typography>
          </Slide>
          <Fade in timeout={1000} style={{ transitionDelay: '500ms' }}>
            <Typography variant='h3' sx={{ mt: 4 }}>
              Software Engineer
            </Typography>
          </Fade>
          <Fade in timeout={800} style={{ transitionDelay: '700ms' }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 8, alignItems: 'center' }}>
              {socialLinks.map((social, index) => (
                <React.Fragment key={social.key}>
                  <Typography
                    component='a'
                    variant='h3'
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ filter: 'drop-shadow(2px 2px 4px black)' }}
                  >
                    {social.icon}
                  </Typography>
                  {index < socialLinks.length - 1 && (
                    <Box
                      sx={{
                        width: '20px',
                        height: '3px',
                        backgroundColor: currentTheme === 'dark' ? 'white' : 'black',
                        mx: 2,
                        borderRadius: '3px', // Rounded corners
                      }}
                    />
                  )}
                </React.Fragment>
              ))}
            </Box>
          </Fade>
        </Box>
        <Box sx={{ flex: 1, textAlign: 'center' }}>
          <img src="/Max.JPEG" alt="Max Opperman" style={{ maxHeight: '65vh', borderRadius: '5%' }} />
        </Box>
      </Container>
    </Box>
  );
}