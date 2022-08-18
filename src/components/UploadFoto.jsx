import { FaPlus } from 'react-icons/fa'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { uploadFile } from '../features/form/formSlice'

function UploadFoto() {

  const dispatch = useDispatch()
  useEffect(() => {

  }, [dispatch])


  function selectImage(e) {
    if (e.target.files && e.target.files.length > 0) {
      dispatch(uploadFile(e.target.files[0]))
    }

  }

  return (
    <div id="fileUpload" className='flex flex-wrap justify-center items-center'>
      <div>
        <label htmlFor="image">
          <div className='border border-black p-4 inline-block'>
            <FaPlus />
          </div>
        </label>
        <input className='hidden' type="file" name="image" id="image" onChange={selectImage} />
      </div>
    </div>
  )
}

export default UploadFoto