import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const Browser = ({ url, image }) => {
  return (
    <div className='max-w-100vw lg:max-w-[424px] w-full border-2 border-mint/50  hover:border-mint rounded-lg overflow-hidden'>
      <div className='h-8 flex justify-start items-center px-2 gap-2 pb-1'>
        <div className='flex'>
          <div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
          <div className='w-3 h-3 rounded-full bg-green-500 mr-2'></div>
        </div>

        <div className='flex justify-start items-center gap-2 overflow-hidden'>
          <div className='w-4'>
            <FaSearch className='text-mint w-4' />
          </div>
          <span className='text-mint'>
            <Link
              className='overflow-hidden whitespace-nowrap'
              href={url}
              target='_blank'
            >
              {url}
            </Link>
          </span>
        </div>
      </div>
      <div className='w-full min-h-[220px] border-t border-mint relative'>
        <Image src={image} alt='' layout='fill' objectFit='cover' />
      </div>
    </div>
  )
}

export default Browser
