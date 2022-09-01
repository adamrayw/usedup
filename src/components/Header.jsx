/* eslint-disable flowtype/require-valid-file-annotation */
import { Navbar, Button, Avatar, Alert } from "flowbite-react"
import logo from '../logo.png'
import Categories from "./Categories"
import Search from "./Search"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { FaBullhorn, FaHeart, FaSignOutAlt } from 'react-icons/fa'
import { MdSell } from 'react-icons/md'
import AvatarProfile from "./AvatarProfile"
import Dropdown from './Dropdown'

function Header() {
    const { user } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const onLogout = () => {
        dispatch(logout())
        dispatch(reset())
        navigate('/login')
    }
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-3 h-6 sm:h-9 rounded-full"
                        alt="Flowbite Logo"
                    />
                    <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        UsedUp
                    </span>
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {user ? (
                        <div className="text-left flex">
                            <div className="md:block hidden pr-4">
                                <Link to="/jual/pilih-kategori">
                                    <Button color="light">
                                        <MdSell className="mr-1 text-lg text-gray-800" />
                                        Jual
                                    </Button>
                                </Link>
                            </div>
                            <Dropdown />

                            {/* <Dropdown
                                arrowIcon={true}
                                inline={true}
                                label={<AvatarProfile />}
                            >
                                <Dropdown.Header>
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
                                    <div className="flex items-center space-x-2">
                                        {user.foto_profile ? (
                                            <Avatar alt="User settings" img={user.foto_profile.secure_url} rounded={true} />
                                        ) : (
                                            <Avatar alt="User settings" rounded={true} />
                                        )}
                                        <div>
                                            <span className="block text-sm">
                                                Halo,
                                            </span>
                                            <span className="block truncate text-sm font-medium">
                                                {user.name}
                                            </span>
                                            <Link to="/edit-profile" className="text-xs text-gray-500 underline">
                                                Edit Profile
                                            </Link>
                                        </div>
                                    </div>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    <div className="flex items-center">
                                        <FaBullhorn className="mr-2" /> Iklan Saya
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <Link to='/favorit-saya'>
                                        <div className="flex items-center">
                                            <FaHeart className="mr-2" /> Favorit Saya
                                        </div>
                                    </Link>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <div className="flex items-center" onClick={onLogout}>
                                        <FaSignOutAlt className="mr-2" /> Logout
                                    </div>
                                </Dropdown.Item>
                            </Dropdown> */}
                        </div>
                    ) : (
                        <div className="btn md:flex space-x-4 hidden">
                            <Link to="/login">
                                <Button color="dark">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/jual/pilih-kategori">
                                <Button color="light">
                                    <MdSell className="mr-1 text-lg text-gray-800" />
                                    Jual
                                </Button>
                            </Link>
                        </div>

                    )}

                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Search />
                    <div className="btn mt-4 md:hidden flex space-x-4 justify-end ">
                        {user ? (
                            <>
                                <Link to="/jual/pilih-kategori">
                                    <Button color="light">
                                        <MdSell className="mr-1 text-lg text-gray-800" />
                                        Jual
                                    </Button>
                                </Link>
                            </>
                        ) : (<>
                            <Link to="/login">
                                <Button color="dark">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/jual/pilih-kategori">
                                <Button color="light">
                                    <MdSell className="mr-1 text-lg text-gray-800" />
                                    Jual
                                </Button>
                            </Link>
                        </>)}
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <Categories />
        </>
    )
}

export default Header