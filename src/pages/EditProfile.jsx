import { TextInput, Label, Avatar, Textarea } from 'flowbite-react'
import { useSelector } from 'react-redux'
import { RiImageEditLine } from 'react-icons/ri'
function EditProfifle() {
    const { user } = useSelector((state) => state.auth)

    return (
        <div className="container max-w-6xl mx-auto md:px-0 px-4">
            <div className="featured my-10">
                <div className='text-left mb-4 space-y-2'>
                    <h2 className='font-bold md:text-4xl text-xl text-black'>Edit Profile</h2>
                    <p className="text-sm font-medium text-gray-400">Mohon lengkapi semua data demi kenyamanan bersama</p>
                </div>

                <form onSubmit={''}>
                    <div className='form mt-4 md:space-y-0 space-y-4 text-left'>
                        <div className='space-y-4 md:w-1/2 w-full'>
                            <div>
                                <div className='mb-2 w-fit relative'>
                                    <div className='absolute z-10  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full items-center flex justify-center bg-opacity-20 hover:bg-opacity-25 bg-black rounded-full transition duration-200 cursor-pointer'>
                                        <RiImageEditLine className='text-white' />
                                    </div>
                                    {user.foto_profile ? (
                                        <Avatar img={user.foto_profile} alt="foto_profile" />
                                    ) : (
                                        <Avatar rounded={true} size="lg" />
                                    )}
                                </div>
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Nama atau Username"
                                    />
                                </div>
                                <TextInput
                                    id="merk"
                                    type="text"
                                    sizing="md"
                                    name='merk'
                                    onChange={''}
                                    required={true}
                                    value={user.name}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="base"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    sizing="md"
                                    name='email'
                                    onChange={''}
                                    required={true}
                                    value={user.email}
                                />
                            </div>
                            <div>
                                <div id="textarea">
                                    <div className="mb-2 block">
                                        <Label
                                            htmlFor="deskripsi"
                                            value="Tentang Saya"
                                        />
                                    </div>
                                    <Textarea
                                        id="tentang_saya"
                                        required={true}
                                        rows={4}
                                        name="tentang_saya"
                                        onChange={''}
                                        value={user.tentang_saya}
                                        helperText={'Perkenalkan diri kamu agar pembeli lebih tertarik dan aman'}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProfifle