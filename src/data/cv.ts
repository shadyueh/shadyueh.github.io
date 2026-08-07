export interface Profile {
  name: string
  email: string
  location: { city: string; uf: string; country: string }
}

export interface Job {
  company: string
  role: string
  location: { city: string; uf: string; country: string }
  period: { start: number; end: number | null }
  responsibilities: string[]
}

export interface Education {
  degree: string
  institution: string
  location: { city: string; uf: string; country: string }
  due: number
}

export const profile: Profile = {
  name: 'Von Held Grijo',
  email: 'held.grijo@gmail.com',
  location: { city: 'Manaus', uf: 'AM', country: 'BR' },
}

export const summary: string[] = [
  'I am a highly skilled full stack software developer with extensive experience in coding with HTML, CSS, SASS, SCSS, PHP, JavaScript, ReactJS, NodeJS, and experience working with PostgreSQL, OracleDB, and MySQL databases.',
  'I have a proven track record of delivering high-quality software solutions, having worked with web software development at PRODAM, an IT company in Government, as well as mobile app development at FPFTech, an IT institute and at SUBTI, the subsecretary of IT from Manaus City Hall.',
  'I am well-versed in Git for code versioning and Gitlab for application deployment. My strong technical skills, wide knowledge in several intersection areas, from coding, testing, to delivering and integrate applications, and ability to work well in a team make me an asset to any organization.',
]

export const experience: Job[] = [
  {
    company: 'Manaus City Hall - SEMEF/SUBTI',
    role: 'Software Developer',
    location: { city: 'Manaus', uf: 'AM', country: 'BR' },
    period: { start: 2022, end: null },
    responsibilities: [
      'Melhoria nos processos de versionamento, qualidade e entrega de software.',
      'Desenvolvimento de APIs usando SpringBoot, Node e etc.',
    ],
  },
]

export const education: Education = {
  degree: 'B.Sc. in Computing Engineering',
  institution: 'UEA - Universidade do Estado do Amazonas',
  location: { city: 'Manaus', uf: 'AM', country: 'BR' },
  due: 2011,
}

export const skills: string[] = [
  'Flexible and Adaptable',
  'Problem-Solving',
  'Teamwork and Collaboration',
  'Self-Motivated',
  'Critical Thinking',
  'Continuous improvement techniques',
  'New employee mentoring',
  'Scrum methodology',
]

export const socials: { github: string; linkedin: string; twitter: string } = {
  github: 'https://github.com/shadyueh',
  linkedin: '',
  twitter: '',
}
