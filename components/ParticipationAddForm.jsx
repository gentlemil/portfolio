'use client'
import addParticipation from '@/app/actions/addParticipation'
import { toast } from 'react-toastify'

const ParticipationAddForm = () => {
  const handleImageChange = (e) => {
    if (e.target.files.length > 1) {
      e.target.value = ''
      toast.error('You can select only 1 image')
    }
  }

  return (
    <form action={addParticipation}>
      <h2 className='text-3xl text-center font-semibold mb-6 text-mint tracking-wider'>
        Add Participation
      </h2>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Project name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='eg. ems'
          required
        />
      </div>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Project URL</label>
        <input
          type='text'
          id='url'
          name='url'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='https://example.com'
          required
        />
      </div>

      <div className='mb-4'>
        <label htmlFor='images' className='block text-mint font-normal mb-2'>
          Image (Select only 1 image)
        </label>
        <input
          type='file'
          id='images'
          name='images'
          className='border rounded w-full py-2 px-3'
          accept='image/*'
          multiple
          onChange={handleImageChange}
          required
        />
      </div>

      <div className='flex justify-center'>
        <button
          type='submit'
          className='bg-mint hover:bg-mint/50 text-white font-normal py-2 px-4 rounded-full'
        >
          Add Participation
        </button>
      </div>
    </form>
  )
}

export default ParticipationAddForm
