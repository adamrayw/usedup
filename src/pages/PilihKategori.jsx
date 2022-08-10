import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'

function PilihKategori() {
    return (
        <>
            <div className="max-w-lg mx-auto container py-10 md:px-0 px-4">
                <Card>
                    <div>
                        <h1 className='text-4xl font-bold'>Pilih Kategori</h1>
                        <small className='text-gray-400'>Pilih kategori sesuai barang yang ingin kamu jual</small>
                    </div>
                    <Link to="/jual/mobil-bekas">
                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                            Mobil Bekas
                        </div>
                    </Link>
                    <Link to="/jual?category=Mobil Bekas">
                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                            Motor Bekas
                        </div>
                    </Link>
                    <Link to="/jual?category=Mobil Bekas">
                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                            Property
                        </div>
                    </Link>
                    <Link to="/jual?category=Mobil Bekas">
                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                            Elektronik & Gadget
                        </div>
                    </Link>
                    <Link to="/jual?category=Mobil Bekas">
                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                            TV & Audio, Video
                        </div>
                    </Link>
                </Card>
            </div>
        </>
    )
}

export default PilihKategori