import React from 'react'

function IklanSaya() {
    return (
        <section>
            <div className="container max-w-6xl mx-auto md:px-0 px-4">
                <div className="featured my-10">
                    <div className='text-left mb-4 space-y-2'>
                        <h2 className='font-bold md:text-4xl text-xl text-black'>Iklan Kamu</h2>
                        {/* <p className="text-sm font-medium text-gray-400"></p> */}
                    </div>


                    {/* <div className='grid grid-cols-2 md:grid-cols-4 gap-4 justify-between'>
                        {data ? (
                            <>
                                {data.map((e, index) => {
                                    return (
                                        <>
                                            <CardItem key={index} data={e.iklan} />
                                        </>
                                    )
                                })}
                            </>
                        ) : (
                            ''
                        )}
                    </div>
                    {data < 1 ? (
                        <>
                            <div className="flex flex-col items-center mt-10">
                                <GoPackage className="text-gray-800 text-6xl" />
                                <p className="text-gray-400">Kamu belum favoritin barang apapun</p>
                            </div>
                        </>
                    ) : ''} */}
                </div>
            </div>
        </section>
    )
}

export default IklanSaya