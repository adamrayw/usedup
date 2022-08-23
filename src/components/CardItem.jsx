import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useState } from 'react'
import { toast } from 'react-toastify'

function CardItem(props) {
    const [favorite, setFavorite] = useState(false)

    const onFavorite = () => {
        setFavorite(!favorite)
        if (favorite === false) {
            toast('Berhasil menambahkan ke favorit!', {
                icon: <FaHeart className='text-red-400' />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            toast('Menghapus dari favorit!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

    return (
        <>
            <div className="max-w-sm relative">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                    {favorite ? (<>
                        <button className='p-1.5 bg-red-400 rounded-full active:bg-red-600 transition duration-200 ' onClick={onFavorite}>

                            <FaHeart className='text-white md:text-sm text-xs' />
                        </button>

                    </>) : (<>
                        <button className='p-1.5 bg-white rounded-full active:bg-gray-200 transition duration-200' onClick={onFavorite}>
                            <FaHeart className='text-gray-400 md:text-sm text-xs' />
                        </button>
                    </>)}

                </div>
                <Link to={'/view/' + props.data.id}>
                    <div className='shadow'>
                        <img src={props.data.foto[0].url} alt="item" className='w-full md:h-44 h-24 rounded-t object-cover' />
                        <div className='md:p-4 p-3'>
                            <h2 className="md:text-2xl text-sm font-bold tracking-tight text-gray-900 text-left dark:text-white line-clamp-2">
                                {props.data.judul_iklan}
                            </h2>
                            <h4 className="md:text-lg  text-xs mt-1 text-left font-bold text-blue-600 dark:text-white">
                                Rp {Intl.NumberFormat('id-ID').format(props.data.harga)}
                            </h4>
                            <p className='text-right text-xs mt-4 text-gray-400 line-clamp-1'>{props.data.Provinsi.name}</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default CardItem