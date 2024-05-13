import Link from 'next/link'

import { FaLinkedin, FaGithub, FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='py-4 mt-24'>
      <div className='container mx-auto flex flex-col'>
        <div
          id='social'
          className='flex justify-center items-center gap-4 pb-8'
        >
          <Link
            href='https://www.linkedin.com/in/miloszbukala/'
            target='_blank'
          >
            <FaLinkedin className='text-3xl text-gray-300 hover:text-mint/90 transition-colors' />
          </Link>
          <Link href='https://www.github.com/gentlemil/' target='_blank'>
            <FaGithub className='text-3xl text-gray-300  hover:text-mint/90 transition-colors' />
          </Link>
          <Link href='https://www.facebook.com/mil.wojciech/' target='_blank'>
            <FaFacebook className='text-3xl text-gray-300  hover:text-mint/90 transition-colors' />
          </Link>
          <Link href='https://www.instagram.com/gentlemil/' target='_blank'>
            <FaInstagram className='text-3xl text-gray-300  hover:text-mint/90 transition-colors' />
          </Link>
        </div>

        <p className='text-center text-smmt-2 md:mt-0'>
          &copy; {currentYear} Milosz Bukala.
        </p>
        <p className='text-center text-smmt-2 md:mt-0'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
