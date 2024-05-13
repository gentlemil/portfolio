import { FaUserAstronaut } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className='flex justify-end items-center gap-4 w-full pt-4 md:pt-8 pb-4 px-4 md:px-8'>
      <FaUserAstronaut className='text-mint text-5xl' />
      <i className='fa-solid fa-user-astronaut'></i>
      <h1 className='text-4xl text-mint'>miloszbukaladotpl</h1>
    </section>
  )
}

export default Hero
