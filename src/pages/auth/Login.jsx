import { Card, Label, TextInput, Button, Spinner, Alert } from 'flowbite-react'
import { Link, useNavigate, useSearchParams } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { login, reset } from '../../features/auth/authSlice'
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'

function Login() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })

    const { user, isError, isLoading, isSuccess, message } = useSelector((state) => state.auth)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [searchParams] = useSearchParams()

    const isResetSuccess = searchParams.get('reset') ?? false

    useEffect(() => {


        if (isError) {
            toast.error(message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
            });
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user, isSuccess, message, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const { email, password } = formData

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            email, password
        }

        dispatch(login(userData))
    }



    return (
        <>
            <div className="login-container h-full py-10 px-4">
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
                        {isResetSuccess ? (
                            <Alert
                                color="success"
                            >
                                <span>
                                    Password berhasil diperbarui, silahkan login dengan password baru
                                </span>
                            </Alert>
                        ) : ''}
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
                                    onChange={onChange}
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
                                    disabled={isLoading ? true : false}
                                    name='password'
                                    onChange={onChange}
                                    required={true}
                                />
                            </div>
                            <div className='text-right'>
                                <Link to='/forgot-password' className='text-blue-800 font-medium'>Lupa Password?</Link>
                            </div>
                            {isLoading ? (
                                <Button color='dark' disabled={true}>
                                    <div className="mr-3">
                                        <Spinner
                                            size="sm"
                                            light={true}
                                        />
                                    </div>
                                    Loggin in ...
                                </Button>
                            ) : (
                                <Button type="submit" color="dark">
                                    Login
                                </Button>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Login