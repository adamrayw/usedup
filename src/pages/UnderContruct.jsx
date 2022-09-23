import UnderConstruct from '../assets/under_construct.svg'
import { Link } from 'react-router-dom'

function UnderContruct() {
    return (
        <section>
            <div className="container max-w-6xl mx-auto md:px-0 px-4">
                <div className="featured my-20">
                    <div className='mb-4 space-y-8 text-center'>
                        <img src={UnderConstruct} className="md:w-80 w-56 mx-auto" alt="logo" />
                        <h2 className='font-bold md:text-2xl text-xl text-gray-800'>Maaf, website dapat diakses kembali pada tanggal 1 Oktober 2022</h2>
                        {/* <Link to='/' className='text-sm underline block text-gray-400 hover:text-gray-600 transition'>
                            Kembali ke home
                        </Link> */}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default UnderContruct