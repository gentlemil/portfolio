import { Ubuntu } from 'next/font/google'

import '@/assets/styles/globals.css'
import Hero from '@/components/Hero'
import Navbar from '@/components/Navbar'

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
    <html lang='en'>
      <body className={ubuntu.className}>
        <Hero />
        <Navbar />
        <main className='text-gray-200'>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
