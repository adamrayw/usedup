import Success from '../../assets/success.svg'
function SuccessPages() {
    return (
        <div className='max-w-xl mx-auto flex flex-col justify-center items-center my-16 space-y-6 px-4'>
            <img src={Success} alt="success" className='w-2/5' />
            <div className='space-y-2'>
                <h1 className='font-bold text-xl'>FORM BERHASIL TERKIRIM</h1>
                <p className='font-medium text-gray-400'>Terima Kasih sudah menjual, saat ini kami sedang me-review barang kamu.</p>
                <a href="/" className='inline-block underline pt-6'>Kembali ke Home</a>
            </div>
        </div>
    )
}

export default SuccessPages