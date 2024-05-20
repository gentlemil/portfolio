import connectDB from '@/config/database'
import Skill from '@/models/Skill'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import SkillEditForm from '@/components/SkillEditForm'

const EditSkillPage = async ({ params }) => {
  await connectDB()

  if (!params.id) {
    throw new Error('Skill ID is required')
  }

  const skillDoc = await Skill.findById(params.id)
  const skill = convertToSerializeableObject(skillDoc)

  if (!skill) {
    return (
      <p className='text-center italic font-thin tracking-wider'>no data</p>
    )
  }

  return (
    <section className=''>
      <div className='container mx-auto max-w-2xl py-12 lg:py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <SkillEditForm skill={skill} />
        </div>
      </div>
    </section>
  )
}

export default EditSkillPage
