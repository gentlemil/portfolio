import {
  FaAnglesLeft,
  FaAngleLeft,
  FaAngleRight,
  FaAnglesRight,
} from 'react-icons/fa6'

const Pagination = ({ page, pageSize, totalItems, sendPageQuery }) => {
  const totalPages = Math.ceil(totalItems / pageSize)

  return (
    <section className='container mx-auto flex justify-center items-center my-8'>
      {/* first page */}
      <button
        type='button'
        className='px-2 py-1 rounded group'
        onClick={() => sendPageQuery(1)}
      >
        <FaAnglesLeft className='group-hover:text-mint' />
      </button>
      {/* previous page */}
      {page > 1 ? (
        <button
          type='button'
          className='px-2 py-1 rounded group'
          onClick={() => sendPageQuery(page - 1)}
        >
          <FaAngleLeft className='group-hover:text-mint' />
        </button>
      ) : null}
      {/* info */}
      <span className='mx-2'>
        Page {page} of {totalPages}
      </span>
      {/* next page */}
      {page < totalPages ? (
        <button
          type='button'
          onClick={() => sendPageQuery(page + 1)}
          className='px-2 py-1 rounded group'
          href={`/properties?page=${page + 1}`}
        >
          <FaAngleRight className='group-hover:text-mint' />
        </button>
      ) : null}
      {/* last page */}
      <button
        type='button'
        className='px-2 py-1 rounded group'
        onClick={() => sendPageQuery(totalPages)}
      >
        <FaAnglesRight className='group-hover:text-mint' />
      </button>
    </section>
  )
}

export default Pagination
