import { Label, TextInput, Textarea, Button } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa'


function FormMobilBekas() {
    const namaMerk = ['Acer', 'Advan', 'Apple', 'Asus', 'Blackberry', 'Cross', 'Evercross', 'HTC', 'Huawei', 'IMO', 'LG', 'Lain-lain', 'Lenovo', 'Mito', 'Motorola', 'Nexian', 'Nokia', 'Oppo', 'Samsung', 'Smartfren', 'Sony', 'Vivo', 'Xiaomi']
    const totalKamarMandi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <div className="max-w-4xl text-left mx-auto container py-10 md:px-0 px-4">
                <div className="header bg-black p-4 text-white space-y-2">
                    <h1 className='text-2xl font-bold'>KAMU INGIN MENJUAL ELEKTRONIK & GADGET</h1>
                    <p>Kategori : <span className='text-blue-500'>Elektronik & Gadget</span></p>
                </div>
                <p className='text-xs font-medium mt-2'>* SILAHKAN ISI FORM DI BAWAH DENGAN BENAR</p>

                <form>
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

                                    <select id="merk" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {namaMerk.map((e) =>
                                            <option>
                                                {e}
                                            </option>
                                        )}
                                        <option>
                                            {'>10'}
                                        </option>
                                    </select>
                                </div>
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
                                    placeholder='Dijual rumah baru lokasi strategis!'
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
                                    id="judul-iklan"
                                    type="text"
                                    sizing="md"
                                    placeholder='100.000.000'
                                    addon="Rp"
                                />
                            </div>
                            <div>
                                <hr />
                            </div>
                            <p className='font-bold'>UNGGAH FOTO</p>
                            <div id="fileUpload" className='flex flex-wrap justify-between'>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                                <div>
                                    <label htmlFor="image">
                                        <div className='border border-black p-4 inline-block'>
                                            <FaPlus />
                                        </div>
                                    </label>
                                    <input className='hidden' type="file" name="image" id="image" />
                                </div>
                            </div>
                            <div className='pt-4'>
                                <Button color="dark" size='lg'>
                                    JUAL SEKARANG
                                </Button>
                            </div>
                        </div>
                    </div>
                </form>
            </div >
        </>
    )
}

export default FormMobilBekas