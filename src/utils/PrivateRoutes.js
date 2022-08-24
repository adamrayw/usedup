import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { resetUpload } from '../features/form/formSlice'
import { useDispatch } from 'react-redux'

const PrivateRoutes = () => {
    const { user } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

    dispatch(resetUpload())

    return (
        user ? <Outlet /> : <Navigate to='/login' />
    )
}

export default PrivateRoutes