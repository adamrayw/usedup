import { Card, Label, TextInput, Button, Spinner } from 'flowbite-react'
import { Link } from 'react-router-dom'
import { BsArrowRight } from 'react-icons/bs'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'
import { useState, useEffect } from 'react'

function Register() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    })

    const { name, email, password } = formData

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { user, isLoading, isError, isSuccess, message } = useSelector((state) => state.auth)

    useEffect(() => {
        if (isError) {
            toast.error(message)
        }

        if (isSuccess || user) {
            navigate('/')
        }

        dispatch(reset())
    }, [user, isSuccess, isError, message, navigate, dispatch])

    const onChange = (e) => {
        setFormData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        const userData = {
            name, email, password
        }

        dispatch(register(userData))
    }

    return (
        <>
            <div className="login-container h-full py-10 px-4">
                <div className="max-w-sm mx-auto text-left">
                    <Card>
                        <div>

                            <div className='flex justify-between items-center'>
                                <h2 className='font-bold text-3xl'>Register</h2>
                                <Link to="/login" className='flex items-center font-medium text-blue-800'>
                                    Login <BsArrowRight className='ml-2' />
                                </Link>
                            </div>
                            <p className='font-normal text-gray-400 mt-2'>Register untuk menjual, menambahkan ke favorit, dan membeli.</p>
                        </div>
                        <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                            <div>
                                <div className="mb-2 block">
                                    <Label
                                        htmlFor="nama"
                                        value="Nama Lengkap"
                                    />
                                </div>
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name='name'
                                    onChange={onChange}
                                    required={true}
                                />
                            </div>
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
                                    name='password'
                                    onChange={onChange}
                                    required={true}
                                />
                            </div>

                            {isLoading ? (
                                <Button color='dark'>
                                    <div className="mr-3">
                                        <Spinner
                                            size="sm"
                                            light={true}
                                        />
                                    </div>
                                    Loading ...
                                </Button>
                            ) : (
                                <Button type="submit" color="dark">
                                    Register
                                </Button>
                            )}
                        </form>
                    </Card>
                </div>
            </div>
        </>
    )
}

export default Register