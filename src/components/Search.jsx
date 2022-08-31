import { useState } from 'react'
import Stargazer from '../assets/produk.jpg'
import { Link } from 'react-router-dom'
import axios from 'axios'
import api from '../utils/api'

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

    console.log(keyword)

    return (
        <>
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative">
                    <input type="search" id="default-search" className="block p-3 pr-10 md:w-96 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari mobil, motor, handphone, dan lainnya..." required="" onChange={onSearch} />
                    <div className="flex absolute bg-gray-100 inset-y-0 right-0 items-center px-3 rounded-r-lg border-r border-b border-t border-gray-300 pointer-events-none">
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
                                        <div className='flex items-center py-2 hover:bg-gray-50 transition'>
                                            <div>
                                                <img src={e.foto[0].secure_url} alt="produk" width='80' />
                                            </div>
                                            <div>
                                                <p>{e.judul_iklan}</p>
                                            </div>
                                        </div>
                                        <hr />
                                    </Link>
                                )
                            })}
                        </div>
                    ) : ''}

                </div>

            </form>
        </>
    )
}

export default Search