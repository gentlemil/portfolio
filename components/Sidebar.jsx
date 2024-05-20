'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <aside>
      <ul>
        <li
          className={`border ${
            pathname === '/user/main-page'
              ? 'border-mint text-mint rounded-lg'
              : 'border-transparent hover:border-mint text-gray-200 hover:text-mint'
          }  rounded-lg px-4 py-2 transition-all`}
        >
          <Link href='/user/main-page'>Main Page</Link>
        </li>
        <li
          className={`border ${
            pathname === '/user/about'
              ? 'border-mint text-mint r'
              : 'border-transparent hover:border-mint text-gray-200 hover:text-mint'
          } rounded-lg px-4 py-2 transition-all`}
        >
          <Link href='/user/about'>About</Link>
        </li>
        <li
          className={`border ${
            pathname === '/user/projects'
              ? 'border-mint text-mint'
              : 'border-transparent hover:border-mint text-gray-200 hover:text-mint'
          }  rounded-lg px-4 py-2 transition-all`}
        >
          <Link href='/user/projects'>Projects</Link>
        </li>
        <li
          className={`border  ${
            pathname === '/user/skills'
              ? ' border-mint text-mint '
              : 'border-transparent hover:border-mint text-gray-200 hover:text-mint'
          } rounded-lg px-4 py-2 transition-all `}
        >
          <Link href='/user/skills'>Skills</Link>
        </li>
        <li
          className={`border ${
            pathname === '/user/messages'
              ? 'border-mint text-mint '
              : 'border-transparent hover:border-mint text-gray-200 hover:text-mint'
          } rounded-lg px-4 py-2 transition-all`}
        >
          <Link href='/user/messages'>Messages</Link>
        </li>
      </ul>
    </aside>
  )
}
export default Sidebar
