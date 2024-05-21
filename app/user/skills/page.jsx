'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import deleteSkill from '@/app/actions/deleteSkill'

import Spinner from '@/components/Spinner'
import { toast } from 'react-toastify'

import { FaRegEdit, FaRegTrashAlt } from 'react-icons/fa'
import { GiConfirmed } from 'react-icons/gi'
import { RxCrossCircled } from 'react-icons/rx'
import Pagination from '@/components/Pagination'
import SkillSearchForm from '@/components/SkillSearchForm'

const UserSkillsPage = () => {
  const [skills, setSkills] = useState([])
  const [loading, setLoading] = useState(true)
  
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')
  const [totalSkills, setTotalSkills] = useState(0)

  const pageSize = 10

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await fetch(
          `/api/skills?limit=${pageSize}&skip=${
            (page - 1) * pageSize
          }&page=${page}&search=${search}`
        )

        if (res.status === 200) {
          const data = await res.json()
          setSkills(data.skills)
          setTotalSkills(data.total)
        }
      } catch (error) {
        console.error('error', error)
      } finally {
        setLoading(false)
      }
    }

    fetchSkills()
  }, [page, search])

  const handleSearchQuery = (searchQuery) => {
    setSearch(searchQuery)
  }

  const handlePageQuery = (page) => {
    setPage(page)
  }

  const handleDeleteSkill = async (id) => {
    const confirmed = window.confirm(
      'Are you sure you want to delete this skill?'
    )

    if (!confirmed) return

    setLoading(true)
    const deleteSkillId = deleteSkill.bind(null, id)
    await deleteSkillId()

    toast.success('Skill deleted successfully')

    const updatedSkills = skills.filter((skill) => skill._id !== id)

    setMessages(updatedSkills)
    setLoading(false)
  }

  return (
    <section className='container mx-auto relative'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-10 px-4'>
        skills
      </h2>

      <Link
        href='/user/skills/add'
        className='absolute top-0 right-0 text-white hover:text-mint border border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all'
      >
        add new
      </Link>

      {loading && <Spinner loading={loading} />}

      {!loading && skills.length === 0 && (
        <p className='text-center italic font-thin tracking-wider'>no data</p>
      )}

      {!loading && skills.length > 0 && (
        <div className='text-gray-200 italic tracking-wider font-thin overflow-hidden'>
          <div className='w-full flex justify-start items-center gap-4'>
            <SkillSearchForm sendSearchQuery={handleSearchQuery} />
          </div>
          <table className='table w-full overflow-scroll'>
            <thead className='border-b border-mint text-center tracking-wider'>
              <tr>
                <th className='px-2 pb-2'>Lp</th>
                <th className='px-2 pb-2'>Name</th>
                <th className='px-2 pb-2'>Type</th>
                <th className='px-2 pb-2'>Status</th>
                <th className='px-2 pb-2'>Created</th>
                <th className='px-2 pb-2'>Options</th>
              </tr>
            </thead>
            <tbody>
              {skills.map((skill, index) => (
                <tr
                  key={skill._id}
                  className='hover:bg-mint/10 text-center transition-all border-b border-mint/20'
                >
                  <td className='px-2'>{index + 1}</td>
                  <td className='px-2 '>{skill.name}</td>
                  <td className='px-2 whitespace-wrap py-1'>{skill.type}</td>
                  <td className='px-2'>
                    <div className='w-full flex justify-center items-center'>
                      {skill.status ? (
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
                  <td className='px-2 whitespace-wrap'>
                    {new Date(skill.updatedAt).toLocaleString()}
                  </td>
                  <td className='px-2'>
                    <div className='flex justify-center items-center gap-2'>
                      <Link href={`skills/${skill._id}/edit`}>
                        <FaRegEdit
                          size={'1.25rem'}
                          className='text-gray-200 hover:text-mint transition-all'
                        />
                      </Link>
                      <button
                        type='button'
                        onClick={() => handleDeleteSkill(skill._id)}
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
          <Pagination
            page={page}
            pageSize={pageSize}
            totalItems={totalSkills}
            sendPageQuery={handlePageQuery}
          />
        </div>
      )}
    </section>
  )
}

export default UserSkillsPage
