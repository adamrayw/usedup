/* eslint-disable flowtype/require-valid-file-annotation */
import { Navbar, Button } from "flowbite-react"
import logo from '../logo.png'
import Categories from "./Categories"
import Search from "./Search"
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { MdSell } from 'react-icons/md'
import Dropdown from './Dropdown'
import { MdChatBubble } from 'react-icons/md'
import { HiOutlineSearch } from "react-icons/hi"

function Header() {
    const { user } = useSelector((state) => state.auth)

    return (
        <div className="px-2 py-2 shadow-sm mb-1">
            <Navbar
                fluid={true}
                rounded={true}
            >
                <Navbar.Brand href="/">
                    <img
                        src={logo}
                        className="mr-20 h-8 sm:h-9 rounded-full"
                        alt="Flowbite Logo"
                    />
                    {/* <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
                        UsedUp
                    </span> */}
                </Navbar.Brand>
                <div className="flex md:order-2">
                    {user ? (
                        <div className="text-left flex items-center">
                            <div className="md:block hidden pr-4">
                                <Link to="/jual/pilih-kategori">
                                    <Button color="light">
                                        <MdSell className="mr-1 text-lg text-gray-800" />
                                        Jual
                                    </Button>
                                </Link>
                            </div>
                            <Link to='/'>
                                <HiOutlineSearch className="text-xl" />
                            </Link>
                            <div className="relative hover:cursor-pointer ">
                                <div className="absolute right-4 border border-white w-2.5 h-2.5 bg-blue-500 rounded-full "></div>
                                <MdChatBubble className="mx-4 text-3xl text-gray-800" />
                            </div>
                            <Dropdown />
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
                    {/* <Search /> */}
                    <Categories />

                    <div className="btn mt-4 md:hidden flex space-x-4 justify-end ">
                        {user ? (
                            <>
                                <Link to='/'>
                                    <HiOutlineSearch />
                                </Link>
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
        </div>
    )
}

export default Header