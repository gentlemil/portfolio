'use client'
import addSkill from '@/app/actions/addSkill'

const SkillAddForm = () => {
  return (
    <form action={addSkill}>
      <h2 className='text-3xl text-center font-semibold mb-6 text-mint tracking-wider'>
        Add Skill
      </h2>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Skill name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='eg. react'
          required
        />
      </div>
      {/*  */}

      <label className='block text-mint font-normal mb-2'>Skill type</label>
      <select
        id='type'
        name='type'
        className='border rounded w-full py-2 px-3 mb-2 text-black'
        required
      >
        <option value='frontend'>frontend</option>
        <option value='backend'>backend</option>
        <option value='database'>database</option>
        <option value='devops'>devops</option>
        <option value='other'>other</option>
      </select>

      <div className='flex justify-center'>
        <button
          type='submit'
          className='bg-mint hover:bg-mint/50 text-white font-normal py-2 px-4 rounded-full'
        >
          Add Skill
        </button>
      </div>
    </form>
  )
}

export default SkillAddForm
