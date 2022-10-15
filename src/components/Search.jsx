import { useState } from 'react'
import { Link } from 'react-router-dom'

function Search() {
    const [keyword, setKeyword] = useState()

    function setKeywords(e) {
        e.preventDefault()
        setKeyword(e.target.value)
        console.log(keyword);
    }

    return (
        <>
            <form>
                <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
                <div className="relative md:ml-16">
                    <input type="text" id="default-search" className="block p-3 pl-4 pr-8 md:w-96 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-gray-500 focus:border-gray-500 dark:bg-gray-700 dark:border-gray-600 placeholder-gray-300 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cari mobil, motor, handphone, dan lainnya..." required="" onChange={setKeywords} value={keyword} onKeyDown={(e) => { e.key === 'Enter' && e.preventDefault() }} />
                    <div className="flex absolute inset-y-0 right-0 items-center px-3">
                        <Link to={`/search/${keyword}`} className='w-5 h-5'>
                            <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                        </Link>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Search