import { Breadcrumb, Tabs, Carousel, Avatar, Card, Button } from 'flowbite-react'
import Stargazer from '../assets/produk.jpg'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill, BsFillTelephoneFill } from 'react-icons/bs'
import { IoLogoWhatsapp } from 'react-icons/io'
import { FaHeart, FaRegHeart } from 'react-icons/fa'

function DetailItem() {
    return (
        <>
            <div className="max-w-6xl pb-10 pt-4 mx-auto md:px-0 px-4">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item href="#">
                        Mobil Bekas
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        Dijual hyundai stargazer baru
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className='flex md:flex-row flex-col justify-between mt-6 md:space-y-0 space-y-4'>
                    <div className='text-left md:w-1/2 '>
                        <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
                            <Carousel
                                leftControl={<BsFillArrowLeftCircleFill />}
                                rightControl={<BsFillArrowRightCircleFill />}
                            >
                                <div className="flex h-full items-center justify-center  dark:text-white">
                                    <img src={Stargazer} alt="Item" />

                                </div>
                                <div className="flex h-full items-center justify-center  dark:text-white">
                                    <img src={Stargazer} alt="Item" />

                                </div>
                                <div className="flex h-full items-center justify-center  dark:text-white">
                                    <img src={Stargazer} alt="Item" />

                                </div>
                            </Carousel>
                        </div>
                        <div className="keterangan space-y-3">
                            <h1 className='font-bold text-4xl'>Dijual hyundai stargazer baru</h1>
                            <h3 className='font-bold text-blue-800 text-xl'>Rp 320.000.000</h3>
                            <Tabs.Group
                                aria-label="Tabs with underline"
                                style="underline"
                            >
                                <Tabs.Item title="Catatan Penjual" >
                                    <p>
                                        Hyundai Stargazer dirancang khusus untuk keluarga Indonesia
                                        dengan tampilan yang futuristik dan menjawab karakteristik
                                        jalanan di Indonesia, menjadikannya sebagai pusat perhatian
                                        di setiap perjalanan.
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
                            <div className='flex items-center text-left'>
                                <div>
                                    <Avatar size="lg" />
                                </div>
                                <div className='ml-4 space-y-2'>
                                    <p className='font-semibold text-lg'>Hyundai Motors Indonesia</p>
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
                            <button className='border border-gray-300 shadow-md rounded-md w-full text-center flex justify-center items-center mt-4 p-3'>
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