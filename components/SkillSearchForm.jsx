'use client'
import { useEffect, useState } from 'react'

const SkillSearchForm = ({ sendSearchQuery }) => {
  const [skill, setSkill] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      sendSearchQuery(skill)
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [skill])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendSearchQuery(skill)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-center items-center my-2'
    >
      <label htmlFor='skill' className='pr-4'>
        search:
      </label>
      <input
        id='skill'
        type='text'
        value={skill}
        onChange={(e) => setSkill(e.target.value)}
        placeholder='type skill name...'
        className='px-4 py-1 border border-mint rounded-md text-mint placeholder:text-sm placeholder:text-gray-400 placeholder:font-light placeholder:tracking-wider focus:outline-none focus:ring focus:ring-mint focus:ring-opacity-50 transition-all'
      />
    </form>
  )
}

export default SkillSearchForm
