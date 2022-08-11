import PageNotFoundIcon from '../assets/pagenotfound.svg'
import { Link } from 'react-router-dom'
import { HiOutlineArrowNarrowLeft } from 'react-icons/hi'

function PageNotFound() {
  return (
    <>
      <div className="conatiner my-60">
        <div className="center max-w-md mx-auto flex justify-center flex-col items-center">
          <img src={PageNotFoundIcon} alt="404" />
          <Link to="/" className='flex items-center mt-6 underline'>
            <HiOutlineArrowNarrowLeft className='mr-2' /> Kembali ke Beranda
          </Link>
        </div>
      </div>
    </>
  )
}

export default PageNotFound