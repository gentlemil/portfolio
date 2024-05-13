import { Ubuntu } from 'next/font/google'

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
    <html lang='en'>
      <body className={ubuntu.className}>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default MainLayout
