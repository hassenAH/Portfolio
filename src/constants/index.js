import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  addinn,
  css,
  flutter,
  reactjs,
  tailwind,
  nodejs,
  git,
  figma,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  kelhel,
  scaleup,

} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [

  {
    name: 'Flutter',
    icon: flutter,
  },
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  }
];

const experiences = [
  {
    title: 'UX/UI Designer',
    company_name: 'ADDINN Group',
    icon: addinn,
    iconBg: '#333333',
    date: ' Jan 2025 - Now',
  },
  {
    title: 'Mobile Developer and UX/UI Designer intern',
    company_name: 'ADDINN Group',
    icon: addinn,
    iconBg: '#333333',
    date: ' Mars 2024 - Sept 2024',
  },
  {
    title: 'Mobile Developer intern',
    company_name: 'Scale up',
    icon: scaleup,
    iconBg: '#333333',
    date: 'July 2023 - Aug 2023',
  },
  {
    title: 'Web Development Internr',
    company_name: 'Tetra Agency',
    icon: kelhel,
    iconBg: '#333333',
    date: 'July 2022 - Aug 2022',
  }
];

const projects = [
  {
    id: 'project-1',
    name: 'Svelteo Clinic',
    description: 'Svelteo Clinic is a modern online platform for booking aesthetic treatments and exploring personalized beauty care services',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,

    demo: 'https://svelteonice.com',
  },
  {
    id: 'project-2',
    name: 'Edu VR',
    description:
      'EduVR is an interactive web platform that leverages virtual reality to deliver immersive educational experiences.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Three Js',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    demo: 'https://eduvr-school.com',
  },
  {
    id: 'project-3',
    name: 'Filamen',
    description: 'Filamen brand is a brand shop website showcasing and selling its signature products with a sleek, user-friendly interface',
    tags: [
      {
        name: 'React',
        color: 'blue-text-gradient',
      },
      {
        name: 'NodeJS express',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    demo: 'https://www.filamen.com.tn',
  }
];

export { services, technologies, experiences, projects };
