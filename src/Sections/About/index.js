import * as React from 'react';
import { Box, Container, Fade, Grow, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const theme = useTheme();

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <Box sx={{ width: '100%', backgroundColor: theme.palette.background.default, padding: '2rem 0' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography ref={ref} variant='h2' sx={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
          About
        </Typography>
        <Fade in={inView} timeout={1000}>
          <Box sx={{ width: '100%' }}>
            <Grow in={inView} timeout={1000}>
              <Typography variant='body1' sx={{ width: '100%', textAlign: 'left' }}>
                I am always eager to find the solution and help out. With my work, I hope to contribute to society and improve people&apos;s lives.
                As a software engineering, I like to work on projects that have a positive impact on the world.
                I have experience with a variety of programming languages including TypeScript, JavaScript, Python, and Java.
                Furthermore, I have experience with a variety of frameworks and libraries including React, Django, NodeJS, Express, and Docker.
                I have a strong understanding of software engineering principles and a passion for learning new technologies.
                <br />
                In my free time, I enjoy working on personal projects. Moreover, I enjoy playing sports; I play field hockey and like to go sailing.
                I like to keep myself busy and I am always looking for new challenges.
              </Typography>
            </Grow>
          </Box>
        </Fade>
      </Container>
      <Typography variant='body2' color='textSecondary' sx={{ width: '100%', textAlign: 'center', marginTop: '2rem' }}>
        © {new Date().getFullYear()} Max Opperman. All rights reserved.
      </Typography>
    </Box>
  );
}