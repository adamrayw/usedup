import { Breadcrumb, Tabs, Carousel, Avatar, Card, Button } from 'flowbite-react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillTelephoneFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaRegHeart } from 'react-icons/fa'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

function DetailItem() {
    const [itemData, setItemData] = useState([])
    const [loading, setLoading] = useState(false)

    const params = useParams()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getItemData = async () => {
        try {
            setLoading(true)
            const response = await axios.get('https://usedup.herokuapp.com/api/' + params.id)

            setItemData(response.data)
            setLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getItemData()
    }, [])
    return (
        <>
            <div className="max-w-6xl pb-10 pt-4 mx-auto md:px-0 px-4">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="#">
                        Mobil Bekas
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        {itemData.judul_iklan}
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className='flex md:flex-row flex-col justify-between mt-4 md:space-y-0 space-y-4'>
                    <div className='text-left md:w-1/2'>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            {itemData.foto ? (
                                <Carousel
                                    leftControl={<>
                                        {itemData.foto.foto.length === 1 ? false : (<BsFillArrowLeftCircleFill />)}</>
                                    }
                                    rightControl={<>
                                        {itemData.foto.foto.length === 1 ? false : (<BsFillArrowRightCircleFill />)}</>
                                    }
                                    indicators={false}
                                >

                                    {itemData.foto.foto.map(e => {
                                        return (

                                            <img src={e.url} alt="dwa" className='w-full bg-cover' />
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
                        <div className="keterangan space-y-3 mt-6">
                            <h1 className='font-bold text-4xl'>{itemData.judul_iklan}</h1>
                            <h3 className='font-bold text-blue-800 text-xl'> Rp {Intl.NumberFormat('id-ID').format(itemData.harga)}</h3>
                            <Tabs.Group
                                aria-label="Tabs with underline"
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
                            <div className='flex items-start justify-start text-left'>
                                <div>
                                    <Avatar size="lg" />
                                </div>
                                <div className='ml-4 space-y-2'>
                                    {loading ? (
                                        <div role="status" class="max-w-sm animate-pulse">
                                            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        </div>
                                    ) : (

                                        <p className='font-semibold text-lg'>{itemData.User ? itemData.User.name : 'Penjual'}</p>
                                    )}
                                    <p className='inline-block font-semibold text-xs bg-gray-100 p-2'>Jakarta Barat</p>
                                </div>
                            </div>
                            <div>
                                <div className="flex flex-wrap items-center gap-2">
                                    <Button>
                                        <BsFillTelephoneFill className="mr-2 h-5 w-5" />
                                        Kontak
                                    </Button>
                                    <Button color="success">
                                        <IoLogoWhatsapp className="mr-2 h-5 w-5" />
                                        Whatsapp
                                    </Button>
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