import frontendIcon from '@/assets/images/icons/frontend.png'
import backendIcon from '@/assets/images/icons/backend.png'
import analiticsIcon from '@/assets/images/icons/analitics.png'
import devopsIcon from '@/assets/images/icons/devops.png'
import otherTechIcon from '@/assets/images/icons/other-tech.png'

import Image from 'next/image'
import connectDB from '@/config/database'
import Skill from '@/models/Skill'

import { convertToSerializeableObject } from '@/utils/convertToObject'

const SkillsPage = async () => {
  await connectDB()

  const skillsDoc = await Skill.find({ status: true }).lean()
  const skills = convertToSerializeableObject(skillsDoc)

  const skillsObj = {}
  skills.forEach((skill) => {
    if (!skillsObj[skill.type]) {
      skillsObj[skill.type] = []
    }
    skillsObj[skill.type].push(skill)
  })

  const icon = (icon) => {
    switch (icon) {
      case 'frontend':
        return frontendIcon
      case 'backend':
        return backendIcon
      case 'analitics':
        return analiticsIcon
      case 'devops':
        return devopsIcon
      case 'other':
        return otherTechIcon
      default:
        return otherTechIcon
    }
  }

  return (
    <section className='container mx-auto px-4 lg:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-20'>
        technologies I <span className='text-mint'>know</span> and use
      </h2>
      <div className='flex flex-col justify-start items-center lg:items-stretch lg:grid lg:grid-cols-6 gap-4'>
        {Object.keys(skillsObj).map((key, index) => (
          <div
            key={key}
            className={`${
              index < 3 ? 'col-span-2' : 'col-span-3'
            } border border-mint rounded-md shadow-md flex flex-col justify-start items-center gap-3 p-4`}
          >
            <Image
              src={icon(key)}
              alt=''
              height={0}
              width={'70'}
              sizes='100%'
            />
            <h3 className='text-3xl font-medium tracking-wider text-green-200'>
              {key}
            </h3>

            <ul className='flex flex-wrap justify-center items-center gap-2 overflow-hidden'>
              {skillsObj[key].map((skill, index) => (
                <li
                  key={index}
                  className={`text-gray-200 tracking-wider text-center hover:text-green-200 ${
                    !(index % 2) && !(index % 3) && 'text-green-200'
                  }`}
                >
                  {skill.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsPage
