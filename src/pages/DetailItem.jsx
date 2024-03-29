import { Breadcrumb, Tabs, Carousel, Avatar } from 'flowbite-react'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { FaRegHeart, FaMapMarkerAlt } from 'react-icons/fa'
import { BsChatLeftFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { HiHome } from 'react-icons/hi'
import axios from 'axios'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import api from '../utils/api'
import { FaGhost, FaHeart } from 'react-icons/fa'
import { MdFavorite, MdOutlineRemoveCircle, MdOutlineWarning } from 'react-icons/md'
import { toast } from 'react-toastify'
import { AiFillWarning } from 'react-icons/ai'

function DetailItem() {
    const [itemData, setItemData] = useState([])
    const [loading, setLoading] = useState(true)
    const [favoriteId, setFavoriteId] = useState('')
    const [favorited, setFavorited] = useState(false)
    const [hideNo, setHideNo] = useState(false)
    const [kategori, setKategori] = useState('')
    const userId = JSON.parse(localStorage.getItem('user')) ?? null
    const [profileId, setProfileId] = useState('')
    const [loadingChat, setLoadingChat] = useState(false)

    const params = useParams()
    const navigate = useNavigate()

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const getItemData = async () => {
        try {
            setLoading(true)
            const response = await axios.get(api + params.id)
            // eslint-disable-next-line array-callback-return
            if (userId !== null) {
                // eslint-disable-next-line array-callback-return
                response.data.data.Favorit.map(e => {
                    if (e.userId === userId.id) {
                        setFavorited(true)
                        setFavoriteId(e.id)
                    }
                })
            } else {
                setFavorited(false)
            }

            setKategori(response.data.data.Kategori.slug)
            setItemData(response.data.data)
            setProfileId(response.data.data.User.id);
            updateDilihat(response.data.data.dilihat)
            setLoading(false)
        } catch (error) {
            alert(error)
        }
    }

    const updateDilihat = async (dilihat) => {
        try {
            await axios.post(api + '/dilihat/' + params.id, {
                dilihat: Number(dilihat) + 1
            })
        } catch (error) {
            console.log(error);
        }
    }

    const tambahFavorit = async (id) => {
        if (!userId) {
            toast('Eitss! login atau register dulu yaa', {
                icon: <FaGhost className='text-red-400' />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            return
        } else {
            try {
                await axios.post(api + '/tambah/favorite', {
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
                setFavorited(true)

            } catch (error) {
                alert(error)
            }
        }

    }

    const hapusFavorit = async () => {
        try {
            await axios.delete(api + '/hapus/favorite', { data: { id: favoriteId } })
            toast('Dihapus dari favorit!', {
                icon: <MdOutlineRemoveCircle className='text-red-400' />,
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })

            setFavorited(false)

        } catch (error) {
            toast.error(error)
        }
    }

    const chatKePenjual = async () => {
        if (userId === null || userId.id === [] || userId === "" || profileId === "") {
            toast.error("Login atau register terlebih dahulu!", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })
            return
        }

        if (userId.id === profileId) {
            toast.error("Oopss! anda tidak bisa chat diri sendiri", {
                position: "top-right",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })
            return
        } else {
            try {
                setLoadingChat(true)
                const response = await axios.post(api + '/chat/create/room', {
                    userId1: userId.id,
                    userId2: profileId,
                })

                console.log(response)

                if (response.data.status === false) {
                    toast('Anda sudah memulai obrolan!', {
                        icon: <MdOutlineWarning className='text-red-400' />,
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    })
                    navigate('/chats')
                    setLoadingChat(false)
                } else {
                    navigate('/chats')
                }

                setLoadingChat(false)
            } catch (error) {
                setLoadingChat(false)
            }
        }

    }

    useEffect(() => {
        getItemData()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <>
            <div className="pb-10 pt-4 md:mx-40 mx-0 px-4">
                <Breadcrumb aria-label="Default breadcrumb example">
                    <Breadcrumb.Item>
                        <Link to='/'>
                            <HiHome />
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <Link to={itemData.Kategori ? '/category/' + itemData.Kategori.slug : '/'}>
                            <p className='text-xs'>{itemData.Kategori ? itemData.Kategori.name : ''}</p>
                        </Link>
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                        <div className='w-16'>
                            <p className='text-xs truncate'>{itemData.judul_iklan}</p>
                        </div>
                    </Breadcrumb.Item>
                </Breadcrumb>
                <div className='flex flex-col md:flex-col sm:flex-row lg:flex-row xl:flex-row justify-between md:space-y-0 space-y-4'>
                    <div className='text-left md:w-3/5'>
                        <div className="h-56 w-full sm:h-64 xl:h-80 2xl:h-96 my-2 2xl:my-4">
                            {itemData.foto ? (
                                <Carousel
                                    leftControl={<>
                                        {itemData.foto.length === 1 ? false : (<BsFillArrowLeftCircleFill className='text-white' />)}</>
                                    }
                                    rightControl={<>
                                        {itemData.foto.length === 1 ? false : (<BsFillArrowRightCircleFill className='text-white' />)}</>
                                    }
                                    indicators={false}
                                >

                                    {itemData.foto.map(e => {
                                        return (
                                            <div className='px-8 bg-black h-full'>
                                                <img key={e.asset_id} src={e.url} alt="dwa" className='max-w-full h-56 sm:h-64 xl:h-80 2xl:h-96 object-contain mx-auto' />
                                            </div>
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
                        <div className="keterangan space-y-3 ">
                            {loading ? (

                                <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 md:flex md:items-center">

                                    <div className="w-full">
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-24 mb-4"></div>
                                        <div className="h-4 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-2.5"></div>

                                    </div>
                                </div>
                            ) : (
                                <>
                                    <p className='text-sm font-medium w-fit flex items-center text-gray-400 bg-white shadow p-2'><FaMapMarkerAlt className='mr-2' />{itemData.Provinsi ? itemData.Provinsi.name : ''}</p>
                                    <h1 className='font-bold md:text-4xl text-2xl'>{itemData.judul_iklan}</h1>
                                    <h3 className='font-bold text-blue-600 text-xl'> Rp {Intl.NumberFormat('id-ID').format(itemData.harga)}</h3>
                                </>
                            )}
                            <Tabs.Group
                                aria-label="Tabs with underline"
                                // eslint-disable-next-line react/style-prop-object
                                style='underline'
                            >
                                <Tabs.Item title="Catatan Penjual" >
                                    <p className='whitespace-pre-line'>
                                        {itemData.deskripsi}
                                    </p>
                                </Tabs.Item>
                                <Tabs.Item title="Spesifikasi">
                                    {kategori === 'mobil-bekas' ? (
                                        <>
                                            <div className='text-center grid grid-cols-2 pb-2 md:justify-between '>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col md:space-y-0 space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/42/000000/price-tag--v1.png" alt='brand' />
                                                    <p className='text-xs text-gray-800 font-medium truncate'>{itemData.merk}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/48/000000/external-calendar-interface-kiranshastry-lineal-kiranshastry-1.png" alt='year' />
                                                    <p className='text-xs text-gray-800 font-medium'>{itemData.tahun}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/42/000000/speedometer.png" alt='speedometre' />
                                                    <p className='text-xs text-gray-800 font-medium'>{Intl.NumberFormat('id-ID').format(itemData.jarak_tempuh)} (km)</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-outline-lafs/42/000000/external-Gas-nft-and-gamefi-outline-lafs.png" alt='gas' />
                                                    <p className='text-xs text-gray-800 font-medium'>{itemData.tipe_bahan_bakar}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/42/000000/external-engine-cars-components-those-icons-lineal-those-icons.png" alt='engine' />
                                                    <p className='text-xs text-gray-800 font-medium'>{Intl.NumberFormat('id-ID').format(itemData.kapasitas_mesin)}cc</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : ''}
                                    {kategori === 'property' ? (
                                        <>
                                            <div className='text-center grid grid-cols-2 pb-2 gap-x-4 md:justify-between '>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col md:space-y-0 space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Fasilitas</h2>
                                                    <p className='text-sm text-gray-500 font-medium truncate'>{itemData.fasilitas}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Kamar Tidur</h2>
                                                    <p className='text-sm text-gray-500 font-medium'>{itemData.kamar_tidur}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Luas Bangunan</h2>
                                                    <p className='text-sm text-gray-500 font-medium'>{itemData.l_bangunan}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Luas Tanah</h2>
                                                    <p className='text-sm text-gray-500 font-medium'>{itemData.l_tanah}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Lantai</h2>
                                                    <p className='text-sm text-gray-500 font-medium'>{itemData.lantai}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm border-b flex items-center flex-col space-y-1 justify-around'>
                                                    <h2 className='font-bold'>Sertifikasi</h2>
                                                    <p className='text-sm text-gray-500 font-medium'>{itemData.sertifikasi}</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : ''}
                                    {kategori === 'motor-bekas' ? (
                                        <>
                                            <div className='text-center grid grid-cols-2 pb-2 md:justify-between '>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col md:space-y-0 space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/42/000000/price-tag--v1.png" alt='brand' />
                                                    <p className='text-xs text-gray-800 font-medium truncate'>{itemData.merk}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-kiranshastry-lineal-kiranshastry/48/000000/external-calendar-interface-kiranshastry-lineal-kiranshastry-1.png" alt='year' />
                                                    <p className='text-xs text-gray-800 font-medium'>{itemData.tahun}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/42/000000/speedometer.png" alt='speedometre' />
                                                    <p className='text-xs text-gray-800 font-medium'>{Intl.NumberFormat('id-ID').format(itemData.jarak_tempuh)} (km)</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-outline-lafs/42/000000/external-Gas-nft-and-gamefi-outline-lafs.png" alt='gas' />
                                                    <p className='text-xs text-gray-800 font-medium'>{itemData.tipe_bahan_bakar}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/external-those-icons-lineal-those-icons/42/000000/external-engine-cars-components-those-icons-lineal-those-icons.png" alt='engine' />
                                                    <p className='text-xs text-gray-800 font-medium'>{Intl.NumberFormat('id-ID').format(itemData.kapasitas_mesin)}cc</p>
                                                </div>
                                            </div>
                                        </>
                                    ) : ''}
                                    {kategori === 'elektronik-gadget' ? (
                                        <>
                                            <div className='text-center grid grid-cols-2 pb-2 md:justify-between '>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col md:space-y-0 space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/42/000000/price-tag--v1.png" alt='brand' />
                                                    <p className='text-xs text-gray-800 font-medium truncate'>{itemData.merk}</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/48/null/storage--v1.png" alt='storage' />
                                                    <p className='text-xs text-gray-800 font-medium'>{itemData.penyimpanan} GB</p>
                                                </div>
                                                <div className='w-18 p-4 shadow-sm flex items-center md:flex-row flex-col space-y-1 justify-between'>
                                                    <img src="https://img.icons8.com/ios/50/null/smartphone-ram.png" alt='ram' />
                                                    <p className='text-xs text-gray-800 font-medium'>{Intl.NumberFormat('id-ID').format(itemData.ram)} GB</p>
                                                </div>

                                            </div>
                                        </>
                                    ) : ''}

                                </Tabs.Item>

                            </Tabs.Group>
                        </div>
                    </div>
                    <div className='profil-penjual'>
                        <div className='border border-gray-200 rounded shadow-sm px-7 py-5'>
                            <div className='flex items-start justify-start text-left w-full md:w-64'>
                                <div>
                                    {itemData.User ? (
                                        <>
                                            {itemData.User.foto_profile ? (
                                                <img src={itemData.User.foto_profile.secure_url} alt="profile_penjual" className='object-cover rounded-md w-20 h-20' />
                                                // <Avatar img={itemData.User.foto_profile.secure_url} size="lg" />
                                            ) : (
                                                <Avatar size={'lg'} />
                                            )}
                                        </>
                                    ) : (
                                        <Avatar size={'lg'} />
                                    )}
                                </div>
                                <div className='ml-4 space-y-2'>
                                    {loading ? (
                                        <div role="status" className="max-w-sm animate-pulse">
                                            <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                                        </div>
                                    ) : (
                                        <div className='flex items-center'>
                                            <p className='font-bold text-lg text-ellipsis'>{itemData.User ? itemData.User.name : 'Penjual'}</p>
                                            {itemData.User ? (
                                                <>
                                                    {itemData.User.isVerified ? (
                                                        <p className='flex items-center rounded font-medium p-2 text-xs'><GoVerified className='text-blue-600' /></p>
                                                    ) : (
                                                        ''
                                                    )}
                                                </>
                                            ) : ''}
                                        </div>

                                    )}

                                    <Link to={'/profile/' + profileId} className='text-blue-500 underline text-sm'>
                                        Lihat Profil
                                    </Link>

                                    {/*<div>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <Button size={'sm'}>
                                                <BsFillTelephoneFill className="mr-2 h-5 w-5" />
                                                Kontak
                                            </Button>
                                             <Button color="success">
                                                <IoLogoWhatsapp className="mr-2 h-5 w-5" />
                                                Whatsapp
                                            </Button> 
                                        </div>
                                    </div>*/}
                                </div>

                            </div>
                            {itemData.User ? (
                                <>
                                    {itemData.User.isVerified ? (
                                        ''
                                    ) : (
                                        <p className='flex items-center rounded w-fit font-medium bg-red-50 text-red-400 p-2 text-xs mt-6'><AiFillWarning className='mr-2' /> Hati - hati dengan penjual yang belum terverifikasi</p>
                                    )}
                                </>
                            ) : ''}
                        </div>
                        <div className="border border-gray-200 rounded shadow-sm px-7 py-4 mt-4">
                            <div className='text-left'>
                                <h1 className='text-lg font-bold'>Kontak Penjual</h1>
                                {hideNo ? (
                                    <p className='mt-1'>{itemData.User.no_telp}</p>

                                ) : (
                                    <p className='mt-1'>*************</p>
                                )}
                                <button className='text-xs underline text-blue-600 active:text-blue-800' onClick={() => setHideNo(!hideNo)}>
                                    {hideNo ? 'Sembunyikan' : 'Tampilkan'}
                                </button>
                            </div>
                        </div>
                        <div>
                            {favorited ? (
                                <button
                                    className='border border-red-300 bg-red-400 text-white active:bg-red-200 transition shadow-sm rounded-md w-full text-center flex justify-center items-center mt-4 p-3'
                                    onClick={() => hapusFavorit(itemData.id)}
                                >
                                    <MdFavorite className='mr-2' />
                                    Hapus dari Favorit
                                </button>
                            ) : (

                                <button
                                    className='border border-gray-200 text-gray-400 active:bg-gray-100 transition shadow-sm rounded-md w-full text-center flex justify-center items-center mt-4 p-3'
                                    onClick={() => tambahFavorit(itemData.id)}
                                >
                                    <FaRegHeart className='mr-2' />
                                    Tambah ke Favorit
                                </button>
                            )}
                            {loadingChat ? (
                                <button
                                    className='border border-gray-300 text-blue-500 bg-white font-bold hover:cursor-not-allowed transition shadow-sm rounded-md w-full text-center flex justify-center items-center mt-4 p-3'
                                >
                                    Mohon tunggu...
                                </button>

                            ) : (
                                <button
                                    className='border border-gray-300 text-white bg-blue-500 active:bg-blue-300 transition shadow-sm rounded-md w-full text-center flex justify-center items-center mt-4 p-3'
                                    onClick={() => chatKePenjual()}
                                >
                                    <BsChatLeftFill className='mr-2' />
                                    Chat ke penjual
                                </button>
                            )}
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default DetailItem