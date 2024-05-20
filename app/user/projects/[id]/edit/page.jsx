import connectDB from '@/config/database'
import Project from '@/models/Project'
import { convertToSerializeableObject } from '@/utils/convertToObject'
import ProjectEditForm from '@/components/ProjectEditForm'

const EditProjectPage = async ({ params }) => {
  await connectDB()

  if (!params.id) {
    throw new Error('Project ID is required')
  }

  const projectDoc = await Project.findById(params.id)
  const project = convertToSerializeableObject(projectDoc)

  if (!project) {
    return (
      <p className='text-center italic font-thin tracking-wider'>no data</p>
    )
  }

  return (
    <section className=''>
      <div className='container mx-auto max-w-2xl py-12 lg:py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <ProjectEditForm project={project} />
        </div>
      </div>
    </section>
  )
}

export default EditProjectPage
