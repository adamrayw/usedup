import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";
import axios from 'axios'
import api from '../utils/api'
import CardItem from "../components/CardItem";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa'
import { Spinner } from "flowbite-react";

export default function SearchResult() {
    const [isLoading, setIsLoading] = useState(false)
    const [dataSearch, setDataSearch] = useState([])
    const [isEmpty, setIsEmpty] = useState(false)

    const params = useParams()

    const getKeywordData = async () => {
        try {
            setIsLoading(true)
            // eslint-disable-next-line no-useless-concat
            setIsEmpty(false)
            const response = await axios.get(api + 'item/search?keyword=' + params.keyword)
            console.log(response)
            setDataSearch(response.data)
            if (response.data.length === 0) {
                setIsEmpty(true)
            } else {
                setIsEmpty(false)
            }
            setIsLoading(false)
        } catch (error) {
            console.log(error);
            setIsLoading(false)
        }
    }

    useEffect(() => {
        getKeywordData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [params])

    return (
        <div className="max-w-6xl pb-10 pt-4 mx-auto md:px-0 px-4">
            <Link to='/'>
                <div className="flex items-center mb-2 text-gray-400">
                    <FaArrowLeft className="mr-2" />
                    Kembali ke home
                </div>
            </Link>
            <div className='text-left mb-4'>
                <h2 className='font-bold md:text-4xl text-xl text-black'>Kamu mencari {params.keyword}</h2>
            </div>
            <div className="item">
                <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                    {dataSearch.map((data, index) => {
                        return (
                            <CardItem key={index} data={data} />
                        )
                    })}
                </div>
                {isEmpty ? (
                    <div className="my-10 flex items-center flex-col">
                        <img src="https://img.icons8.com/ios/100/null/empty-box.png" alt="empty-icon" />
                        <h2 className="text-xl text-center text-gray-800 font-bold mt-2 mb-3">Item tidak ditemukan</h2>
                        <p className="text-sm text-gray-400">Gunakan kata kunci yang lebih spesifik <br /> contoh: <span className="underline font-bold">Kawasaki</span></p>
                    </div>
                ) : ''}

                {isLoading ? (
                    <Spinner
                        aria-label="Large spinner example"
                        size="lg"
                    />
                ) : ''}
            </div>
        </div>
    )
}
