import ContactForm from '@/components/ContactForm'

const ContactPage = () => {
  return (
    <section className='container mx-auto px-4 lg:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-12'>
        contact <span className='text-mint'>me</span>
      </h2>
      <h4 className='mb-8 text-xl text-gray-200 tracking-wider'>
        If you're interested in collaborating or have any questions, please
        don't hesitate to reach out!
      </h4>
      <ContactForm />
    </section>
  )
}

export default ContactPage
