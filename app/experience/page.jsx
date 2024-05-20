import Link from 'next/link'
import connectDB from '@/config/database'
import Browser from '@/components/Browser'
import notFound from '@/assets/images/not-found.png'
import Project from '@/models/Project'
import Participation from '@/models/Participation'
import { convertToSerializeableObject } from '@/utils/convertToObject'

const ExperiencePage = async () => {
  await connectDB()

  const ownProjectsDoc = await Project.find({ status: true }).lean()
  const ownProjects = convertToSerializeableObject(ownProjectsDoc)

  const participationsDoc = await Participation.find({
    status: true,
  }).lean()
  const participations = convertToSerializeableObject(participationsDoc)

  return (
    <section className='container mx-auto px-4 lg:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-12'>
        my work <span className='text-mint'>experience</span> and own projects
      </h2>

      <div className='pb-12'>
        Explore my portfolio to see a variety of impactful projects I've
        developed, ranging from e-learning platforms to beauty apps and
        point-of-sale systems. Each project showcases my dedication to crafting
        engaging user experiences and robust functionalities. Dive into how I've
        helped businesses innovate and grow!
      </div>

      {/* own projects */}
      {ownProjects.map((project) => (
        <div
          key={project._id}
          className='lg:grid grid-cols-2 gap-4 items-start py-4 lg:py-12 border-b border-mint/50 last-of-type:pb-0 last-of-type:border-none'
        >
          <div>
            <h2 className='text-3xl font-medium tracking-wider pb-6'>
              {project.name}
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

          <div className='w-full flex justify-center py-4 lg:py-0'>
            <Browser url={project.url} image={project.images[0] || notFound} />
          </div>

          <div className='col-span-2'>
            <h3 className='text-2xl tracking-wider pb-4'>
              tech stack <span className='text-mint'> used</span>
            </h3>
            <ul className='flex flex-wrap justify-start items-center gap-2'>
              {project.tech_stack.map((item, index) => (
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

      {/* participations */}
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 py-12'>
        projects <span className='text-mint'>participations</span>
      </h2>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {participations.map((project) => (
          <div className='w-full flex justify-center py-4 lg:py-0'>
            <Browser
              key={project._id}
              url={project.url}
              image={project.images[0] || notFound}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default ExperiencePage
