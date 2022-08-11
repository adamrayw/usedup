import { Link } from 'react-router-dom'

function Categories() {
    return (
        <>
            <div className='bg-white pt-4 pb-3 mb-1 shadow-sm w-full text-center'>
                <div className='flex md:overflow-x-hidden md:px-0 px-2 overflow-x-scroll space-x-6 md:justify-center '>
                    <Link to='/' className='whitespace-nowrap'>Mobil Bekas</Link>
                    <Link to='/' className='whitespace-nowrap'>Motor Bekas</Link>
                    <Link to='/' className='whitespace-nowrap'>Property</Link>
                    <Link to='/' className='whitespace-nowrap'>Elektronik & Gadget</Link>
                    <Link to='/' className='whitespace-nowrap'>TV & Audio, Video</Link>
                </div>
            </div>
        </>
    )
}

export default Categories