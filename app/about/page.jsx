import Header from '@/components/Header'

const AboutPage = () => {
  return (
    <section id='about' className='container px-20 py-8'>
      <Header>A little bit more about me</Header>

      <div className='flex flex-col items-center justify-center gap-8 pt-12 text-justify text-xl md:pr-16'>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          neque minus adipisci doloribus fugiat fuga aperiam ipsum, ad dolorem
          quod rerum magnam architecto a, illum earum dignissimos excepturi
          nobis labore. Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Sint soluta distinctio ratione repudiandae molestiae dicta unde saepe
          officiis eveniet eligendi qui quasi quisquam asperiores, perferendis,
          voluptatibus quibusdam numquam, inventore doloribus?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          neque minus adipisci doloribus fugiat fuga aperiam ipsum, ad dolorem
          quod rerum magnam architecto a, illum earum dignissimos excepturi
          nobis labore.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus
          neque minus adipisci doloribus fugiat fuga aperiam ipsum, ad dolorem
          quod rerum magnam architecto a, illum earum dignissimos excepturi
          nobis labore.
        </p>
      </div>
    </section>
  )
}

export default AboutPage
