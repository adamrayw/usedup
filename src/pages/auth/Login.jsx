import { Card, Label, TextInput, Button } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'

function Login() {
    return (
        <>
            <div className="login-container h-screen pt-10 px-4">
                <div className="max-w-sm mx-auto text-left">
                    <Card>
                        <div>

                            <div className='flex justify-between items-center'>
                                <h2 className='font-bold text-3xl'>LOGIN</h2>
                                <Link to="/register" className='flex items-center font-medium text-blue-800'>
                                    Register <BsArrowRight className='ml-2' />
                                </Link>
                            </div>
                            <p className='font-normal text-gray-400 mt-2'>Ingin mencari sesuatu? banyak barang bagus loh!</p>
                        </div>
                        <form className="flex flex-col gap-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="email1"
                                        value="Email"
                                    />
                                </div>
                                <TextInput
                                    id="email1"
                                    type="email"
                                    placeholder="name@usedup.com"
                                    required={true}
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="password1"
                                        value="Password"
                                    />
                                </div>
                                <TextInput
                                    id="password1"
                                    type="password"
                                    required={true}
                                />
                            </div>
                            <Button type="submit" color="dark">
                                Login
                            </Button>
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Login