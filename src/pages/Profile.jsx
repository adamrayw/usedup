import { IoShareSocial } from 'react-icons/io5'
import { MdOutlineReportProblem } from 'react-icons/md'
import { useEffect, useState } from 'react'
import axios from 'axios'
import api from '../utils/api'
import { useParams } from 'react-router-dom'
import SkeletonCard from '../components/SkeletonCard'
import CardItem from '../components/CardItem'
import { FaUserCircle } from 'react-icons/fa'

function Profile() {
    const [profile, setProfile] = useState([])
    const [iklans, setIklans] = useState([])
    const [isDataNull, setIsDataNull] = useState()

    const params = useParams()

    useEffect(() => {
        getProfileData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const getProfileData = async () => {
        try {
            const dataProfile = await axios.get(api + 'profile/' + params.id)

            if (dataProfile.data.data === null) {
                setIsDataNull(true)
            } else {
                setIsDataNull(false)
                setIklans(dataProfile.data.data.iklans)
                setProfile(dataProfile.data.data)
                console.log(dataProfile);
            }
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div className="max-w-6xl pb-10 pt-4 mx-auto px-4 space-y-4">
            {isDataNull ? (
                <div>
                    <h1 className='text-2xl font-medium'>Oopss, User Tidak Ditemukan</h1>
                </div>
            ) :
                (
                    <>
                        <div className="bg-white shadow w-full mt-4 p-10">
                            <div className="flex md:flex-row flex-col justify-center md:justify-start md:items-start items-center md:space-x-6 md:space-y-0 space-y-2">
                                {profile.foto_profile ? (
                                    <>
                                        <img src={profile.foto_profile.url} alt="profile-img" className='object-cover rounded-xl w-32 h-32' />
                                    </>
                                ) : (
                                    <>
                                        <FaUserCircle className='text-gray-200 rounded-full w-32 h-32' />
                                    </>
                                )}
                                <div className='flex flex-col md:items-start justify-between ml-0'>
                                    <div className='text-center md:text-left md:mb-2 mb-4 space-y-2'>
                                        <h1 className="font-bold md:text-4xl text-xl text-black">{profile.name}</h1>
                                        <p className='text-gray-400'>{profile.tentang_saya}</p>
                                    </div>
                                    <div className="flex items-center space-x-6">
                                        <div>
                                            <button className='text-xs flex items-center bg-gray-50 text-gray-400 py-2 px-4 rounded hover:bg-gray-100 active:bg-gray-200 active:text-black transition'>
                                                <IoShareSocial className='mr-2 text-blue-500' />
                                                Bagikan Profil
                                            </button>
                                        </div>
                                        <div>
                                            <button className='text-xs flex items-center bg-gray-50 text-gray-400 py-2 px-4 rounded hover:bg-gray-100 active:bg-gray-200 active:text-black transition'>
                                                <MdOutlineReportProblem className='mr-2 text-red-500' />
                                                Laporkan Profil
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='text-left'>
                            <h2 className='font-medium mb-3'>Ada <span className='text-blue-600'>{iklans.length}</span> item yang dijual sama <span className='text-blue-600'>{profile.name}</span></h2>
                            <div>
                                {iklans.length === 0 ? (
                                    <>
                                        <SkeletonCard />
                                    </>
                                ) : (
                                    <>
                                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                                            {iklans.map((data, index) => {
                                                return (

                                                    <CardItem key={index} data={data} />
                                                )
                                            })}
                                        </div>
                                    </>
                                )}
                            </div>
                        </div>
                    </>
                )}

        </div>
    )
}

export default Profile