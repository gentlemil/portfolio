import AuthProvider from '@/components/authProvider'

import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'
import Sidebar from '@/components/Sidebar'

export const metadata = {
  title: 'miloszbukaladotpl',
  description: 'User dashboard.',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <section className=' mx-auto px-4 lg:px-20 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-15/85 w-full gap-6 items-start'>
          <Sidebar />
          <main className='min-h-40'>{children}</main>
        </div>
      </section>
    </AuthProvider>
  )
}

export default MainLayout
