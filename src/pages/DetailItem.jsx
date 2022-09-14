import { Breadcrumb, Tabs, Carousel, Avatar, Card, Button } from 'flowbite-react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillTelephoneFill } from 'react-icons/bs'
import { FaRegHeart, FaMapMarkerAlt, FaTimesCircle } from 'react-icons/fa'
import { GoVerified } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../utils/api'

function DetailItem() {
    const [itemData, setItemData] = useState([])
    const [loading, setLoading] = useState(true)

    const params = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getItemData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(api + params.id)

            setItemData(response.data)
            updateDilihat(response.data.dilihat)
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const updateDilihat = async (dilihat) => {
        try {
            await axios.post(api + '/dilihat/' + params.id, {
                dilihat: Number(dilihat) + 1
            })
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getItemData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="max-w-6xl pb-10 pt-4 mx-auto md:px-0 px-4">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item>
                        <Link to='/'>
                            <HiHome />
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={itemData.Kategori ? '/' + itemData.Kategori.slug : '/'}>
                            <p className='text-xs'>{itemData.Kategori ? itemData.Kategori.name : ''}</p>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <p className='text-xs'>{itemData.judul_iklan}</p>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className='flex md:flex-row flex-col justify-between md:space-y-0 space-y-4'>
                    <div className='text-left md:w-3/5'>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 my-2 2xl:my-4">
                            {itemData.foto ? (
                                <Carousel
                                    leftControl={<>
                                        {itemData.foto.length === 1 ? false : (<BsFillArrowLeftCircleFill className='text-white' />)}</>
                                    }
                                    rightControl={<>
                                        {itemData.foto.length === 1 ? false : (<BsFillArrowRightCircleFill className='text-white' />)}</>
                                    }
                                    indicators={false}
                                >

                                    {itemData.foto.map(e => {
                                        return (
                                            <img key={e.asset_id} src={e.url} alt="dwa" className='rounded object-fill' />
                                        )

                                    })}


                                </Carousel>
                            ) : (
                                <Carousel
                                    leftControl={<BsFillArrowLeftCircleFill />}
                                    rightControl={<BsFillArrowRightCircleFill />}
                                >
                                    <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                                        <svg className="w-12 h-48 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                    </div>

                                </Carousel>
                            )}

                        </div>
                        <div className="keterangan space-y-3 ">
                            {loading ? (

                                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">

                                    <div className="w-full">
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
                                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>

                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className='text-sm font-medium w-fit flex items-center text-gray-400 bg-white shadow p-2'><FaMapMarkerAlt className='mr-2' />{itemData.Provinsi ? itemData.Provinsi.name : ''}</p>
                                    <h1 className='font-bold text-4xl'>{itemData.judul_iklan}</h1>
                                    <h3 className='font-bold text-blue-600 text-xl'> Rp {Intl.NumberFormat('id-ID').format(itemData.harga)}</h3>
                                </>
                            )}
                            <Tabs.Group
                                aria-label="Tabs with underline"
                                // eslint-disable-next-line react/style-prop-object
                                style='underline'
                            >
                                <Tabs.Item title="Catatan Penjual" >
                                    <p className='whitespace-pre-line'>
                                        {itemData.deskripsi}
                                    </p>
                                </Tabs.Item>
                                <Tabs.Item title="Spesifikasi">
                                    Spesifikasi content
                                </Tabs.Item>

                            </Tabs.Group>
                        </div>
                    </div>
                    <div className='profil-penjual'>
                        <Card>
                            {itemData.User ? (
                                <>
                                    {itemData.User.isVerified ? (
                                        ''
                                    ) : (
                                        <p className='flex items-center rounded w-fit font-medium bg-red-50 p-2 text-xs'>Penjual belum terverifikasi<FaTimesCircle className='ml-2 text-red-600' /></p>
                                    )}
                                </>
                            ) : ''}
                            <div className='flex items-center justify-start text-left'>
                                <div>
                                    {itemData.User ? (
                                        <>
                                            {itemData.User.foto_profile ? (
                                                <img src={itemData.User.foto_profile.secure_url} alt="profile_penjual" className='object-cover rounded-md w-20 h-20' />
                                                // <Avatar img={itemData.User.foto_profile.secure_url} size="lg" />
                                            ) : (
                                                <Avatar size={'lg'} />
                                            )}
                                        </>
                                    ) : (
                                        <Avatar size={'lg'} />
                                    )}
                                </div>
                                <div className='ml-4 space-y-2'>
                                    {loading ? (
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center'>
                                            <p className='font-bold text-lg'>{itemData.User ? itemData.User.name : 'Penjual'}</p>
                                            {itemData.User ? (
                                                <>
                                                    {itemData.User.isVerified ? (
                                                        <p className='flex items-center rounded font-medium p-2 text-xs'><GoVerified className='text-blue-600' /></p>
                                                    ) : (
                                                        ''
                                                    )}
                                                </>
                                            ) : ''}
                                        </div>

                                    )}


                                    <Link to='/' className='text-blue-500 underline text-sm'>
                                        Lihat Profil
                                    </Link>
                                    <div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Button size={'sm'}>
                                                <BsFillTelephoneFill className="mr-2 h-5 w-5" />
                                                Kontak
                                            </Button>
                                            {/* <Button color="success">
                                                <IoLogoWhatsapp className="mr-2 h-5 w-5" />
                                                Whatsapp
                                            </Button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Card>
                        <div>
                            <button className='border border-gray-300 text-gray-400 hover:bg-gray-50 transition shadow-md rounded-md w-full text-center flex justify-center items-center mt-4 p-3'>
                                <FaRegHeart className='mr-2' />
                                Tambah ke Favorit
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DetailItem