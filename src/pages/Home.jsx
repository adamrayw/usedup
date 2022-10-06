import Banner from '../assets/banner.webp'
import CardItem from '../components/CardItem'
import { Button } from 'flowbite-react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import SkeletonCard from '../components/SkeletonCard'

export default function Home() {

    const [items, setItems] = useState([])
    const [result, setResult] = useState(8)


    useEffect(() => {
        getAllItems()
    }, [result])

    const getAllItems = async () => {
        try {
            // const response = await axios.get('https://usedup.herokuapp.com/api/home?result=' + result)
            const response = await axios.get(api + 'home?result=' + result)

            setItems(response.data.data)
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <img className='md:block hidden' src={Banner} alt="Banner" />
            <section>
                <div className="container max-w-6xl mx-auto px-4">
                    <div className="featured mt-10">
                        <div className='text-left mb-4'>
                            <h2 className='font-bold md:text-2xl text-xl text-black'>Jangan sampai keduluan!</h2>
                        </div>

                        {items.length === 0 ? (
                            <>
                                <SkeletonCard />
                            </>
                        ) : (
                            <>
                                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                                    {items.map((data, index) => {
                                        return (

                                            <CardItem key={index} data={data} />
                                        )
                                    })}
                                </div>
                            </>
                        )}

                        <div className='flex justify-center my-6'>
                            <Button color="dark" onClick={() => setResult(result + 8)}>Tampilkan lainnya</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
