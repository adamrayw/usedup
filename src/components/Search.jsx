
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { HiOutlineSearch } from "react-icons/hi"
function Search() {

    return (
        <>
            <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                    <div className="flex items-center">
                        <Menu.Button className="hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                            <HiOutlineSearch className="text-xl" />
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
                        <Menu.Items static className="absolute z-20 labsolute top-14 left-1/2 transform -translate-x-1/2 -translate-y-1/2 mt-6 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <form action="">
                                <div className='flex items-center pl-2 pr-4 py-1'>
                                    <input className='border-0 focus:ring-0 text-sm' type="text" name="search" id="search" placeholder='Cari Mobil, Motor, Handphone' />
                                    <button className='font-medium'>Cari</button>
                                </div>
                            </form>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </>
    )
}

export default Search