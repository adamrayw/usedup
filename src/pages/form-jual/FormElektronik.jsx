import { Label, TextInput, Textarea, Button, Spinner } from 'flowbite-react'
import { FaCloudUploadAlt, FaCheck, FaMapMarkerAlt, FaTimes, FaRegEye } from 'react-icons/fa'
import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { reset, formMobilBekas, resetUpload, removeFoto } from '../../features/form/formSlice'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import axios from 'axios'
import UploadFoto from '../../components/UploadFoto';
import NumberFormat from 'react-number-format';
import api from '../../utils/api';
import ImageFull from '../../components/ImageFull';

function FormElektronik() {
    const [selectedImage, setSelectedImage] = useState([])
    const [imageClouded, setImageClouded] = useState([])
    const [onPreview, setOnPreview] = useState(false)
    const [ImagePreview, setImagePreview] = useState([])
    const [isLoadingUpload, setIsLoadingUpload] = useState(false)
    const [provinsiData, setProvinsiData] = useState([])
    const { user } = useSelector((state) => state.auth)
    const [formattedValue, setFormattedValue] = useState({
        kapasitasMesin: '',
        jarakTempuh: '',
        formattedHarga: ''
    })
    const [formData, setFormData] = useState({
        userId: user ? user.id : 0,
        merk: '',
        penyimpanan: '',
        ram: '',
        judul_iklan: '',
        deskripsi: '',
        alamat: '',
        provinsiId: '',
        kategori: '',
    })

    const { isError, isSuccess, isLoading, message, foto } = useSelector((state) => state.form)
    const { merk, penyimpanan, ram, judul_iklan, deskripsi, alamat, provinsiId, harga } = formData
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess) {
            navigate('/success')
        }

        setSelectedImage(foto)

        getProvinsi()

        dispatch(reset())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isError, isSuccess, message, foto])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))

        if (e.target.name === 'harga') {
            const value = e.target.value
            const removedSymbol = value.replace(/,/g, "").split("").join("")
            setFormData(prevState => ({ ...prevState, harga: removedSymbol }))
        }
    }

    const onSubmit = async (e) => {
        const formData = new FormData()

        if (selectedImage.length < 1) {
            toast.warn('Wajib meng-upload foto', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
            return
        } else {
            for (let i = 0; i < selectedImage.length; i++) {
                setIsLoadingUpload(true)
                let file = selectedImage[i]
                formData.append('file', file)
                formData.append("upload_preset", "my_preset");
                formData.append("api_key", 717233226378117);

                try {
                    const response = await axios.post('https://api.cloudinary.com/v1_1/darlzojqc/image/upload', formData)
                    const parsed = response.data
                    setImageClouded((prevState) => [...prevState, parsed])
                } catch (e) {
                    alert(e)
                }
            }

        }
        setIsLoadingUpload(false)

    }


    const onInput = (e) => {
        const kategoriId = localStorage.getItem('kategoriId')
        e.preventDefault()

        if (imageClouded.length < 1) {
            return
        } else {
            const data = {
                userId: user ? user.id : 0, merk, penyimpanan, ram, judul_iklan, deskripsi, alamat, provinsiId, harga, kategoriId: kategoriId, foto: imageClouded
            }

            dispatch(formMobilBekas(data))
            dispatch(resetUpload())
            setSelectedImage([])
            setImageClouded([])
            setFormData([])
        }
    }

    const getProvinsi = async () => {
        try {
            const res = await axios.get(api + 'provinsi')
            setProvinsiData(res.data)
        } catch (e) {
            alert(e)
        }
    }

    const namaMerk = ['Acer', 'Advan', 'Apple', 'Asus', 'Blackberry', 'Cross', 'Evercross', 'HTC', 'Huawei', 'IMO', 'LG', 'Infinix', 'Lenovo', 'Mito', 'Motorola', 'Nexian', 'Nokia', 'Oppo', 'Samsung', 'Smartfren', 'Sony', 'Vivo', 'Xiaomi']

    return (
        <>
            <div className="max-w-4xl text-left mx-auto container py-10 md:px-0 px-4">
                <div className="header bg-black p-4 text-white space-y-2">
                    <h1 className='text-2xl font-bold'>KAMU INGIN MENJUAL ELEKTRONIK & GADGET</h1>
                    <p>Kategori : <span className='text-blue-500'>Elektronik & Gadget</span></p>
                </div>
                <p className='text-xs font-medium mt-2'>* SILAHKAN ISI FORM DI BAWAH DENGAN BENAR</p>

                <form onSubmit={onInput}>
                    <div className='form mt-4 flex items-start justify-between md:space-x-10 space-x-0 md:space-y-0 space-y-4 md:flex-row flex-col'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div id="select">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="merk"
                                            value="Merk"
                                        />
                                    </div>

                                    <select id="merk" name="merk" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" onChange={onChange}>
                                        {namaMerk.map((e) =>
                                            <option key={e}>
                                                {e}
                                            </option>
                                        )}
                                        <option>
                                            {'Lainnya'}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Penyimpanan (GB)"
                                    />
                                </div>
                                <TextInput
                                    id="penyimpanan"
                                    type="text"
                                    sizing="md"
                                    name='penyimpanan'
                                    placeholder='128'
                                    onChange={onChange}
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="RAM (GB)"
                                    />
                                </div>
                                <TextInput
                                    id="ram"
                                    type="text"
                                    sizing="md"
                                    name='ram'
                                    placeholder='8'
                                    required={true}
                                    onChange={onChange}
                                />

                            </div>
                        </div>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className='md:hidden mb-2 block'>
                                    <hr />
                                </div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Judul Iklan"
                                    />
                                </div>
                                <TextInput
                                    id="judul-iklan"
                                    type="text"
                                    sizing="md"
                                    name="judul_iklan"
                                    placeholder='Dijual motor bekas baru!'
                                    onChange={onChange}
                                    required={true}
                                />
                            </div>
                            <div>
                                <div id="textarea">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="deskripsi"
                                            value="Deskripsi"
                                        />
                                    </div>
                                    <Textarea
                                        id="deskripsi"
                                        placeholder="Jelaskan tentang kondisi, alasan dll"
                                        required={true}
                                        rows={4}
                                        name="deskripsi"
                                        onChange={onChange}
                                    />
                                </div>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Pasang Harga"
                                    />
                                </div>
                                <TextInput
                                    id="harga"
                                    type="text"
                                    sizing="md"
                                    name='harga'
                                    placeholder='300.000.000'
                                    addon='Rp'
                                    required={true}
                                    onChange={onChange}
                                    value={formattedValue.formattedHarga}
                                />
                                <NumberFormat className="hidden" value={harga} thousandsGroupStyle="thousand" thousandSeparator={true} onValueChange={(values) => {
                                    const { formattedValue } = values

                                    setFormattedValue(prevState => ({ ...prevState, formattedHarga: formattedValue }))
                                }} />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Alamat"
                                    />
                                </div>
                                <TextInput
                                    id="alamat"
                                    type="text"
                                    sizing="md"
                                    name='alamat'
                                    addon={<FaMapMarkerAlt />}
                                    required={true}
                                    onChange={onChange}
                                />
                                {/* <div className="flex items-center my-4">
                                    <input id="checkbox-1" type="checkbox" value="" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="checkbox-1" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Gunakan alamat sekarang.</label>
                                </div> */}
                            </div>
                            <div>
                                <label htmlFor="provinsi" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Provinsi</label>
                                <select id="provinsi" name='provinsiId' onChange={onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option>Pilih Provinsi</option>
                                    {provinsiData.map((e) => {
                                        return (
                                            <option key={e.id} value={e.id}>{e.name}</option>
                                        )
                                    })}
                                </select>
                            </div>
                            <div>
                                <hr />
                            </div>
                            <div className='pb-2'>
                                <div className='flex justify-between items-start'>
                                    <div>
                                        <p className='font-bold'>UPLOAD FOTO</p>
                                        <p id="helper-text-explanation" className="text-xs text-gray-500 dark:text-gray-400">Max 6 foto</p>
                                    </div>
                                    {imageClouded.length === selectedImage.length ? (
                                        <>
                                            {selectedImage.length === 0 ? '' : (
                                                <FaCheck />
                                            )}
                                        </>
                                    ) : ''}
                                    {isLoadingUpload ? (
                                        <Button outline={true} color="dark">
                                            <div className="mr-3">
                                                <Spinner
                                                    size="sm"
                                                    light={true}
                                                />
                                            </div>
                                            Uploading...
                                        </Button>
                                    ) : (
                                        <>
                                            {imageClouded.length > 0 ? '' : (
                                                <Button color="dark" size='sm' type='submit' onClick={onSubmit}>
                                                    <FaCloudUploadAlt className='mr-2' />
                                                    Upload Foto
                                                </Button>
                                            )}
                                        </>
                                    )}
                                </div>

                            </div>
                            <div className='grid grid-cols-3 justify-between items-center gap-4'>
                                {selectedImage.map((e, index) => {
                                    return (
                                        <>
                                            <div className='relative'>
                                                <div className='absolute z-10 bg-white pl-3 pt-2 pb-3 cursor-pointer hover:bg-gray-50 active:bg-gray-100 active:rounded-tr pr-1 shadow right-0 rounded-bl-full rounded-tr' onClick={() => dispatch(removeFoto(e))}>
                                                    <FaTimes className='text-xs text-red-500' />
                                                </div>
                                                <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded w-full h-full items-center flex justify-center hover:cursor-pointer hover:bg-black hover:opacity-40 active:opacity-20 transition'
                                                    onClick={() => {
                                                        setOnPreview(true)
                                                        setImagePreview(e)
                                                    }}
                                                >
                                                    <FaRegEye className='text-white z-10' />
                                                </div>
                                                <img
                                                    key={index}
                                                    className="w-full h-20 mx-auto shadow-md object-cover rounded"
                                                    src={URL.createObjectURL(e)}
                                                    alt="foto-item"
                                                />
                                            </div>
                                            {onPreview ? (
                                                <>
                                                    <div className='fixed z-20 top-0 right-0 p-6'>
                                                        <FaTimes className='text-white text-xl hover:cursor-pointer' onClick={() => {
                                                            setOnPreview(false)
                                                            setImagePreview([])
                                                        }} />
                                                    </div>
                                                    <ImageFull image={ImagePreview} />
                                                </>
                                            ) : ''}
                                        </>
                                    )
                                })}


                                {imageClouded.length > 0 ? '' : (
                                    <>
                                        {
                                            selectedImage.length === 6 ? '' : (
                                                <UploadFoto />
                                            )
                                        }
                                    </>
                                )}
                            </div>
                            <div className='pt-4'>

                                {isLoadingUpload ? (<>
                                    <Button color="dark" size='lg' disabled={true}>
                                        JUAL SEKARANG
                                    </Button>
                                </>) : (
                                    <>
                                        {isLoading ? (
                                            <Button outline={true}>
                                                <div className="mr-3">
                                                    <Spinner
                                                        size="sm"
                                                        light={true}
                                                    />
                                                </div>
                                                Loading ...
                                            </Button>
                                        ) : (
                                            <>
                                                {imageClouded.length < 1 ? (
                                                    <Button color="dark" size='lg' disabled={true}>
                                                        JUAL SEKARANG
                                                    </Button>
                                                ) : (
                                                    <Button color="dark" size='lg' type='submit'>
                                                        JUAL SEKARANG
                                                    </Button>
                                                )}
                                            </>
                                        )}
                                    </>
                                )}
                                <p id="helper-text-explanation" className="pt-2 text-xs text-gray-500 dark:text-gray-400">Klik Upload Foto terlebih dahulu</p>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default FormElektronik