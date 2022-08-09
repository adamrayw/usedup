/* eslint-disable flowtype/require-valid-file-annotation */
import { Navbar, Button } from "flowbite-react"
import logo from '../logo.png'
import Categories from "./Categories"
import Search from "./Search"
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <Navbar
                fluid={true}
                rounded={true}
                className="shadow-lg"
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
                        <Button color="light">
                            Jual
                        </Button>
                    </div>
                    {/* <Dropdown
                        arrowIcon={false}
                        inline={true}
                        label={<Avatar alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>*/}
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