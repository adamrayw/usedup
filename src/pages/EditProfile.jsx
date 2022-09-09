import { TextInput, Label, Textarea, Button, Spinner } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { useState, useEffect } from 'react'
import axios from 'axios'
import api from '../utils/api'
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'
import { FaCheckCircle, FaUserCircle } from 'react-icons/fa'

function EditProfifle() {
    const { user, isVerified } = useSelector((state) => state.auth)

    const [imageUpload, setImageUpload] = useState([])
    // eslint-disable-next-line no-unused-vars
    const [uploadedImage, setUploadedImage] = useState([])
    const [loadingUpload, setLoadingUpload] = useState()
    const [count, setCount] = useState(30)
    const [waitSendEmail, setWaitSendEmail] = useState(false)

    useEffect(() => {
        if (waitSendEmail) {
            interval()
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [waitSendEmail, count])

    const interval = () => {
        if (count === 0) {
            setWaitSendEmail(false)
            setCount(30)
        } else {
            setTimeout(() => {
                setCount(count - 1)
            }, 1000);
        }
    }

    const [formData, setFormData] = useState({
        id: user.id,
        name: user.name,
        email: user.email,
        tentang_saya: user.tentang_saya,
        no_telp: user.no_telp,
    })

    const dispatch = useDispatch()

    const selectImage = (e) => {
        if (e.target.files && e.target.files.length > 0) {
            setImageUpload(e.target.files[0])
        }
    }

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            if (imageUpload.length === 0) {

                setUploadedImage('')
                try {
                    const { id, name, email, tentang_saya, no_telp } = formData

                    setLoadingUpload(true)
                    const res = await axios.post(api + 'update', {
                        id,
                        name,
                        email,
                        tentang_saya,
                        no_telp,
                        foto_profile: user.foto_profile ?? ''
                    })

                    dispatch(updateUser(res.data.data))
                    setLoadingUpload(false)

                    toast.success('Profile berhasil di update!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });

                } catch (error) {

                    toast.error('Something went wrong', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setLoadingUpload(false)
                }

            } else {

                setLoadingUpload(true)
                const formDatas = new FormData()
                formDatas.append('file', imageUpload)
                formDatas.append("upload_preset", "my_preset");
                formDatas.append("api_key", 717233226378117);

                const response = await axios.post('https://api.cloudinary.com/v1_1/darlzojqc/image/upload', formDatas)
                const parsed = response.data
                setUploadedImage(parsed)
                setLoadingUpload(false)

                try {
                    const { id, name, email, tentang_saya, no_telp } = formData

                    setLoadingUpload(true)
                    const res = await axios.post(api + '/update', {
                        id,
                        name,
                        email,
                        tentang_saya,
                        no_telp,
                        foto_profile: parsed
                    })

                    dispatch(updateUser(res.data.data))
                    setLoadingUpload(false)
                    toast.success('Profile berhasil di update!', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });

                } catch (error) {
                    toast.error('Something went wrong', {
                        position: "top-right",
                        autoClose: 2000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        draggable: true,
                        progress: undefined,
                    });
                    setLoadingUpload(false)
                }
            }

        } catch (e) {
            toast.error('Something went wrong', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            });
            setLoadingUpload(false)
        }


    }

    const sendEmailVerif = async () => {
        setWaitSendEmail(true)
        const email = user.email
        const id = user.id

        try {
            await axios.post(api + '/sendemailverif', {
                data: {
                    email,
                    id
                }
            })
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div className="container max-w-6xl mx-auto md:px-0 px-4">
            <div className="featured my-10">
                <div className='text-left mb-4 space-y-2'>
                    <h2 className='font-bold md:text-4xl text-xl text-black'>Edit Profile</h2>
                    <p className="text-sm font-medium text-gray-400">Lengkapi semua data</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='form mt-4 md:space-y-0 space-y-4 text-left'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className='mb-2 w-fit md:mx-0 mx-auto relative'>
                                    <label htmlFor='image'>
                                        {imageUpload.length === 0 ? (
                                            <>
                                                {
                                                    user.foto_profile ? (
                                                        <img src={user.foto_profile.secure_url} alt="profile" className='w-48 h-48 object-cover rounded-full' />
                                                    ) : (
                                                        <FaUserCircle className=' text-gray-200 rounded-full w-32 h-32' />
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <img src={URL.createObjectURL(imageUpload)} alt="profile" className='w-48 h-48 object-cover rounded-full' />
                                        )}
                                    </label>
                                </div>
                                <input className="hidden" type="file" name="image" id="image" onChange={selectImage} />
                                <p className='text-xs md:text-left text-center text-gray-400'>Klik gambar untuk menambahkan foto</p>
                            </div>

                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="nama"
                                        value="Nama atau Username"
                                    />
                                </div>
                                <TextInput
                                    id="nama"
                                    type="text"
                                    sizing="md"
                                    name='name'
                                    onChange={onChange}
                                    required={true}
                                    value={formData.name}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    sizing="md"
                                    name='email'
                                    onChange={onChange}
                                    required={true}
                                    disabled={true}
                                    value={formData.email}
                                    helperText={
                                        <div>
                                            {user.isVerified || isVerified ? (
                                                <div className='flex items-center space-x-1 text-green-500 font-semibold'>
                                                    <p>Email kamu sudah ter-verifikasi</p>
                                                    <FaCheckCircle />
                                                </div>
                                            ) : (
                                                <div className='flex items-center space-x-1 text-gray-500'>
                                                    <p className={waitSendEmail ? 'hidden' : 'block'}>Kamu belum verifikasi email,</p>
                                                    {waitSendEmail ? (
                                                        <>
                                                            <p>Cek email kamu, kirim ulang link verifikasi dalam {count} detik</p>
                                                        </>
                                                    ) : (
                                                        <p p className='font-bold underline hover:cursor-pointer hover:text-gray-600 active:text-gray-700 transition' onClick={() => {
                                                            sendEmailVerif()
                                                            interval()
                                                        }}>Kirim Link Verifikasi
                                                        </p>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    }
                                />
                            </div>
                            <div>
                                <div id="textarea">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="deskripsi"
                                            value="Tentang Saya"
                                        />
                                    </div>
                                    <Textarea
                                        id="tentang_saya"
                                        required={true}
                                        rows={4}
                                        name="tentang_saya"
                                        onChange={onChange}
                                        value={formData.tentang_saya ?? ''}
                                        helperText={'Perkenalkan diri atau diler kamu secara singkat agar pembeli lebih tertarik'}
                                    />
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="No Telepon"
                                    />
                                </div>
                                <TextInput
                                    id="no_telp"
                                    type="tel"
                                    sizing="md"
                                    name='no_telp'
                                    onChange={onChange}
                                    required={true}
                                    value={formData.no_telp}
                                />
                            </div>
                            <div>
                                {loadingUpload ? (
                                    <Button color={'dark'} type='submit'>
                                        <Spinner className='m-2' />
                                    </Button>
                                ) : (
                                    <Button color={'dark'} type='submit'>
                                        Simpan Perubahan
                                    </Button>
                                )}
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default EditProfifle