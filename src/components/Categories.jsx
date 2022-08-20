import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from "axios"
import { toast } from "react-toastify"

function Categories() {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()

    }, [])

    const getCategories = async () => {
        try {
            // const response = await axios.get('http://localhost:8080/api/kategori')
            const response = await axios.get('https://usedup.herokuapp.com/api/kategori')

            setCategories(response.data)
        } catch (error) {
            toast.error(error)
        }
    }
    return (
        <>
            <div className='bg-white pt-4 pb-3 mb-1 shadow-sm w-full text-center'>
                <div className='flex md:overflow-x-hidden md:px-0 px-2 overflow-x-scroll space-x-6 md:justify-center '>
                    {categories.map((e) => {
                        return (
                            <Link key={e.id} to={e.slug} className='whitespace-nowrap hover:underline'>{e.name}</Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default Categories