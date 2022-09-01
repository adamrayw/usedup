import { useState } from 'react'
import Stargazer from '../assets/produk.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../utils/api'
import { VscWholeWord } from 'react-icons/vsc'

function Search() {
    const [keyword, setKeyword] = useState('')
    const [searchResult, setSearchResult] = useState([])

    const onSearch = async (e) => {
        setKeyword(e.target.value)

        if (e.target.value === '') {
            setKeyword('')
            setSearchResult('')
        }

        try {
            const res = await axios.get(api + 'item/search?keyword=' + e.target.value)
            setSearchResult(res.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <>
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block p-3 pl-10 md:w-96 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari mobil, motor, handphone, dan lainnya..." required="" onChange={onSearch} />
                    <div className="flex absolute inset-y-0 left-0 items-center px-3 pointer-events-none">
                        <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                    {keyword ? (
                        <div className='absolute w-full mt-2 shadow h-48 overflow-y-scroll space-y-4 p-4 bg-white'>
                            {searchResult.map((e) => {
                                return (
                                    <Link to={`/view/${e.id}`} onClick={() => {
                                        setKeyword('')
                                        setSearchResult('')
                                    }}>
                                        <div className='flex items-center py-2 space-x-3 hover:bg-gray-50 transition'>
                                            <div>
                                                <img src={e.foto[0].secure_url} className='w-16 bg-cover' alt="produk" />
                                            </div>
                                            <div className='font-medium text-left space-y-1'>
                                                <p className='line-clamp-1'>{e.judul_iklan}</p>
                                                <p className='text-xs text-blue-600'>Rp {Intl.NumberFormat('id-ID').format(e.harga)}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </Link>
                                )
                            })}
                            {searchResult.length === 0 ? (
                                <div className='flex items-center justify-center h-full h-full flex-col space-y-2'>
                                    <VscWholeWord className='w-10 h-10 text-gray-800' />
                                    <p className='text-gray-400'>Gunakan keyword yang lebih spesifik</p>
                                </div>
                            ) : ('')}
                        </div>
                    ) : ''}

                </div>

            </form>
        </>
    )
}

export default Search