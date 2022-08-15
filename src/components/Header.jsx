/* eslint-disable flowtype/require-valid-file-annotation */
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react"
import logo from '../logo.png'
import Categories from "./Categories"
import Search from "./Search"
import { Link, useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'
import { FaBullhorn, FaHeart, FaSignOutAlt } from 'react-icons/fa'

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
                                        Jual
                                    </Button>
                                </Link>
                            </div>
                            <Dropdown
                                arrowIcon={true}
                                inline={true}
                                label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                            >
                                <Dropdown.Header>
                                    <div className="flex items-center space-x-2">
                                        <Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />
                                        <div>
                                            <span className="block text-sm">
                                                Hallo,
                                            </span>
                                            <span className="block truncate text-sm font-medium">
                                                {user.name}
                                            </span>
                                        </div>
                                    </div>
                                </Dropdown.Header>
                                <Dropdown.Item>
                                    <div className="flex items-center">
                                        <FaBullhorn className="mr-2" /> Iklan Saya
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Item>
                                    <div className="flex items-center">
                                        <FaHeart className="mr-2" /> Favorit Saya
                                    </div>
                                </Dropdown.Item>
                                <Dropdown.Divider />
                                <Dropdown.Item>
                                    <div className="flex items-center" onClick={onLogout}>
                                        <FaSignOutAlt className="mr-2" /> Logout
                                    </div>
                                </Dropdown.Item>
                            </Dropdown>
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
                                        Jual
                                    </Button>
                                </Link>
                            </>
                        ) : (<>
                            <Link href="/login">
                                <Button color="dark">
                                    Login
                                </Button>
                            </Link>
                            <Link to="/jual/pilih-kategori">
                                <Button color="light">
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