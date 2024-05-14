'use client'
import { signIn, signOut, useSession, getProviders } from 'next-auth/react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { FaGoogle, FaUserCircle } from 'react-icons/fa'

const Navbar = () => {
  const { data: session } = useSession()
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false)
  const [providers, setProviders] = useState(false)

  const pathname = usePathname()

  useEffect(() => {
    const setAuthProviders = async () => {
      const res = await getProviders()
      setProviders(res)
    }
    setAuthProviders()
  }, [])

  return (
    <nav className='border-b border-mint/20 pb-4'>
      <div className='md:ml-6 block'>
        <div className='flex justify-between items-center gap-4 px-4 md:pl-16 '>
          <div className='flex justify-start items-center gap-2 md:gap-4 overflow-scroll'>
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
          {/* right side menu (logged out) */}
          {!session && (
            <div className='flex items-center'>
              {providers &&
                Object.values(providers).map((provider, index) => (
                  <button
                    data-id='desktop-menu-item-auth'
                    onClick={() => signIn(provider.id)}
                    key={index}
                  >
                    <FaGoogle className='text-mint mr-4' />
                  </button>
                ))}
            </div>
          )}
          {/* right side menu (logged in) */}
          {session && (
            <div className='absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0'>
              {/* <!-- Profile dropdown button --> */}
              <div className='relative ml-3'>
                <div>
                  <button
                    type='button'
                    className='relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800'
                    id='user-menu-button'
                    aria-expanded='false'
                    aria-haspopup='true'
                    onClick={() =>
                      setIsProfileMenuOpen((prevState) => !prevState)
                    }
                  >
                    <span className='absolute -inset-1.5'></span>
                    <span className='sr-only'>Open user menu</span>
                    <FaUserCircle className='h-8 w-8 text-gray-400' />
                  </button>
                </div>

                {/* <!-- Profile dropdown --> */}
                {isProfileMenuOpen && (
                  <div
                    id='user-menu'
                    className='absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'
                    role='menu'
                    aria-orientation='vertical'
                    aria-labelledby='user-menu-button'
                    tabIndex='-1'
                  >
                    <Link
                      href='user/dashboard'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-0'
                      onClick={() => {
                        setIsProfileMenuOpen(false)
                      }}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href='user/messages'
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                      onClick={() => {
                        setIsProfileMenuOpen(false)
                      }}
                    >
                      Messages
                    </Link>

                    <button
                      onClick={() => {
                        setIsProfileMenuOpen(false)
                        signOut()
                      }}
                      className='block px-4 py-2 text-sm text-gray-700'
                      role='menuitem'
                      tabIndex='-1'
                      id='user-menu-item-2'
                    >
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
export default Navbar
