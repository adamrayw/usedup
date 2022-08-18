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
        password: '',
    })
    const { name, email, password } = formData
    const [validation, setValidation] = useState({
        name: '',
        password: ''
    })

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
    }, [user, isSuccess, isError, message, navigate, dispatch, name, email, password])

    const onChangeName = (e) => {
        if (e.target.value.length < 6) {
            setValidation(prevState => ({ ...prevState, name: "Nama atau Username harus 6 karakter atau lebih" }))
        } else {
            setValidation(prevState => ({ ...prevState, name: "" }))
            setFormData(prevState => ({ ...prevState, name: e.target.value }))
        }
    }

    const onChangePassword = (e) => {
        if (e.target.value.length < 6) {
            setValidation(prevState => ({ ...prevState, password: "Password harus 6 karakter atau lebih" }))
        } else {
            setValidation(prevState => ({ ...prevState, password: "" }))
            setFormData(prevState => ({ ...prevState, password: e.target.value }))
        }
    }

    const onChangeEmail = (e) => {
        setFormData(prevState => ({ ...prevState, email: e.target.value }))
    }



    const onSubmit = (e) => {
        e.preventDefault()
        if (formData.name.length === '' || formData.email.length === '' || formData.password.length === '' || validation.name !== '' || validation.password !== '') {
            if (validation.name !== '' && validation.password !== '') {
                toast.warn(validation.name, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
                toast.warn(validation.password, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else if (validation.name !== '') {
                toast.warn(validation.name, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else if (validation.password !== '') {
                toast.warn(validation.password, {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            } else {
                toast.warn('Form tidak ada yang boleh kosong', {
                    position: "top-right",
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: false,
                    draggable: true,
                    progress: undefined,
                });
            }

        } else {
            const userData = {
                name, email, password
            }

            dispatch(register(userData))
        }
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
                                        value="Nama atau Username"
                                    />
                                </div>
                                <TextInput
                                    id="nama"
                                    type="text"
                                    name='name'
                                    disabled={isLoading ? true : false}
                                    onChange={onChangeName}
                                    color={validation.name.length > 1 ? 'failure' : ''}
                                    required={true}
                                />
                                {validation.name.length > 1 ? (<>
                                    <small className='text-red-400 font-normal'>{validation.name}</small>
                                </>) : ''}
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
                                    disabled={isLoading ? true : false}
                                    placeholder="name@usedup.com"
                                    color='light'
                                    onChange={onChangeEmail}
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
                                    onChange={onChangePassword}
                                    name='password'
                                    disabled={isLoading ? true : false}
                                    color={validation.password.length > 1 ? 'failure' : ''}
                                    required={true}
                                />
                                {validation.password.length > 1 ? (<>
                                    <small className='text-red-400 font-normal'>{validation.password}</small>
                                </>) : ''}
                            </div>

                            {isLoading ? (
                                <Button color='dark' disabled={true}>
                                    <div className="mr-3">
                                        <Spinner
                                            size="sm"
                                            light={true}
                                        />
                                    </div>
                                    Please wait ...
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