import ProjectAddForm from '@/components/ProjectAddForm'

const AddProjectPage = () => {
  return (
    <section className=''>
      <div className='container mx-auto max-w-2xl py-12 lg:py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <ProjectAddForm />
        </div>
      </div>
    </section>
  )
}

export default AddProjectPage
