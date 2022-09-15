import { Outlet, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { resetUpload } from '../features/form/formSlice'
import { useDispatch } from 'react-redux'

const PrivateRoutes = () => {

    return (
        <Navigate to='/maintenance' />
    )
}

export default PrivateRoutes