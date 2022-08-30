import { TextInput, Label, Avatar, Textarea, Button, Spinner } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { RiImageEditLine } from 'react-icons/ri'
import { useState } from 'react'
import axios from 'axios'
import api from '../utils/api'
import { useDispatch } from 'react-redux'
import { updateUser } from '../features/auth/authSlice'
import { toast } from 'react-toastify'

function EditProfifle() {
    const { user } = useSelector((state) => state.auth)

    const [imageUpload, setImageUpload] = useState([])
    const [uploadedImage, setUploadedImage] = useState([])
    const [loadingUpload, setLoadingUpload] = useState()

    const [formData, setFormData] = useState({
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

        console.log(formData)
    }

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            if (imageUpload.length === 0) {

                setUploadedImage('')
                try {
                    const { name, email, tentang_saya, no_telp } = formData

                    setLoadingUpload(true)
                    const res = await axios.post(api + '/update', {
                        name,
                        email,
                        tentang_saya,
                        no_telp,
                        foto_profile: user.foto_profile ?? ''
                    })

                    dispatch(updateUser(res.data))
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
                    const { name, email, tentang_saya, no_telp } = formData

                    setLoadingUpload(true)
                    const res = await axios.post(api + '/update', {
                        name,
                        email,
                        tentang_saya,
                        no_telp,
                        foto_profile: parsed
                    })

                    dispatch(updateUser(res.data))
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

    return (
        <div className="container max-w-6xl mx-auto md:px-0 px-4">
            <div className="featured my-10">
                <div className='text-left mb-4 space-y-2'>
                    <h2 className='font-bold md:text-4xl text-xl text-black'>Edit Profile</h2>
                    <p className="text-sm font-medium text-gray-400">Lengkapi semua data demi kenyamanan bersama</p>
                </div>

                <form onSubmit={onSubmit}>
                    <div className='form mt-4 md:space-y-0 space-y-4 text-left'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className='mb-2 w-fit relative'>
                                    <label htmlFor='image'>
                                        <div className='absolute z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full items-center flex justify-center bg-opacity-20 hover:bg-opacity-25 bg-black rounded-full transition duration-200 cursor-pointer'>
                                            <RiImageEditLine className='text-white' />
                                        </div>
                                        {imageUpload.length === 0 ? (
                                            <>
                                                {
                                                    user.foto_profile ? (
                                                        <Avatar rounded={true} img={user.foto_profile.secure_url} size="xl" />
                                                    ) : (
                                                        <Avatar rounded={true} size="xl" />
                                                    )
                                                }
                                            </>
                                        ) : (
                                            <Avatar img={URL.createObjectURL(imageUpload)} id="" size='xl' alt="foto_profile" rounded={true} />
                                        )}
                                    </label>
                                </div>
                                <input className="hidden" type="file" name="image" id="image" onChange={selectImage} />
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
                                    value={formData.email}
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
            </div>
        </div>
    )
}

export default EditProfifle