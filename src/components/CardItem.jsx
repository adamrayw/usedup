import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'

function CardItem(props) {
    const [favorite, setFavorite] = useState(false)

    const onFavorite = () => {
        setFavorite(!favorite)
    }

    return (
        <>
            <div className="max-w-sm relative">
                <div className="absolute top-0 right-0 pt-4 pr-4">
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
                <Link to={'/view/' + props.data.id}>
                    <div className='shadow'>
                        <img src={props.data.foto.foto[0].url} alt="item" className='w-full md:h-44 h-24 rounded-t bg-auto' />
                        <div className='md:p-4 p-3'>
                            <h2 className="md:text-2xl text-sm font-bold tracking-tight text-gray-900 text-left dark:text-white line-clamp-2">
                                {props.data.judul_iklan}
                            </h2>
                            <h4 className="md:text-lg  text-xs mt-1 text-left font-bold text-blue-600 dark:text-white">
                                Rp {Intl.NumberFormat('id-ID').format(props.data.harga)}
                            </h4>
                            <p className='text-right text-xs mt-4 text-gray-400'>{props.data.Provinsi.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem