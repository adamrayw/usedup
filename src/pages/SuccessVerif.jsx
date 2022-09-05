import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import { useParams } from 'react-router-dom'
import { MdVerified } from 'react-icons/md'
import { Spinner } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateVerified } from '../features/auth/authSlice'

function SuccessVerif() {
    const [status, setStatus] = useState(false)

    const dispatch = useDispatch()

    useEffect(() => {
        updateIsVerified()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const { id } = useParams()

    const updateIsVerified = async () => {
        try {
            const response = await axios.post(api + '/verification?id=' + id)
            setStatus(response.data.status)
            dispatch(updateVerified())
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div className='h-96 flex flex-col items-center justify-center space-y-4'>
            {status ? (
                <>
                    <MdVerified size='8em' className='text-green-400' />
                    <h1 className='px-2 text-gray-800 md:text-2xl text-xl font-bold'>Akun kamu telah diverifikasi!</h1>
                    <Link to='/' className='text-gray-400 underline'>
                        Kembali ke Beranda
                    </Link>
                </>
            ) : (
                <Spinner color='info' size='lg' />
            )}
        </div>
    )
}

export default SuccessVerif