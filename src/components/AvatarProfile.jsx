import { Avatar } from 'flowbite-react'
import { useSelector } from 'react-redux'
function AvatarProfile() {
    const { user } = useSelector((state) => state.auth)
    return (
        <>
            {user.no_telp === null ? (
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}
                    status='busy'
                    statusPosition='top-right'
                />
            ) : (
                <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true}

                />
            )}
        </>
    )
}

export default AvatarProfile