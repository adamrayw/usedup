/* eslint-disable react/style-prop-object */
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { MdOutlineRemoveCircle } from 'react-icons/md'
import { toast } from 'react-toastify'
import { Tooltip, Spinner } from 'flowbite-react'
import api from '../utils/api'
import axios from 'axios'

function CardItem(props) {
    const [favorite, setFavorite] = useState(false)
    const [favoriteId, setFavoriteId] = useState('')
    const [favoriteLoading, setFavoriteLoading] = useState(false)
    const userId = JSON.parse(localStorage.getItem('user'))

    useEffect(() => {
        // check userid in localstorage and userId from props
        // eslint-disable-next-line array-callback-return
        props.data.Favorit.map((e) => {
            if (e.userId === userId.id) {
                setFavorite(true)
                setFavoriteId(e.id)
            } else {
                setFavorite(false)
                setFavoriteId('')
            }
        })

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const tambahFavorit = async (id) => {
        try {
            setFavoriteLoading(true)
            const response = await axios.post(api + '/tambah/favorite', {
                userId: userId.id,
                iklanId: id
            })

            toast('Berhasil menambahkan ke favorit!', {
                icon: <FaHeart className='text-red-400' />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            setFavorite(true)
            setFavoriteId(response.data.message.id)
            setFavoriteLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const hapusFavorit = async () => {
        try {
            setFavoriteLoading(true)
            await axios.delete(api + '/hapus/favorite', { data: { id: favoriteId } })
            toast('Menghapus dari favorit!', {
                icon: <MdOutlineRemoveCircle className='text-red-400' />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })

            setFavorite(false)
            setFavoriteId('')
            setFavoriteLoading(false)
        } catch (error) {
            toast.error(error)
        }
    }

    return (
        <>
            <div className="max-w-sm relative">
                <div className="absolute top-0 right-0 pt-4 pr-4">
                    {favoriteLoading ? (
                        <Spinner
                            aria-label="Extra small spinner example"
                            size="xs"
                        />
                    ) : (
                        <>
                            {favorite ? (
                                <>
                                    <Tooltip
                                        content="Hapus dari favorit"
                                        animation="duration-300"
                                        style='light'
                                    >
                                        <button className='p-1.5 bg-red-400 rounded-full active:bg-red-600 transition duration-200' onClick={() => hapusFavorit(favoriteId)}>
                                            <FaHeart className='text-white md:text-sm text-xs' />
                                        </button>
                                    </Tooltip>

                                </>) : (<>
                                    <Tooltip
                                        content="Tambah ke favorit"
                                        animation="duration-300"
                                        style='light'
                                    >
                                        <button className='p-1.5 shadow bg-white rounded-full active:bg-gray-200 transition duration-200' onClick={() => tambahFavorit(props.data.id)}>
                                            <FaHeart className='text-gray-400 md:text-sm text-xs' />
                                        </button>
                                    </Tooltip>

                                </>)}
                        </>
                    )}

                </div>
                <Link to={'/view/' + props.data.id}>
                    <div className='shadow'>
                        <img src={props.data.foto[0].url} alt="item" className='w-full md:h-44 h-24 rounded-t object-cover' />
                        <div className='md:p-4 p-3'>
                            <h2 className="md:text-xl text-sm font-bold tracking-tight text-gray-900 text-left dark:text-white line-clamp-2">
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