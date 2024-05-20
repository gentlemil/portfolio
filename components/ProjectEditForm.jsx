import updateProject from '@/app/actions/updateProject'

const ProjectEditForm = ({ project }) => {
  const updateProjectId = updateProject.bind(null, project._id)

  return (
    <form action={updateProjectId}>
      <h2 className='text-3xl text-center font-semibold mb-6 text-mint tracking-wider'>
        Edit Project
      </h2>

      <div className='mb-4'>
        <label className='block text-mint font-normal mb-2'>Project name</label>
        <input
          type='text'
          id='name'
          name='name'
          className='border rounded w-full py-2 px-3 mb-2 text-black'
          placeholder='eg. ems'
          defaultValue={project.name}
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
          defaultValue={project.description}
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
          defaultValue={project.url}
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
          defaultValue={project.github[0]}
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
          defaultValue={project.github[1]}
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
              defaultValue='JavaScript'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('JavaScript')}
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
              defaultValue='TypeScript'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('TypeScript')}
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
              defaultValue='Node.js'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Node.js')}
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
              defaultValue='Angular'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Angular')}
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
              defaultValue='React'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('React')}
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
              defaultValue='Next.js'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Next.js')}
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
              defaultValue='NestJS'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('NestJS')}
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
              defaultValue='PostgreSQL'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('PostgreSQL')}
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
              defaultValue='MongoDB'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('MongoDB')}
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
              defaultValue='Tailwind CSS'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Tailwind CSS')}
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
              defaultValue='Vercel'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Vercel')}
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
              defaultValue='Google Auth'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Google Auth')}
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
              defaultValue='Firebase'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Firebase')}
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
              defaultValue='Storybook'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Storybook')}
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
              defaultValue='Cypress'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Cypress')}
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
              defaultValue='Jest'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Jest')}
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
              defaultValue='Playwright'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Playwright')}
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
              defaultValue='Vitest'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Vitest')}
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
              defaultValue='Mapbox API'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Mapbox API')}
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
              defaultValue='NX'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('NX')}
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
              defaultValue='Webpack'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Webpack')}
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
              defaultValue='Vite'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('Vite')}
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
              defaultValue='CMS'
              className='mr-2 text-black'
              defaultChecked={project.tech_stack.includes('CMS')}
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
        />
      </div>
      <div className='mb-4'>
        <input
          type='checkbox'
          id='status'
          name='status'
          className='mr-2 text-black'
          defaultChecked={project.status ? true : false}
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
          Update Project
        </button>
      </div>
    </form>
  )
}

export default ProjectEditForm
