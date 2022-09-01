import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import AvatarProfile from './AvatarProfile'
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { Alert } from 'flowbite-react'
import { FaBullhorn, FaHeart, FaSignOutAlt } from 'react-icons/fa'

export default function Dropdown() {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }
    return (
        <div className="">
            <Menu as="div" className="relative inline-block text-left">
                <div>
                    <Menu.Button className="inline-flex w-full justify-center rounded-md text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                        <AvatarProfile />
                    </Menu.Button>
                </div>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items static className="absolute z-20 right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-2 px-4">
                            {user.no_telp ? ('') : (
                                <div className="mb-2">
                                    <Alert
                                        color="failure"

                                    >
                                        <span className="text-xs">
                                            {' '}Lengkapi profil di edit profile
                                        </span>
                                    </Alert>
                                </div>
                            )}
                            <div className="flex items-center space-x-2 my-2">
                                {user.foto_profile ? (
                                    <img alt="User settings" src={user.foto_profile.secure_url} className='w-10 h-10 rounded-full' rounded={true} />
                                ) : (
                                    <img alt="User settings" rounded={true} />
                                )}
                                <div>
                                    <h4><span className=" text-sm">
                                        Halo,
                                    </span>
                                        <span className=" truncate text-sm font-medium">
                                            {' ' + user.name}
                                        </span>
                                    </h4>

                                    <Menu.Item>
                                        <Link to="/edit-profile" className="text-xs text-gray-500 underline">
                                            Edit Profile
                                        </Link>
                                    </Menu.Item>
                                </div>
                            </div>
                            <hr />
                            <div className='mt-2'>
                                <Menu.Item>
                                    <Link to='/'>
                                        <div
                                            className='flex items-center text-gray-600 hover:bg-gray-50 transition w-full text-left p-2'
                                        >
                                            <FaBullhorn className='mr-2' />
                                            Iklan Saya
                                        </div>
                                    </Link>
                                </Menu.Item>
                            </div>
                            <div className='mb-2'>
                                <Menu.Item>
                                    <Link to='/favorit-saya'>
                                        <div
                                            className='flex items-center text-gray-600 hover:bg-gray-50 transition w-full text-left p-2'
                                        >
                                            <FaHeart className='mr-2' />
                                            Favorit Saya
                                        </div>
                                    </Link>
                                </Menu.Item>
                            </div>
                            <hr />
                            <div className='mt-2'>
                                <Menu.Item>
                                    <div
                                        className='flex items-center text-gray-600 hover:bg-gray-50 transition w-full text-left p-2 hover:cursor-pointer'
                                        onClick={onLogout}
                                    >
                                        <FaSignOutAlt className='mr-2' />
                                        Logout
                                    </div>
                                </Menu.Item>
                            </div>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
        </div>
    )
}