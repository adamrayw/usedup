import { Button, Label, TextInput, Card, Spinner, Alert } from 'flowbite-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { BsArrowRight } from 'react-icons/bs'
import { useState } from 'react'
import api from '../../utils/api'

function ForgotPassword() {
    const [isLoading, setIsLoading] = useState(false)
    const [responseData, setResponseData] = useState()

    const onSubmit = async (e) => {
        e.preventDefault()

        try {
            setIsLoading(true)
            const response = await axios.post(api + '/forgotpassword', {
                email: e.target.email.value
            })

            setResponseData(response.data)
            setIsLoading(false)
        } catch (error) {
            alert(error)
            setIsLoading(false)
        }
    }

    return (
        <div className="login-container h-full py-10 px-4">
            <div className="max-w-sm mx-auto text-left">
                <Card>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className='font-bold text-3xl'>Lupa Password</h2>
                            <Link to="/login" className='flex items-center font-medium text-blue-800'>
                                Login <BsArrowRight className='ml-2' />
                            </Link>
                        </div>
                        <p className='font-normal text-gray-400 mt-2'>Masukkan email terdaftar kamu</p>
                    </div>
                    {responseData ? (
                        <>
                            {responseData.status ? (
                                <Alert color="info">
                                    <span>
                                        Link Reset Password berhasil terkirim! cek email kamu untuk melakukan reset password.
                                    </span>
                                </Alert>

                            ) : (
                                <Alert color="failure">
                                    <span>
                                        Email yang dimasukkan tidak terdaftar!
                                    </span>
                                </Alert>

                            )}
                        </>
                    ) : (
                        ''
                    )}
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
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
                                name='email'
                                disabled={isLoading ? true : false}
                                placeholder="name@usedup.com"
                                required={true}
                            />
                        </div>

                        {isLoading ? (
                            <Button color='dark' disabled={true}>
                                <div className="mr-3">
                                    <Spinner
                                        size="sm"
                                        light={true}
                                    />
                                </div>
                                Mohon Tunggu...
                            </Button>
                        ) : (
                            <Button type="submit" color="dark">
                                Send Reset Password Link
                            </Button>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ForgotPassword