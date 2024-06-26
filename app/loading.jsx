'use client'
import ClipLoader from 'react-spinners/ClipLoader'

const override = {
  display: 'block',
  margin: '100px auto',
}

const LoadingPage = ({ loading }) => {
  return (
    <ClipLoader
      color='#1DB78E'
      loading={loading}
      cssOverride={override}
      size={50}
      aria-label='Loading Spinner'
    />
  )
}
export default LoadingPage
