import Link from 'next/link'

import Browser from '@/components/Browser'
import propertyPulseUI from '@/assets/images/property-pulse-ui.png'
import mediumcloneCode from '@/assets/images/medium-clone-code.png'
import portfolio from '@/assets/images/portfolio.png'
import notFound from '@/assets/images/not-found.png'

const projects = {
  'property pulse': {
    url: 'https://propertypulse-nextjs-mb.vercel.app',
    image: propertyPulseUI,
    description:
      'Property Pulse is a real estate platform that allows users to search for properties, view property details, and contact the agent. After login via google provider user is able to add his own properties and follow specific categories. The platform is built with Next.js, Tailwind CSS, and MongoDB. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident nihil ipsa rerum neque dolor quae sequi non recusandae officiis, et ad. Sit temporibus ad facere dignissimos, odit autem quisquam nostrum.',
    github: ['https://github.com/gentlemil/propertypulse-nextjs'],
    stack: [
      'JavaScript',
      'Next.js',
      'MongoDB',
      'Mapbox API',
      'Vercel',
      'Tailwind CSS',
    ],
  },
  medium: {
    url: 'https://github.com/gentlemil/mediumclone_nestjs',
    image: mediumcloneCode,
    description:
      'This is clone of popular blogging platform that allows users to publish articles and share their thoughts on various topics. It caters to both professional writers and amateurs, providing a space for expression and discussion. Medium is also used as a tool for personal branding and networking by publishing content that can attract attention within a specific industry. It is a multirepo project with separate frontend and backend repositories. The frontend is built with Angular styled with Tailwind CSS and the backend with NestJS. The database is PostgreSQL.',
    github: [
      'https://github.com/gentlemil/mediumclone_angular',
      'https://github.com/gentlemil/mediumclone_nestjs',
    ],
    stack: ['TypeScript', 'NestJS', 'Angular', 'PostgreSQL', 'Tailwind CSS'],
  },
  'this site!': {
    url: 'https://miloszbukala.pl',
    image: portfolio,
    description:
      'This is my personal portfolio website that showcases my work, skills, and experience. It is designed to provide an overview of my professional background and projects, as well as to serve as a platform for sharing my thoughts and insights. The site is built with Next.js, Tailwind CSS, and Vercel. In addition to the publicly accessible sections, the site has a dedicated CMS to manage the content displayed on the site. Accessible only after logging in',
    github: ['https://github.com/gentlemil/portfolio'],
    stack: [
      'JavaScript',
      'NextJS',
      'MongoDB',
      'Tailwind CSS',
      'CMS',
      'Vercel',
      'Google Auth',
    ],
  },
  ems: {
    url: 'https://github.com/gentlemil/ems',
    image: notFound,
    description:
      'Employee Management System is a web application that allows companies to manage their employees, track their performance, and monitor their attendance. It provides a centralized platform for HR departments to streamline their operations and improve efficiency. It is a monolithic application built using NX consisting of three separate applications and two libraries. In progress',
    github: ['https://github.com/gentlemil/ems'],
    stack: [
      'TypeScript',
      'NX',
      'NestJS',
      'Next.js',
      'React',
      'PostgreSQL',
      'Tailwind CSS',
      'Storybook',
      'Prisma',
    ],
  },
}

const participations = {
  'polski pcs': {
    url: 'https://polskipcs.pl',
    image: notFound,
  },
  bookooy: {
    url: 'https://bookooy.com',
    image: notFound,
  },
  mycore: {
    url: 'https://app.mycore.com',
    image: notFound,
  },
  dujourbaby: {
    url: 'https://www.dujourbaby.com',
    image: notFound,
  },
  'swim express': {
    url: 'https://swimexpress.co',
    image: notFound,
  },
  neopos: {
    url: 'https://www.neopos.pl',
    image: notFound,
  },
}

const ExperiencePage = () => {
  return (
    <section className='container px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-12'>
        my work <span className='text-mint'>experience</span> and own projects
      </h2>

      {/* section description */}
      <div className='pb-12'>
        Explore my portfolio to see a variety of impactful projects I've
        developed, ranging from e-learning platforms to beauty apps and
        point-of-sale systems. Each project showcases my dedication to crafting
        engaging user experiences and robust functionalities. Dive into how I've
        helped businesses innovate and grow!
      </div>

      {Object.entries(projects).map(([projectName, project]) => (
        <div
          key={projectName}
          className='grid grid-cols-2 gap-4 items-start py-12 border-b border-mint/50 last-of-type:pb-0 last-of-type:border-none'
        >
          <div>
            <h2 className='text-3xl font-medium tracking-wider pb-6'>
              {projectName}
            </h2>
            <p className='text-gray-200 text-justify font-light pb-6'>
              {project.description}
            </p>
            {project.github.length === 1 ? (
              <Link
                href={project.github[0]}
                target='_blank'
                className='overflow-ellipsis overflow-hidden whitespace-nowrap text-green-300 hover:text-green-400 tracking-wider font-normal underline text-xl'
              >
                repository link
              </Link>
            ) : (
              <div className='flex gap-2 overflow-ellipsis overflow-hidden whitespace-nowrap text-green-300  tracking-wider font-normal text-xl'>
                <span>repository links:</span>
                <Link
                  href={project.github[0]}
                  target='_blank'
                  className='underline hover:text-green-400'
                >
                  frontend
                </Link>
                <span>and</span>
                <Link
                  href={project.github[1]}
                  target='_blank'
                  className='underline hover:text-green-400'
                >
                  backend
                </Link>
              </div>
            )}
          </div>

          <div className='w-full flex justify-center'>
            <Browser url={project.url} image={project.image} />
          </div>

          <div className='col-span-2'>
            <h3 className='text-2xl tracking-wider pb-4'>
              tech stack <span className='text-mint'> used</span>
            </h3>
            <ul className='flex justify-start items-center gap-2'>
              {project.stack.map((item, index) => (
                <li key={index}>
                  <div className='border border-mint rounded-full px-3 py-1.5'>
                    {item}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}

      <h2 className='text-4xl font-medium tracking-wider text-gray-200 py-12'>
        projects <span className='text-mint'>participations</span>
      </h2>

      <div className='grid grid-cols-3 gap-4'>
        {Object.entries(participations).map(([projectName, project]) => (
          <Browser key={projectName} url={project.url} image={project.image} />
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
