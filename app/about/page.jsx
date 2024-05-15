import profileImage from '@/assets/images/profile.jpg'
import Image from 'next/image'

const AboutPage = () => {
  return (
    <section id='about' className='container px-4 md:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-12'>
        a little bit more <span className='text-mint'>about</span> me
      </h2>

      <div className='block lg:grid grid-cols-40/60 gap-4'>
        <div className='mt-8 md:mt-12 flex flex-col justify-start items-center'>
          <div className='rounded-full w-[400px] h-[400px] border-4 border-mint overflow-hidden'>
            <Image
              src={profileImage}
              alt=''
              height={0}
              width={400}
              sizes='100%'
            />
          </div>
          <h3 className='text-5xl font-medium tracking-wider text-gray-200 pt-8'>
            <span className='text-mint'>milosz</span> bukala
          </h3>
          <p className='text-2xl tracking-wider pt-2'>fullstack developer</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-8 pt-12 text-justify text-xl md:pr-16'>
          <p>
            Hello! I'm a Frontend Developer who transitioned from bartending in
            Krakow's bustling hospitality scene to tech during the pandemic.
            This shift sparked my passion for crafting high-quality digital
            solutions, enhancing user experience, and contributing to team
            success.
          </p>

          <p>
            Professionally, I have worked on diverse projects in e-learning,
            beauty, and point-of-sale systems, always striving to push the
            boundaries of technology and creativity. I thrive in environments
            that challenge me to grow and innovate.
          </p>
          <p>
            In my free time, I enjoy mountain trekking, running with my dog,
            bushcraft, and traveling. These activities not only fulfill my
            personal passions but also bring fresh perspectives to my
            professional work.
          </p>
          <p>
            I am eager to collaborate on projects that are as dynamic and
            forward-thinking as I am. Let's connect and create something
            outstanding together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
