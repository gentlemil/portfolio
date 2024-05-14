import Footer from '@/components/Footer'

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
        I am full-stack web developer based in Cracow, PL, backpacer,
        bushcrafter.
      </h4>
      <h4 className='text-2xl font-normal tracking-wide'>
        Let's make something <span className='text-mint'>special</span>{' '}
        together.
      </h4>

      <div className='w-full flex justify-center items-center pt-20'>
        <button className='border text-xl'>Contact me!</button>
      </div>

      <div className='pt-40'>
        <Footer />
      </div>
    </div>
  )
}

export default HomePage
