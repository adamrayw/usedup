import axios from "axios"
import { useEffect, useState } from 'react'
import CardItem from "../components/CardItem"
import SkeletonCard from "../components/SkeletonCard"
import api from "../utils/api"
import { GoPackage } from 'react-icons/go'

function FavoritePage() {
    const [data, setData] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const user = JSON.parse(localStorage.getItem('user'))

    const getFavorited = async () => {
        try {
            setIsLoading(true)
            const response = await axios.get(api + 'get/favorite?id=' + user.id, {
                headers: {
                    'Authorization': `Bearer ${user.token}`
                }
            })

            setData(response.data.favorits)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getFavorited()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <section>
                <div className="container max-w-6xl mx-auto md:px-0 px-4">
                    <div className="featured my-10">
                        <div className='text-left mb-4 space-y-2'>
                            <h2 className='font-bold md:text-4xl text-xl text-black'>Favorit Saya</h2>
                            <p className="text-sm font-medium text-gray-400">Barang nya jangan kelamaan di favoritin, nanti keduluan!</p>
                        </div>
                        {isLoading ? (
                            <>
                                <SkeletonCard />
                            </>
                        ) : (
                            ''
                        )}

                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                            {data ? (
                                <>
                                    {data.map((e, index) => {
                                        return (
                                            <>
                                                <CardItem key={index} data={e.iklan} />
                                            </>
                                        )
                                    })}
                                </>
                            ) : (
                                ''
                            )}
                        </div>
                        {data.length === 0 ? (
                            <>
                                <div className="flex flex-col items-center mt-10">
                                    <GoPackage className="text-gray-800 text-6xl" />
                                    <p className="text-gray-400">Kamu belum favoritin barang apapun</p>
                                </div>
                            </>
                        ) : ''}
                    </div>
                </div>
            </section>
        </>
    )
}

export default FavoritePage