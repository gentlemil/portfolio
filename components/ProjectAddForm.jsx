'use client'
import addProject from '@/app/actions/addProject'
import { toast } from 'react-toastify'

const ProjectAddForm = () => {
  const handleImageChange = (e) => {
    if (e.target.files.length > 1) {
      e.target.value = ''
      toast.error('You can select only 1 image')
    }
  }

  return (
    <form action={addProject}>
      <h2 className='text-3xl text-center font-semibold mb-6 text-mint tracking-wider'>
        Add Project
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
        <label
          htmlFor='description'
          className='block text-mint font-normal mb-2'
        >
          Description
        </label>
        <textarea
          id='description'
          name='description'
          className='border rounded w-full py-2 px-3 text-black'
          rows='4'
          placeholder='Add an optional description of your property'
        ></textarea>
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
        <label className='block text-mint font-normal mb-2'>
          First Github Repository URL
        </label>
        <input
          type='text'
          id='github_frontend_url'
          name='github'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='https://github.com/frontend'
        />
      </div>
      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>
          Second Github Repository URL
        </label>
        <input
          type='text'
          id='github_backend_url'
          name='github'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='https://github.com/backend'
        />
      </div>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Tech stack</label>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2'>
          <div>
            <input
              type='checkbox'
              id='javascript'
              name='tech_stack'
              value='JavaScript'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='javascript'>
              JavaScript
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='typescript'
              name='tech_stack'
              value='TypeScript'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='typescript'>
              TypeScript
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='nodejs'
              name='tech_stack'
              value='Node.js'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='nodejs'>
              Node.js
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='angular'
              name='tech_stack'
              value='Angular'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='angular'>
              Angular
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='react'
              name='tech_stack'
              value='React'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='react'>
              React
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='nextjs'
              name='tech_stack'
              value='Next.js'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='nextjs'>
              Next.js
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='nestjs'
              name='tech_stack'
              value='NestJS'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='nestjs'>
              NestJS
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='postgresql'
              name='tech_stack'
              value='PostgreSQL'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='postgresql'>
              PostgreSQL
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='mongodb'
              name='tech_stack'
              value='MongoDB'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='mongodb'>
              MongoDB
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='tailwindcss'
              name='tech_stack'
              value='Tailwind CSS'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='tailwindcss'>
              Tailwind CSS
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='vercel'
              name='tech_stack'
              value='Vercel'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='vercel'>
              Vercel
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='google_auth'
              name='tech_stack'
              value='Google Auth'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='google_auth'>
              Google Auth
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='firebase'
              name='tech_stack'
              value='Firebase'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='amenity_balcony_patio'>
              Firebase
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='storybook'
              name='tech_stack'
              value='Storybook'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='storybook'>
              Storybook
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='cypress'
              name='tech_stack'
              value='Cypress'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='cypress'>
              Cypress
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='jest'
              name='tech_stack'
              value='Jest'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='jest'>
              Jest
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='playwright'
              name='tech_stack'
              value='Playwright'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='playwright'>
              Playwright
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='vitest'
              name='tech_stack'
              value='Vitest'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='vitest'>
              Vitest
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='mapbox_api'
              name='tech_stack'
              value='Mapbox API'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='mapbox_api'>
              Mapbox API
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='nx'
              name='tech_stack'
              value='NX'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='nx'>
              NX
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='webpack'
              name='tech_stack'
              value='Webpack'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='webpack'>
              Webpack
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='vite'
              name='tech_stack'
              value='Vite'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='vite'>
              Vite
            </label>
          </div>
          <div>
            <input
              type='checkbox'
              id='cms'
              name='tech_stack'
              value='CMS'
              className='mr-2 text-black'
            />
            <label className='text-black' htmlFor='cms'>
              CMS
            </label>
          </div>
        </div>
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
          Add Project
        </button>
      </div>
    </form>
  )
}

export default ProjectAddForm
