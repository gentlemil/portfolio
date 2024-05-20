import updateSkill from '@/app/actions/updateSkill'

const SkillEditForm = ({ skill }) => {
  const updateSkillId = updateSkill.bind(null, skill._id)

  return (
    <form action={updateSkillId}>
      <h2 className='text-3xl text-center font-semibold mb-6 text-mint tracking-wider'>
        Edit Skill
      </h2>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Skill name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='eg. ems'
          defaultValue={skill.name}
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='type' className='block text-gray-700 font-bold mb-2'>
          Skill Type
        </label>
        <select
          id='type'
          name='type'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          required
          defaultValue={skill.type}
        >
          <option defaultValue='frontend'>frontend</option>
          <option defaultValue='backend'>backend</option>
          <option defaultValue='database'>database</option>
          <option defaultValue='devops'>devops</option>
          <option defaultValue='other'>other</option>
        </select>
      </div>

      <div className='mb-4'>
        <input
          type='checkbox'
          id='status'
          name='status'
          className='mr-2 text-black'
          defaultChecked={skill.status ? true : false}
        />
        <label className='text-mint' htmlFor='status'>
          Published
        </label>
      </div>

      <div className='flex justify-center'>
        <button
          type='submit'
          className='bg-mint hover:bg-mint/50 text-white font-normal py-2 px-4 rounded-full'
        >
          Update Skill
        </button>
      </div>
    </form>
  )
}

export default SkillEditForm
