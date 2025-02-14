import * as React from 'react';
import { Box, Container, Fade, Grow, Typography} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { FaFileAlt } from 'react-icons/fa';
import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';

const FadeInBox = ({ children }) => {
  const theme = useTheme();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });
  return (
    <Grow in={inView} timeout={1000}>
      <Fade in={inView} timeout={1000}>  
        <Box
          ref={ref}
          sx={{
            width: '300px',
            margin: '1rem',
            padding: '1rem',
            backgroundColor: theme.palette.background.paper,
            boxShadow: theme.shadows[3],
            borderRadius: '8px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            boxSizing: 'border-box',
          }}
        >
          {children}
        </Box>
      </Fade>
    </Grow>
  );
};

FadeInBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export default function Projects() {
  const theme = useTheme();

  const projectList = [
    {
      title: 'Hamiltonian Paths in Neighbor-Swap Graphs',
      description: (
        <>
          For my Master Graduation Project, I researched Hamiltonian Paths in Neighbor-Swap Graphs.
          I constructed a proof to show that a relaxation of these paths is possible in cases where a perfect Hamiltonian path is not possible.
          I gradutated with a 9/10 for this project.
          <br />
          <Typography component="a" href="/files/Lehmers_Conjecture_and_Hamiltonian_Paths_in_Neighbor_swap_Graphs.pdf" style={{ color: 'inherit' }}>
            My Master&apos;s Thesis is available here
          </Typography>.
        </>
      ),
      image: '/images/permutahedron.png',
      redirectLink: '/files/Lehmers_Conjecture_and_Hamiltonian_Paths_in_Neighbor_swap_Graphs.pdf',
    },
    {
      title: 'Prodrive Technologies',
      description: (
        <>
          Between November 2021 and April 2024 I worked part-time at Prodrive Technologies.
          I worked on multiple projects as a Full-Stack developer during this time. 
        </>
      ),
      image: '/images/PT_logo2020_Blue-CMYK.png',
      redirectLink: 'https://prodrive-technologies.com/',
    },
    {
      title: 'ParelPracht',
      description: (
        <>
          ParelPracht is a CRM system for Study Association GEWIS.
          During my board year (2020-2021), I worked on the development of the
          {' '}
          <Typography component="a" href="https://github.com/GEWIS/parelpracht-client" style={{ color: 'inherit' }}>front-end</Typography>
          {' and '}
          <Typography component="a" href="https://github.com/GEWIS/parelpracht-server" style={{ color: 'inherit' }}>back-end</Typography> of this project.
        </>
      ),
      image: theme.palette.mode === 'dark' ? '/images/ParelPracht-peach.png' : '/images/ParelPracht-blue.png',
      redirectLink: 'https://github.nl/GEWIS/parelpracht-client',
    },
    {
      title: 'TU/ecomotive',
      description: (
        <>
          As part of the sixth team of TU/ecomotive, I worked on
          {' '}
          <Typography component="a" href="https://www.tuecomotive.nl/luca/" style={{ color: 'inherit' }}>
            Luca
          </Typography>
          ; a car made mostly from waste materials.
          In a multi-disciplinary team, I gained experience with programming embedded systems.
        </>
      ),
      image: '/images/Luca.jpg',
      redirectLink: 'https://www.tuecomotive.nl/luca/',
    },
    {
      title: 'Dashboard for Building Sensors',
      description: (
        <>
          As the final project of my Bachelor&apos; s degree, I worked on a dashboard for building sensors.
          This project is used to monitor timesensor data and visualize it in a user-friendly way.
        </>
      ),
      image: '/images/DaBS.png',
      redirectLink: null,
    },
    {
      title: 'Board Year GEWIS',
      description: (
        <>
          In 2020-2021 I was part of the board of Study Association GEWIS.
          During this year as the secretary, I developed my soft skills and learned about the inner workings of an association.
        </>
      ),
      image: '/images/GEWIS.jpg',
      redirectLink: 'https://gewis.nl/',
    },
    {
      title: 'Resume',
      description: (
        <>
          If you are interested in a more detailed overview of my work experience, 
          you can download my resume <Typography component="a" href="/files/CV_Max_Opperman.pdf" download style={{ color: 'inherit'}}> here!</Typography>
        </>
      ),
      image: <FaFileAlt size={90} />,
      redirectLink: '/files/CV_Max_Opperman.pdf',
    },
  ];

  return (
    <Box sx={{ width: '100%', backgroundColor: theme.palette.background.default, padding: '2rem 0' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography variant='h2' sx={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
          Projects & Experience
        </Typography>
        {projectList.map((project) => (
          <FadeInBox key={project.title}>
            <Typography variant='h5'>
              {project.title}
            </Typography>
            {project.redirectLink ? (
              <Typography component="a" href={project.redirectLink} style={{ color: 'inherit' }}>
                {typeof project.image === 'string' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
                  />
                ) : (
                  <Box sx={{ margin: '1rem 0' }}>{project.image}</Box>
                )}
              </Typography>
            ) : (
              typeof project.image === 'string' ? (
                <img
                  src={project.image}
                  alt={project.title}
                  style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
                />
              ) : (
                <Box sx={{ margin: '1rem', color: 'inherit' }}>{project.image}</Box>
              )
            )}
            <Typography variant='body1' sx={{ marginTop: '1rem' }}>
              {project.description}
            </Typography>
          </FadeInBox>
        ))}
      </Container>
    </Box>
  );
}