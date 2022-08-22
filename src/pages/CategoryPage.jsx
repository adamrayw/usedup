import { useEffect, useState } from 'react'
import axios from 'axios'
import CardItem from '../components/CardItem'
import { Button } from 'flowbite-react'
import { useParams } from 'react-router-dom'

function CategoryPage() {
    const [data, setData] = useState([])

    let { slug } = useParams()

    useEffect(() => {
        getCategoryItems()

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [slug])

    const getCategoryItems = async () => {
        try {
            // const response = await axios.get('http://localhost:8080/api/kategori/' + slug)
            const response = await axios.get('https://usedup.herokuapp.com/api/kategori/' + slug)
            setData(response.data)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <section>
                <div className="container max-w-6xl mx-auto md:px-0 px-4">
                    <div className="featured mt-10">
                        <div className='text-left mb-4'>
                            <h2 className='font-bold md:text-4xl text-xl text-black'>Jual Beli {data.name}</h2>

                        </div>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                            {data.length === 0 ? (
                                <>
                                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 ">
                                        <div className='shadow'>
                                            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="w-full mt-4 p-4">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                                                <div className="h-2 w-10 ml-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 ">
                                        <div className='shadow'>
                                            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="w-full mt-4 p-4">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                                                <div className="h-2 w-10 ml-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 ">
                                        <div className='shadow'>
                                            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="w-full mt-4 p-4">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                                                <div className="h-2 w-10 ml-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div role="status" className="space-y-8 animate-pulse md:space-y-0 md:space-x-8 ">
                                        <div className='shadow'>
                                            <div className="flex justify-center items-center w-full h-48 bg-gray-300 rounded  dark:bg-gray-700">
                                                <svg className="w-12 h-12 text-gray-200" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" fill="currentColor" viewBox="0 0 640 512"><path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" /></svg>
                                            </div>
                                            <div className="w-full mt-4 p-4">
                                                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-4"></div>
                                                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[480px] mb-4"></div>
                                                <div className="h-2 w-10 ml-auto bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            ) : (
                                <>
                                    {data.Iklan.map((data, index) => {
                                        return (
                                            <CardItem key={index} data={data} />
                                        )
                                    })}
                                </>
                            )}
                        </div>
                        <div className='flex justify-center my-6'>
                            <Button color="dark">Tampilkan lainnya</Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CategoryPage