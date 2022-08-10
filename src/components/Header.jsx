/* eslint-disable flowtype/require-valid-file-annotation */
import { Navbar, Button, Dropdown, Avatar } from "flowbite-react"
import logo from '../logo.png'
import Categories from "./Categories"
import Search from "./Search"
import { Link } from 'react-router-dom'
// import { FaBullhorn, FaHeart, FaSignOutAlt } from 'react-icons/fa'

function Header() {
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
                    {/* <div className="text-left">
                        <Dropdown
                            arrowIcon={false}
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
                                            Adam Ray
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
                                <div className="flex items-center">
                                    <FaSignOutAlt className="mr-2" /> Logout
                                </div>
                            </Dropdown.Item>
                        </Dropdown>
                    </div> */}
                    <Navbar.Toggle />
                </div>
                <Navbar.Collapse>
                    <Search />
                    <div className="btn mt-4 md:hidden flex space-x-4 justify-end ">
                        <a href="/login">
                            <Button color="dark">
                                Login
                            </Button>
                        </a>
                        <Button color="light">
                            Jual
                        </Button>
                    </div>
                </Navbar.Collapse>
            </Navbar>
            <Categories />
        </>
    )
}

export default Header