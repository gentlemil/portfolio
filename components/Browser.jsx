import propertyPulseUI from '@/assets/images/property-pulse-ui.png'
import Image from 'next/image'
import Link from 'next/link'
import { FaSearch } from 'react-icons/fa'

const Browser = ({ url, image }) => {
  return (
    <div className='max-w-[424px] border-2 border-mint/50  hover:border-mint rounded-lg overflow-hidden'>
      <div className='h-8 flex justify-start items-center px-2 gap-4 pb-1'>
        <div className='flex'>
          <div className='w-3 h-3 rounded-full bg-red-500 mr-2'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500 mr-2'></div>
          <div className='w-3 h-3 rounded-full bg-green-500 mr-2'></div>
        </div>

        <div className='flex justify-start items-center gap-2 overflow-hidden'>
          <FaSearch className='text-mint w-3' />
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
      <Image src={image} alt='' height={0} width={0} sizes='100%' />
    </div>
  )
}

export default Browser
