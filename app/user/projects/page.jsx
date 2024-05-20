'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import deleteProject from '@/app/actions/deleteProject'
import Spinner from '@/components/Spinner'
import { toast } from 'react-toastify'
import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { RxCrossCircled } from 'react-icons/rx'

const UserProjectsPage = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch('/api/projects')

        if (res.status === 200) {
          const data = await res.json()
          setProjects(data.projects)
        }
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  const handleDeleteProject = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this project?'
    )

    if (!confirmed) return

    setLoading(true)
    const deleteProjectId = deleteProject.bind(null, id)
    await deleteProjectId()

    toast.success('Project deleted successfully')

    const updatedProjects = projects.filter((project) => project._id !== id)

    setProjects(updatedProjects)
    setLoading(false)
  }

  return (
    <section className='container mx-auto relative'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-10 px-4'>
        own <span className='text-mint'>projects</span>
      </h2>

      <Link
        href='/user/projects/add'
        className='absolute top-0 right-0 text-white hover:text-mint border border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all'
      >
        add new
      </Link>

      {loading && <Spinner loading={loading} />}

      {!loading && projects.length === 0 && (
        <p className='text-center italic font-thin tracking-wider'>no data</p>
      )}

      {!loading && projects.length > 0 && (
        <div className='text-gray-200 italic tracking-wider font-thin overflow-hidden'>
          <table className='table w-full overflow-scroll'>
            <thead className='border-b border-mint text-center tracking-wider'>
              <tr>
                <th className='px-2 pb-2'>Lp</th>
                <th className='px-2 pb-2 !w-[200px]'>Name</th>
                <th className='px-2 pb-2 !w-[500px]'>Description</th>
                <th className='px-2 pb-2'>Url</th>
                <th className='px-2 pb-2'>Github</th>
                <th className='px-2 pb-2'>Tech Stack</th>
                <th className='px-2 pb-2'>Images</th>
                <th className='px-2 pb-2'>Status</th>
                <th className='px-2 pb-2'>Options</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project, index) => (
                <tr
                  key={project._id}
                  className='hover:bg-mint/10 text-center transition-all border-b border-mint/20'
                >
                  <td className='px-2'>{index + 1}</td>
                  <td className='px-2 '>{project.name}</td>
                  <td className='px-2 whitespace-wrap'>
                    {project.description}
                  </td>
                  <td className='px-2 whitespace-wrap'>
                    <Link
                      className='underline hover:text-mint'
                      href={project.url}
                      target='_blank'
                    >
                      open
                    </Link>
                  </td>
                  <td className='px-2 whitespace-wrap'>
                    <div className='flex flex-col justify-center items-center'>
                      {project.github.map((url, index) => (
                        <Link
                          key={index}
                          className='underline hover:text-mint'
                          href={url}
                          target='_blank'
                        >
                          open {project.github.length > 1 ? `${index + 1}` : ''}
                        </Link>
                      ))}
                    </div>
                  </td>
                  <td className='px-2 whitespace-wrap'>
                    <div className='flex flex-col'>
                      {project.tech_stack.map((stack, index) => (
                        <p
                          key={index}
                          className='hover:text-mint transition-colors'
                        >
                          {stack}
                        </p>
                      ))}
                    </div>
                  </td>
                  <td className='px-2 whitespace-wrap'>
                    <Link
                      className='underline hover:text-mint'
                      href={project.images[0]}
                      target='_blank'
                    >
                      image
                    </Link>
                  </td>
                  <td className='px-2'>
                    <div className='w-full flex justify-center items-center'>
                      {project.status ? (
                        <GiConfirmed
                          size={'1.25rem'}
                          className='text-green-200 text-center'
                        />
                      ) : (
                        <RxCrossCircled
                          size={'1.25rem'}
                          className='text-red-500'
                        />
                      )}
                    </div>
                  </td>
                  <td className='px-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <Link href={`projects/${project._id}/edit`}>
                        <FaRegEdit
                          size={'1.25rem'}
                          className='text-gray-200 hover:text-mint transition-all'
                        />
                      </Link>
                      <button
                        type='button'
                        onClick={() => handleDeleteProject(project._id)}
                      >
                        <FaRegTrashAlt
                          size={'1.25rem'}
                          className='text-gray-200 hover:text-mint transition-all'
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}

export default UserProjectsPage
