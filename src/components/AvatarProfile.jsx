import { useSelector } from 'react-redux'
import { FaUserCircle } from 'react-icons/fa'

function AvatarProfile() {
    const { user } = useSelector((state) => state.auth)
    return (
        <>
            {user.foto_profile ? (
                <>
                    {user.no_telp === null ? (
                        <div className='relative'>
                            <div className='w-3 h-3 right-0 border border-white absolute rounded-full bg-red-500'></div>
                            <img src={user.foto_profile.secure_url} alt="profile_penjual" className='object-cover rounded-full w-10 h-10' />
                        </div>

                    ) : (
                        // <Avatar alt="User settings" img={user.foto_profile.secure_url} rounded={true}
                        <img src={user.foto_profile.secure_url} alt="profile_penjual" className='object-cover rounded-full w-10 h-10' />
                    )}
                </>
            ) : (
                <>
                    {user.no_telp === null ? (
                        <div className='relative'>
                            <div className='w-4 h-4 rounded-full text-red-500'></div>
                            <FaUserCircle className='object-cover rounded-full w-10 h-10' />
                        </div>

                    ) : (
                        <FaUserCircle className='object-cover rounded-full w-10 h-10' />
                    )
                    }
                </>
            )}
        </>
    )
}

export default AvatarProfile