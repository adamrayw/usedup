import { Label, TextInput, Textarea, Button } from 'flowbite-react'
import { FaPlus } from 'react-icons/fa'

function FormMobilBekas() {
    return (
        <>
            <div className="max-w-4xl text-left mx-auto container py-10 md:px-0 px-4">
                <div className="header bg-black p-4 text-white space-y-2">
                    <h1 className='text-2xl font-bold'>KAMU INGIN MENJUAL MOTOR BEKAS</h1>
                    <p>Kategori : <span className='text-blue-500'>Motor Bekas</span></p>
                </div>
                <p className='text-xs font-medium mt-2'>* SILAHKAN ISI FORM DI BAWAH DENGAN BENAR</p>

                <form>
                    <div className='form mt-4 flex items-start justify-between md:space-x-10 space-x-0 md:space-y-0 space-y-4 md:flex-row flex-col'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Merk"
                                    />
                                </div>
                                <TextInput
                                    id="merk"
                                    type="text"
                                    sizing="md"
                                    placeholder='Kawasaki'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Model"
                                    />
                                </div>
                                <TextInput
                                    id="model"
                                    type="text"
                                    sizing="md"
                                    placeholder='zx25r'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Tahun"
                                    />
                                </div>
                                <TextInput
                                    id="tahun"
                                    type="text"
                                    sizing="md"
                                    placeholder='2020'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Jarak Tempuh (km)"
                                    />
                                </div>
                                <TextInput
                                    id="jarak-tempuh"
                                    type="text"
                                    sizing="md"
                                    placeholder='2.000'
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Tipe Bahan Bakar"
                                    />
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="tipe-bahan-bakar-bensin" type="radio" name="tipeBahanBakar" value="Bensin" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="tipe-bahan-bakar-bensin" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Bensin
                                    </label>
                                </div>

                                <div class="flex items-center mb-4">
                                    <input id="tipe-bahan-bakar-listrik" type="radio" name="tipeBahanBakar" value="Listrik" class="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600" />
                                    <label for="tipe-bahan-bakar-listrik" class="block ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                                        Listrik
                                    </label>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="base"
                                            value="Kapasitas Mesin (km)"
                                        />
                                    </div>
                                    <TextInput
                                        id="kapasitas-mesin"
                                        type="text"
                                        sizing="md"
                                        placeholder='1.000'
                                    />
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
                                    placeholder='Dijual motor bekas baru!'
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