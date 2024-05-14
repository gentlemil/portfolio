'use client'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import { toast } from 'react-toastify'
import addMessage from '@/app/actions/addMessage'
import { FaPaperPlane } from 'react-icons/fa'

function SubmitMessageButton() {
  const status = useFormStatus()
  return (
    <button
      className='border-2 border-mint hover:border-mint/50 text-gray-200 font-normal tracking-wider py-2 px-6 rounded-full mx-auto focus:outline-none focus:shadow-outline flex items-center justify-center'
      type='submit'
    >
      <FaPaperPlane className='mr-2' />{' '}
      {status.pending ? 'Sending...' : 'Sent message'}
    </button>
  )
}

const ContactForm = () => {
  const [submitState, formAction] = useFormState(addMessage, {})

  useEffect(() => {
    if (submitState.error) toast.error(submitState.error)
    if (submitState.submitted) toast.success('Message sent successfully')
  }, [submitState])

  return (
    <div className='w-full lg:w-1/2 mx-auto'>
      <form action={formAction}>
        <div className='mb-4'>
          <label
            className='block text-gray-200 text-sm font-bold mb-2'
            htmlFor='name'
          >
            Name:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
            id='name'
            name='name'
            type='text'
            placeholder='Enter your name'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-200 text-sm font-bold mb-2'
            htmlFor='email'
          >
            Email:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
            id='email'
            name='email'
            type='email'
            placeholder='Enter your email'
            required
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-200 text-sm font-bold mb-2'
            htmlFor='phone'
          >
            Phone:
          </label>
          <input
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 leading-tight focus:outline-none focus:shadow-outline'
            id='phone'
            name='phone'
            type='text'
            placeholder='Enter your phone number (optional)'
          />
        </div>

        <div className='mb-4'>
          <label
            className='block text-gray-200 text-sm font-bold mb-2'
            htmlFor='message'
          >
            Message:
          </label>
          <textarea
            className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-500 h-44 focus:outline-none focus:shadow-outline'
            id='message'
            name='message'
            placeholder='Enter your message'
          ></textarea>
        </div>

        <SubmitMessageButton />
      </form>
    </div>
  )
}

export default ContactForm
