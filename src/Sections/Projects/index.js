import * as React from 'react'
import { Box, Container, Fade, Grow, Typography } from '@mui/material'
import { useTheme } from '@mui/material/styles'
import { useInView } from 'react-intersection-observer'
import PropTypes from 'prop-types'
import { useProjectList } from './projects'

const FadeInBox = ({ children }) => {
  const theme = useTheme()
  const [ref, inView] = useInView({
    triggerOnce: true,
  })
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
  )
}

FadeInBox.propTypes = {
  children: PropTypes.node.isRequired,
}

export default function Projects() {
  const theme = useTheme()
  const projectList = useProjectList()

  return (
    <Box sx={{ width: '100%', backgroundColor: theme.palette.background.default, padding: '2rem 0' }}>
      <Container sx={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Typography variant="h2" sx={{ width: '100%', textAlign: 'center', marginBottom: '2rem' }}>
          Projects & Experience
        </Typography>
        {projectList.map(project => (
          <FadeInBox key={project.title}>
            <Typography variant="h5">
              {project.title}
            </Typography>
            {project.redirectLink
              ? (
                  <Typography component="a" href={project.redirectLink} style={{ color: 'inherit' }}>
                    {typeof project.image === 'string'
                      ? (
                          <img
                            src={project.image}
                            alt={project.title}
                            style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
                          />
                        )
                      : (
                          <Box sx={{ margin: '1rem 0' }}>{project.image}</Box>
                        )}
                  </Typography>
                )
              : (
                  typeof project.image === 'string'
                    ? (
                        <img
                          src={project.image}
                          alt={project.title}
                          style={{ width: '100%', borderRadius: '8px', margin: '1rem 0' }}
                        />
                      )
                    : (
                        <Box sx={{ margin: '1rem', color: 'inherit' }}>{project.image}</Box>
                      )
                )}
            <Typography variant="body1" sx={{ marginTop: '1rem' }}>
              {project.description}
            </Typography>
          </FadeInBox>
        ))}
      </Container>
    </Box>
  )
}
