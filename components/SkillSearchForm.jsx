'use client'
import { useEffect, useState } from 'react'

const SkillSearchForm = ({ sendSearchQuery, sendTypeQuery }) => {
  const [skill, setSkill] = useState('')
  const [type, setType] = useState('')

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      sendSearchQuery(skill)
      sendTypeQuery(type)
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [skill, type])

  const handleSubmit = (e) => {
    e.preventDefault()
    sendSearchQuery(skill)
    if (type !== '') sendTypeQuery(type)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='w-full flex justify-start items-center gap-2 my-2'
    >
      <label htmlFor='skill' className='pr-2'>
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
      <label className='pr-2'>type: </label>
      <select
        id='type'
        name='type'
        className='px-4 py-[7px] border border-mint rounded-md text-sm text-gray-400 font-light tracking-wider focus:outline-none focus:ring focus:ring-mint focus:ring-opacity-50 transition-all'
        onChange={(e) => setType(e.target.value)}
      >
        <option value=''>choose type</option>
        <option value='frontend'>frontend</option>
        <option value='backend'>backend</option>
        <option value='database'>database</option>
        <option value='devops'>devops</option>
        <option value='other'>other</option>
      </select>
    </form>
  )
}

export default SkillSearchForm
