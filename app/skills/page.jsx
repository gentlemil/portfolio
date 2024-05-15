import frontendIcon from '@/assets/images/icons/frontend.png'
import backendIcon from '@/assets/images/icons/backend.png'
import analiticsIcon from '@/assets/images/icons/analitics.png'
import otherTechIcon from '@/assets/images/icons/other-tech.png'

import Image from 'next/image'

const SkillsPage = () => {
  const frontendSkills = [
    'HTML',
    'SCSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'NgRx',
    'React',
    'Redux',
    'Tailwind CSS',
    'Bootstrap',
    'Angular Material',
    'Mapbox API',
    'Canva',
    'Chart.js',
    'Figma',
    'AdobeXD',
    'Storybook',
    'OpenStreetMap API',
    'Google API',
  ]
  const backendSkills = [
    'Node.js',
    'NestJS',
    'Next.js',
    'REST API',
    'NX',
    'Prisma',
    'TypeORM',
    'Docker',
    'GitLab CI/CD',
    'Heroku',
    'Netlify',
    'Vercel',
  ]

  const databaseSkills = [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'SQLite',
    'Postman',
    'Postico',
    'pgAdmin',
    'MongoDB Compass',
  ]

  const otherTechs = [
    'Git',
    'GitHub',
    'GitLab',
    'Jira',
    'Confluence',
    'Trello',
    'Slack',
    'Zoom',
    'Microsoft Teams',
    'Google Meet',
    'Discord',
    'Rocket',
    'MacOS',
    'Windows',
    'Visual Studio Code',
    'Chat GPT',
    'Medium',
    'Dev.to',
    'Stack Overflow',
    'Documentations',
    'Google',
  ]

  return (
    <section className='container mx-auto px-4 lg:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-20'>
        technologies I <span className='text-mint'>know</span> and use
      </h2>
      <div className='flex flex-col justify-start items-center lg:items-stretch lg:grid lg:grid-cols-3 gap-4'>
        {/* frontend */}
        <div className='border border-mint rounded-md shadow-md flex flex-col justify-start items-center gap-3 p-4'>
          <Image
            src={frontendIcon}
            alt=''
            height={0}
            width={'70'}
            sizes='100%'
          />
          <h3 className='text-3xl font-medium tracking-wider text-green-200'>
            frontend
          </h3>

          <ul className='flex flex-wrap justify-center items-center gap-2 overflow-hidden'>
            {frontendSkills.map((skill, index) => (
              <li
                key={index}
                className={`text-gray-200 tracking-wider text-center hover:text-green-200 ${
                  !(index % 2) && !(index % 3) && 'text-green-200'
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* backend */}
        <div className='border border-mint rounded-md shadow-md flex flex-col justify-start items-center gap-3 p-4'>
          <Image
            src={backendIcon}
            alt=''
            height={0}
            width={'70'}
            sizes='100%'
          />
          <h3 className='text-3xl font-medium tracking-wider text-gray-200'>
            backend
          </h3>

          <ul className='flex flex-wrap justify-center items-center gap-2 overflow-hidden'>
            {backendSkills.map((skill, index) => (
              <li
                key={index}
                className={`text-gray-200 tracking-wider text-center hover:text-green-200 ${
                  !(index % 3) && 'text-green-200'
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* database */}
        <div className='border border-mint rounded-md shadow-md flex flex-col justify-start items-center gap-3 p-4'>
          <Image
            src={analiticsIcon}
            alt=''
            height={0}
            width={'70'}
            sizes='100%'
          />
          <h3 className='text-3xl font-medium tracking-wider text-gray-200'>
            database
          </h3>

          <ul className='flex flex-wrap justify-center items-center gap-2 overflow-hidden'>
            {databaseSkills.map((skill, index) => (
              <li
                key={index}
                className={`text-gray-200 tracking-wider text-center hover:text-green-200 ${
                  index !== 0 && !(index % 3) && 'text-green-200'
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        {/* other skills */}
        <div className='col-span-3 border border-mint rounded-md shadow-md flex flex-col justify-start items-center gap-3 p-4'>
          <Image
            src={otherTechIcon}
            alt=''
            height={0}
            width={'70'}
            sizes='100%'
          />
          <h3 className='text-3xl font-medium tracking-wider text-gray-200'>
            other technologies i use on a daily basis
          </h3>

          <ul className='flex flex-wrap justify-center items-center gap-2 overflow-hidden'>
            {otherTechs.map((skill, index) => (
              <li
                key={index}
                className={`text-gray-200 tracking-wider text-center hover:text-green-200 ${
                  !(index % 3) && 'text-green-200'
                }`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SkillsPage
