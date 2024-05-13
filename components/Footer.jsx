const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='py-4 mt-24'>
      <div className='container mx-auto flex flex-col'>
        <p className='text-center text-smmt-2 md:mt-0'>
          &copy; {currentYear} Milosz Bukala.
        </p>
        <p className='text-center text-smmt-2 md:mt-0'>All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
