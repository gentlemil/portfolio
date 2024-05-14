import { Ubuntu } from 'next/font/google'

import AuthProvider from '@/components/authProvider'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

import '@/assets/styles/globals.css'

const ubuntu = Ubuntu({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
})

export const metadata = {
  title: 'Create Next App',
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
        </body>
      </html>
    </AuthProvider>
  )
}

export default MainLayout
