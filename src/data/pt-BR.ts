import type { Cv } from './cv'

export const ptBR: Cv = {
  profile: {
    name: 'Von Held Grijo',
    headline: 'Desenvolvedor de Software',
    email: 'held.grijo@gmail.com',
    location: { city: 'Manaus', uf: 'AM', country: 'BR' },
  },
  summary: [
    'Sou um profissional de software full stack altamente qualificado, com ampla experiência em HTML, CSS, SASS, SCSS, PHP, JavaScript, ReactJS e NodeJS, além de experiência com os bancos de dados PostgreSQL, OracleDB e MySQL.',
    'Tenho um histórico comprovado de entrega de soluções de software de alta qualidade, tendo trabalhado com desenvolvimento web na PRODAM, empresa de TI do Governo, e com desenvolvimento de aplicativos mobile na FPFTech, instituto de TI, e na SUBTI, subsecretaria de TI da Prefeitura de Manaus.',
    'Tenho forte domínio de Git para versionamento de código e de GitLab para deploy de aplicações. Minhas habilidades técnicas sólidas, o conhecimento amplo em diversas áreas de interseção — da codificação e testes à entrega e integração de aplicações — e a capacidade de trabalhar bem em equipe me tornam um ativo para qualquer organização.',
  ],
  experience: [
    {
      company: 'Prefeitura de Manaus - SEMEF/SUBTI',
      role: 'Desenvolvedor de Software',
      location: { city: 'Manaus', uf: 'AM', country: 'BR' },
      period: { start: 2022, end: null },
      responsibilities: [
        'Melhoria nos processos de versionamento, qualidade e entrega de software.',
        'Desenvolvimento de APIs usando SpringBoot, Node e etc.',
      ],
    },
  ],
  education: {
    degree: 'Bacharel em Engenharia de Computação',
    institution: 'UEA - Universidade do Estado do Amazonas',
    location: { city: 'Manaus', uf: 'AM', country: 'BR' },
    due: 2011,
  },
  skills: [
    'Flexibilidade e adaptabilidade',
    'Resolução de problemas',
    'Trabalho em equipe e colaboração',
    'Automotivação',
    'Pensamento crítico',
    'Técnicas de melhoria contínua',
    'Mentoria de novos colaboradores',
    'Metodologia Scrum',
  ],
}