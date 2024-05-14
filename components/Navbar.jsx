'use client'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const Navbar = () => {
  const pathname = usePathname()
  return (
    <nav className='border-b border-mint/20 pb-4'>
      <div className='md:ml-6 block'>
        <div className='flex justify-start items-center gap-2 md:gap-4 px-4 md:px-16'>
          <Link
            href='/'
            className={`${
              pathname === '/' ? 'border-mint' : ''
            } border border-transparent text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${
              pathname === '/about' ? 'border-mint' : ''
            } border border-transparent text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all`}
          >
            about me
          </Link>
          <Link
            href='/skills'
            className={`${
              pathname === '/skills' ? 'border-mint' : ''
            } border border-transparent text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all`}
          >
            skills
          </Link>
          <Link
            href='/experience'
            className={`${
              pathname === '/experience' ? 'border-mint' : ''
            } border border-transparent text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all`}
          >
            experience
          </Link>
          <Link
            href='/contact'
            className={`${
              pathname === '/contact' ? 'border-mint' : ''
            } border border-transparent text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap transition-all`}
          >
            contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
