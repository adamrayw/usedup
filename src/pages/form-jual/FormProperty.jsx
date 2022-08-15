import { Label, TextInput, Textarea, Button } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa'


function FormMobilBekas() {
    const totalKamarTidur = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    const totalKamarMandi = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    return (
        <>
            <div className="max-w-4xl text-left mx-auto container py-10 md:px-0 px-4">
                <div className="header bg-black p-4 text-white space-y-2">
                    <h1 className='text-2xl font-bold'>KAMU INGIN MENJUAL PROPERTY</h1>
                    <p>Kategori : <span className='text-blue-500'>Property</span></p>
                </div>
                <p className='text-xs font-medium mt-2'>* SILAHKAN ISI FORM DI BAWAH DENGAN BENAR</p>

                <form>
                    <div className='form mt-4 flex items-start justify-between md:space-x-10 space-x-0 md:space-y-0 space-y-4 md:flex-row flex-col'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Luas Bangunan"
                                    />
                                </div>
                                <TextInput
                                    id="luas-bangunan"
                                    type="text"
                                    sizing="md"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Luas Tanah"
                                    />
                                </div>
                                <TextInput
                                    id="luas-tanah"
                                    type="text"
                                    sizing="md"
                                />
                            </div>
                            <div>
                                <div id="select">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="kamar-tidur"
                                            value="Kamar Tidur"
                                        />
                                    </div>

                                    <select id="kamar-tidur" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {totalKamarTidur.map((e) =>
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
                            <div>
                                <div id="select">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="kamar-mandi"
                                            value="Kamar Mandi"
                                        />
                                    </div>

                                    <select id="kamar-mandi" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                        {totalKamarMandi.map((e) =>
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
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Lantai"
                                    />
                                </div>
                                <TextInput
                                    id="lantai"
                                    type="text"
                                    sizing="md"
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Fasilitas Utama"
                                    />
                                </div>

                                <div className="flex items-center mb-4">
                                    <input id="ac" type="checkbox" value="AC" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="ac" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        AC
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="garasi" type="checkbox" value="Garasi" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="garasi" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Garasi
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="taman" type="checkbox" value="Taman" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="taman" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Taman
                                    </label>
                                </div>
                                <div className="flex items-center mb-4">
                                    <input id="pam" type="checkbox" value="PAM" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                    <label htmlFor="pam" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        PAM
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="base"
                                            value="Sertifikasi"
                                        />
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="sertifikat-hak-milik" type="radio" name="sertifikasi" value="Sertifikat Hak Milik" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="sertifikat-hak-milik" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Sertifikat Hak Milik
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="hak-guna-bangun" type="radio" name="sertifikasi" value="Hak Guna Bangun" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="hak-guna-bangun" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Hak Guna Bangun
                                        </label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="lainnya" type="radio" name="sertifikasi" value="Lainnya (PPJB, Girik, Adat, dll)" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                        <label for="lainnya" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                            Lainnya (PPJB, Girik, Adat, dll)
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Alamat Lokasi Lengkap"
                                    />
                                </div>
                                <TextInput
                                    id="alamat-lokasi"
                                    type="text"
                                    sizing="md"
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