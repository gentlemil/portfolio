import { Ubuntu } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import AuthProvider from '@/components/authProvider'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

import '@/assets/styles/globals.css'
import 'react-toastify/dist/ReactToastify.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'miloszbukaladotpl',
  description: 'Check who I am, what I do and let talk about your project.',
}

const MainLayout = ({ children }) => {
  return (
    <AuthProvider>
      <html lang='en'>
        <body className={ubuntu.className}>
          <Hero />
          <Navbar />
          <main className='text-gray-200'>{children}</main>
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
