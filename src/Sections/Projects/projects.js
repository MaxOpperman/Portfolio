import React from 'react'
import Typography from '@mui/material/Typography'
import { FaFileAlt } from 'react-icons/fa'
import { useTheme } from '@mui/material/styles'

export const useProjectList = () => {
  const theme = useTheme()
  return [
    {
      title: 'Alliander',
      description: (
        <>
          Currently I am working at Alliander as a full-stack software developer.
          The project involves developing a system that enables various projects to share data about the construction of energy stations.
          This system is built using a microservices architecture, with a focus on scalability and maintainability.
          This is a cloud-based solution in AWS, leveraging modern technologies to ensure high availability and performance.
        </>
      ),
      image: '/images/alliander.png',
      redirectLink: 'https://www.alliander.com/en/',
    },
    {
      title: 'Hamiltonian Paths in Neighbor-Swap Graphs',
      description: (
        <>
          For my Master Graduation Project, I researched Hamiltonian Paths in Neighbor-Swap Graphs.
          I constructed a proof to show that a relaxation of these paths is possible in cases where a perfect Hamiltonian path is not possible.
          I graduated with a 9/10 for this project.
          <br />
          <Typography component="a" href="/files/Lehmers_Conjecture_and_Hamiltonian_Paths_in_Neighbor_swap_Graphs.pdf" style={{ color: 'inherit' }}>
            My Master&apos;s Thesis is available here
          </Typography>
          .
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
          <Typography component="a" href="https://github.com/GEWIS/parelpracht" style={{ color: 'inherit' }}>front-end &amp; back-end</Typography>
          {' '}
          of this project. The frontend is built with React and the back-end with Express.
        </>
      ),
      image: theme.palette.mode === 'dark' ? '/images/ParelPracht-peach.png' : '/images/ParelPracht-blue.png',
      redirectLink: 'https://github.nl/GEWIS/parelpracht',
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
          you can download my resume
          {' '}
          <Typography component="a" href="/files/CV_Max_Opperman.pdf" download style={{ color: 'inherit' }}> here!</Typography>
        </>
      ),
      image: <FaFileAlt size={90} />,
      redirectLink: '/files/CV_Max_Opperman.pdf',
    },
  ]
}
