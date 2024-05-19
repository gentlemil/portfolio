import Link from 'next/link'

const HomePage = () => {
  return (
    <div className='container md:px-16 mx-auto mt-20 px-4'>
      <h1 className='text-7xl font-semibold tracking-wide pb-20'>
        Hi there
        <span className='text-mint pr-1'>,</span> I
        <span className='text-mint'>'</span>m{' '}
        <span className='text-green-300 pr-4'>Milosz</span>
        <span>👋</span>
      </h1>

      <h4 className='text-2xl font-normal tracking-wide'>
        I am full-stack web developer based in Poland, backpacer, bushcrafter.
      </h4>
      <h4 className='text-2xl font-normal tracking-wide'>
        Let's make something <span className='text-mint'>special</span>{' '}
        together.
      </h4>

      <div className='w-full flex flex-col justify-center items-center gap-4 pt-20'>
        <Link
          href='/contact'
          className='border-2 border-mint hover:border-mint/50 text-gray-200 text-2xl font-normal tracking-wider py-2 px-6 rounded-full mx-auto focus:outline-none focus:shadow-outline flex items-center justify-center'
        >
          contact me!
        </Link>

        {/* TODO! */}
        <Link
          href='/'
          target='_blank'
          className='border-2 border-mint hover:border-mint/50 text-gray-200 text-2xl font-normal tracking-wider py-2 px-6 rounded-full mx-auto focus:outline-none focus:shadow-outline flex items-center justify-center'
        >
          get my resume
        </Link>
      </div>
    </div>
  )
}

export default HomePage
