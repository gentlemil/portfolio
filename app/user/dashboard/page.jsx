const UserDashboardPage = () => {
  return (
    <section className='container mx-auto px-4 lg:px-20 py-8'>
      <h2 className='text-4xl font-medium tracking-wider text-gray-200 pb-20'>
        my <span className='text-mint'>dashboard</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-30/70 w-full gap-6 items-start'>
        <div className='border border-mint rounded-md p-4 min-h-40'>
          <p className='text-justify'>Sidebar</p>
        </div>
        <div className='border border-mint rounded-md p-4 min-h-40'>
          <p>On the right side will add some statistics</p>
        </div>
      </div>
    </section>
  )
}

export default UserDashboardPage
