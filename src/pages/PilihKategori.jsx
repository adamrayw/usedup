import { Card } from 'flowbite-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'
import api from '../utils/api'

function PilihKategori() {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()

    }, [])

    const getCategories = async () => {
        try {
            const response = await axios.get(api + 'kategori')

            setCategories(response.data)
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <div className="max-w-lg mx-auto container py-10 md:px-0 px-4">
                <Card>
                    <div>
                        <h1 className='text-4xl font-bold'>Pilih Kategori</h1>
                        <small className='text-gray-400'>Pilih kategori sesuai barang yang ingin kamu jual</small>
                    </div>
                    {categories.length === 0 ? (
                        <>
                            <div role="status" className="animate-pulse">
                                <div className="h-10 bg-gray-300 dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                                <div className="h-10 bg-gray-300 dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                                <div className="h-10 bg-gray-300 dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                                <div className="h-10 bg-gray-300 dark:bg-gray-700 max-w-[640px] mb-2.5 mx-auto"></div>
                            </div>
                        </>
                    ) : (
                        <>
                            {categories.map((e) => {
                                return (
                                    <Link key={e.id} to={'/jual/' + e.slug} onClick={() => {
                                        localStorage.setItem('kategoriId', e.id)
                                    }}>
                                        <div className='w-full p-4 border border-black hover:bg-gray-50 transition'>
                                            {e.name}
                                        </div>
                                    </Link>
                                )
                            })}
                        </>
                    )}
                </Card>
            </div>
        </>
    )
}

export default PilihKategori