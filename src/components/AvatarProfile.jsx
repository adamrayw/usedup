import { Avatar } from 'flowbite-react'
import { useSelector } from 'react-redux'
function AvatarProfile() {
    const { user } = useSelector((state) => state.auth)
    console.log(user)
    return (
        <>
            {user.foto_profile ? (
                <>
                    {user.no_telp === null ? (
                        <Avatar alt="User settings" img={user.foto_profile.secure_url} rounded={true}
                            status='busy'
                            statusPosition='top-right'
                        />
                    ) : (
                        <Avatar alt="User settings" img={user.foto_profile.secure_url} rounded={true}

                        />
                    )}
                </>
            ) : (
                <>
                    {user.no_telp === null ? (
                        <Avatar alt="User settings" rounded={true}
                            status='busy'
                            statusPosition='top-right'
                        />
                    ) : (
                        <Avatar alt="User settings" rounded={true}

                        />
                    )
                    }
                </>
            )}
        </>
    )
}

export default AvatarProfile