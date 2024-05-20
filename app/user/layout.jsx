import AuthProvider from '@/components/authProvider'
import Link from 'next/link'

import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

export const metadata = {
  title: 'miloszbukaladotpl',
  description: 'User dashboard.',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <section className=' mx-auto px-4 lg:px-20 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-15/85 w-full gap-6 items-start'>
          <div className='border border-mint rounded-md p-4 min-h-40'>
            <ul>
              <li className='border border-transparent hover:border-mint text-gray-200 hover:text-mint rounded-lg px-4 py-2 transition-all'>
                <Link href='/user/main-page'>Main Page</Link>
              </li>
              <li className='border border-transparent hover:border-mint text-gray-200 hover:text-mint rounded-lg px-4 py-2 transition-all'>
                <Link href='/user/about'>About</Link>
              </li>
              <li className='border border-transparent hover:border-mint text-gray-200 hover:text-mint rounded-lg px-4 py-2 transition-all'>
                <Link href='/user/projects'>Projects</Link>
              </li>
              <li className='border border-transparent hover:border-mint text-gray-200 hover:text-mint rounded-lg px-4 py-2 transition-all'>
                <Link href='/user/skills'>Skills</Link>
              </li>
              <li className='border border-transparent hover:border-mint text-gray-200 hover:text-mint rounded-lg px-4 py-2 transition-all'>
                <Link href='/user/messages'>Messages</Link>
              </li>
            </ul>
          </div>
          <main className='min-h-40'>{children}</main>
        </div>
      </section>
    </AuthProvider>
  )
}

export default MainLayout
