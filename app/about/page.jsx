const AboutPage = () => {
  return (
    <section id='about' className='container px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-20'>
        a little bit more <span className='text-mint'>about</span> me
      </h2>

      <div className='flex flex-col items-center justify-center gap-8 pt-12 text-justify text-xl md:pr-16'>
        <p>
          Hello! I'm a Frontend Developer who transitioned from bartending in
          Krakow's bustling hospitality scene to tech during the pandemic. This
          shift sparked my passion for crafting high-quality digital solutions,
          enhancing user experience, and contributing to team success.
        </p>

        <p>
          Professionally, I have worked on diverse projects in e-learning,
          beauty, and point-of-sale systems, always striving to push the
          boundaries of technology and creativity. I thrive in environments that
          challenge me to grow and innovate.
        </p>
        <p>
          In my free time, I enjoy mountain trekking, running with my dog,
          bushcraft, and traveling. These activities not only fulfill my
          personal passions but also bring fresh perspectives to my professional
          work.
        </p>
        <p>
          I am eager to collaborate on projects that are as dynamic and
          forward-thinking as I am. Let's connect and create something
          outstanding together!
        </p>
      </div>
    </section>
  )
}

export default AboutPage
