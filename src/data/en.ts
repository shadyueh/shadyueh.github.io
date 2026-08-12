import type { Cv } from './cv'

export const en: Cv = {
  profile: {
    name: 'Von Held Grijo',
    headline: 'Software Developer',
    email: 'held.grijo@gmail.com',
    location: { city: 'Manaus', uf: 'AM', country: 'BR' },
  },
  summary: [
    'I am a highly skilled full stack software developer with extensive experience in coding with HTML, CSS, SASS, SCSS, PHP, JavaScript, ReactJS, NodeJS, and experience working with PostgreSQL, OracleDB, and MySQL databases.',
    'I have a proven track record of delivering high-quality software solutions, having worked with web software development at PRODAM, an IT company in Government, as well as mobile app development at FPFTech, an IT institute and at SUBTI, the subsecretary of IT from Manaus City Hall.',
    'I am well-versed in Git for code versioning and Gitlab for application deployment. My strong technical skills, wide knowledge in several intersection areas, from coding, testing, to delivering and integrate applications, and ability to work well in a team make me an asset to any organization.',
  ],
  experience: [
    {
      company: 'Manaus City Hall - SEMEF/SUBTI',
      role: 'Software Developer',
      location: { city: 'Manaus', uf: 'AM', country: 'BR' },
      period: { start: 2022, end: null },
      responsibilities: [
        'Improvements to software versioning, quality and delivery processes.',
        'API development using SpringBoot, Node and others.',
      ],
    },
  ],
  education: {
    degree: 'B.Sc. in Computing Engineering',
    institution: 'UEA - Amazonas State University',
    location: { city: 'Manaus', uf: 'AM', country: 'BR' },
    due: 2011,
  },
  skills: [
    'Flexibility and adaptability',
    'Problem solving',
    'Teamwork and collaboration',
    'Self-motivation',
    'Critical thinking',
    'Continuous improvement techniques',
    'New employee mentoring',
    'Scrum methodology',
  ],
}