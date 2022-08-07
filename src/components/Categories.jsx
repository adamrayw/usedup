import React from 'react'

function Categories() {
    return (
        <>
            <div className='bg-white pt-4 pb-3 shadow-sm w-full text-center'>
                <div className='flex md:overflow-x-hidden md:px-0 px-2 overflow-x-scroll space-x-6 md:justify-center '>
                    <a href='/' className='whitespace-nowrap'>Mobil Bekas</a>
                    <a href='/' className='whitespace-nowrap'>Motor Bekas</a>
                    <a href='/' className='whitespace-nowrap'>Property</a>
                    <a href='/' className='whitespace-nowrap'>Elektronik & Gadget</a>
                    <a href='/' className='whitespace-nowrap'>TV & Audio, Video</a>
                </div>
            </div>
        </>
    )
}

export default Categories