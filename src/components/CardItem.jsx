import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
import Produk from '../assets/produk.jpg'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'

function CardItem() {
    const [favorite, setFavorite] = useState(false)


    const onFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <>
            <div className="max-w-sm relative">
                <div className="absolute top-0 right-0 pt-4 pr-4 z-50">
                    {favorite ? (<>
                        <button className='p-2 border bg-red-400 rounded-full' onClick={onFavorite}>

                            <FaHeart className='text-white' />
                        </button>

                    </>) : (<>
                        <button className='p-2 border bg-white rounded-full' onClick={onFavorite}>
                            <FaHeart className='text-gray-400' />
                        </button>
                    </>)}

                </div>
                <Link to="/dijual-hyundai-stargazer-baru">
                    <Card
                        imgAlt="Image Item"
                        imgSrc={Produk}
                    >
                        <h5 className="md:text-xl text-sm font-semibold tracking-tight text-gray-900 text-left dark:text-white">
                            Dijual hyundai stargazer baru
                        </h5>

                        <div className="flex items-center justify-between">
                            <span className="md:text-xl text-xs text-left font-bold text-blue-800 dark:text-white">
                                Rp 320.000.000
                            </span>
                        </div>
                    </Card>
                </Link>
            </div>
        </>
    )
}

export default CardItem