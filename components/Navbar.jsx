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
              pathname === '/' ? 'border border-mint' : ''
            } text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap`}
          >
            Home
          </Link>
          <Link
            href='/about'
            className={`${
              pathname === '/about' ? 'border border-mint' : ''
            } text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap`}
          >
            about me
          </Link>
          <Link
            href='/skills'
            className={`${
              pathname === '/skills' ? 'border border-mint' : ''
            } text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap`}
          >
            skills
          </Link>
          <Link
            href='/experience'
            className={`${
              pathname === '/experience' ? 'border border-mint' : ''
            } text-white hover:border hover:border-mint rounded-full px-4 py-2 whitespace-nowrap`}
          >
            experience
          </Link>
        </div>
      </div>
    </nav>
  )
}
export default Navbar
