import Banner from '../assets/banner.png'
import CardItem from '../components/CardItem'
import { Button } from 'flowbite-react'

export default function Home() {
    return (
        <>
            <img className='md:block hidden' src={Banner} alt="Banner" />
            <section>
                <div className="container max-w-6xl mx-auto md:px-0 px-4">
                    <div className="featured mt-10">
                        <div className='text-left mb-4'>
                            <h2 className='font-bold text-4xl text-black'>Barang Baru!</h2>
                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
                            <CardItem />
                            <CardItem />
                            <CardItem />
                            <CardItem />
                        </div>
                        <div className='flex justify-center my-6'>
                            <Button color="dark">Tampilkan lainnya</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
