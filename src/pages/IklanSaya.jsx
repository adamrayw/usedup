import { Button, Modal, Spinner, Tabs } from 'flowbite-react'
import axios from 'axios'
import api from '../utils/api'
import { useEffect, useState } from 'react'
import { FaHeart, FaEye, FaRegEdit, FaTrash } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { BiDotsVertical } from 'react-icons/bi'
import { HiOutlineExclamationCircle } from 'react-icons/hi'
import { toast } from 'react-toastify'
import { IoMdTrash } from 'react-icons/io'


function IklanSaya() {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [loadingDelete, setLoadingDelete] = useState(false)
    const [isOpenDeleteIklan, setIsOpenDeleteIklan] = useState(false)
    const [iklanId, setIklanId] = useState()


    useEffect(() => {
        getDataIklan()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const user = JSON.parse(localStorage.getItem('user'))

    const getDataIklan = async () => {
        setLoading(true)
        try {
            const response = await axios.get(api + '/iklan-saya/' + user.id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })
            setData(response.data.iklans);
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error)
        }
    }

    function isOpenDeleteIklanModal() {
        setIsOpenDeleteIklan(!isOpenDeleteIklan)
    }

    const deleteIklan = async () => {
        setLoadingDelete(true)
        try {
            const response = await axios.post(api + 'iklan/hapus', { id: iklanId })

            if (response === true) {
                toast.success("Iklan berhasil dihapus", {
                    icon: <IoMdTrash className='text-red-500' />,
                    position: "top-right",
                    autoClose: 1000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    draggable: true,
                    progress: undefined,
                })
            }
            const newData = data.filter((data) => data.id !== iklanId)
            setData(newData)
            setLoadingDelete(false)
            setIklanId("")
            isOpenDeleteIklanModal(false)

        } catch (error) {
            toast.error("Something went wrong!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })
            setLoadingDelete(false)
            setIklanId(false)
        }
    }

    return (
        <section>

            <Modal
                show={isOpenDeleteIklan}
                size="md"
                popup={true}
                onClose={isOpenDeleteIklanModal}
            >
                <Modal.Header />
                <Modal.Body>
                    <div className="text-center">
                        <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
                        <h3 className="mb-2 text-lg font-bold text-gray-500 dark:text-gray-400">
                            Yakin ingin menghapus iklan ini?
                        </h3>
                        <p className='mb-5 text-sm text-gray-400'>iklan akan terhapus secara permanen dan tidak dapat dikembalikan</p>
                        <div className="flex justify-center gap-4">
                            {loadingDelete ? (
                                <Button
                                    color="failure"
                                    onClick={deleteIklan}
                                >
                                    <Spinner
                                        size="sm"
                                        light={true}
                                    />
                                </Button>

                            ) : (
                                <Button
                                    color="failure"
                                    onClick={deleteIklan}
                                >
                                    Ya, saya yakin
                                </Button>
                            )}
                            <Button
                                color="gray"
                                onClick={isOpenDeleteIklanModal}
                            >
                                Tidak, batal
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>


            <div className="container max-w-6xl mx-auto px-4">
                <div className="featured my-10">
                    <div className='text-left mb-4 space-y-2'>
                        <h2 className='font-bold md:text-4xl text-2xl text-black'>Iklan Kamu</h2>
                        {/* <p className="text-sm font-medium text-gray-400"></p> */}
                    </div>
                    <Tabs.Group
                        aria-label="Tabs with underline"
                        // eslint-disable-next-line react/style-prop-object
                        style={'underline'}
                    >
                        <Tabs.Item
                            active={true}
                            title="Iklan Aktif">
                            <div className='space-y-4'>
                                {loading ? (
                                    <>
                                        <div className='h-16 w-full bg-gray-200 animate-pulse'></div>
                                        <div className='h-16 w-full bg-gray-200 animate-pulse'></div>
                                        <div className='h-16 w-full bg-gray-200 animate-pulse'></div>
                                        <div className='h-16 w-full bg-gray-200 animate-pulse'></div>
                                    </>
                                ) :
                                    <>
                                        {data.length < 1 ? (
                                            <>
                                                <p>Kamu belum memasang iklan</p>
                                            </>
                                        ) : ''
                                        }
                                    </>
                                }

                                {data.length < 1 ? (
                                    ''
                                ) : (
                                    <>
                                        {data.map((e, index) => {
                                            return (
                                                <div key={index} className='container border border-gray-200 px-5 py-4'>
                                                    <div className='flex justify-between items-start md:flex-row flex-col'>
                                                        <div className='flex space-x-4 '>
                                                            <img src={e.foto[0].url} className='object-cover md:w-24 w-20 h-auto' alt="iklanimage" />
                                                            <div className='text-left flex items-center justify-between'>
                                                                <div>
                                                                    <h2 className='md:text-lg text-sm font-bold tracking-tight text-gray-900 text-left dark:text-white line-clamp-2'>{e.judul_iklan}</h2>
                                                                    <div className='flex md:items-center items-start md:flex-row flex-col md:space-x-4 space-y-2 md:mt-2'>
                                                                        <p className='md:text-sm text-xs mt-1 md:w-32 text-left font-bold text-blue-600 dark:text-white'>
                                                                            Rp {Intl.NumberFormat('id-ID').format(e.harga)}
                                                                        </p>
                                                                        <div className='flex items-center space-x-4'>
                                                                            <div className='flex items-center space-x-1.5'>
                                                                                <FaHeart className='text-sm text-red-400' />
                                                                                <p className='text-xs text-gray-300 font-medium'>{e.Favorit.length}</p>
                                                                            </div>
                                                                            <div className='flex items-center space-x-1.5'>
                                                                                <FaEye className='text-sm text-gray-400' />
                                                                                <p className='text-xs text-gray-300 font-medium'>{e.dilihat}x dilihat</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>

                                                            </div>
                                                        </div>
                                                        <Menu as="div" className="relative inline-block ml-auto">
                                                            <Menu.Button className="">
                                                                <BiDotsVertical />
                                                            </Menu.Button>
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
                                                                    <div className="p-4">
                                                                        <div>
                                                                            <div className='md:space-y-2 md:mt-0 mt-3'>
                                                                                <button className='flex items-center text-xs px-2 py-2 w-full rounded-sm text-black hover:bg-gray-100 '>
                                                                                    <FaRegEdit className='md:block mr-2' />
                                                                                    Edit Iklan
                                                                                </button>
                                                                                <button className='flex items-center text-xs  px-2 py-2 w-full rounded-sm text-black hover:bg-gray-100 ' onClick={() => {
                                                                                    isOpenDeleteIklanModal()
                                                                                    setIklanId(e.id)
                                                                                }}  >
                                                                                    <FaTrash className='md:block mr-2' />
                                                                                    Hapus Iklan
                                                                                </button>
                                                                                {/* <button className='flex items-center text-xs px-2 py-2 w-full rounded-sm text-black hover:bg-gray-100 '>
                                                                                    <FiCheck className='md:block mr-2' />
                                                                                    Tandai sudah terjual
                                                                                </button> */}
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Menu.Items>
                                                            </Transition>
                                                        </Menu>


                                                    </div>

                                                </div>
                                            )
                                        })}
                                    </>
                                )}


                            </div>
                        </Tabs.Item>
                        <Tabs.Item
                            title="Iklan Nonaktif"
                        >
                            Dashboard content
                        </Tabs.Item>


                    </Tabs.Group>
                </div>
            </div>
        </section>
    )
}

export default IklanSaya