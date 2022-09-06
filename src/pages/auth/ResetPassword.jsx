import { Button, TextInput, Card, Spinner } from 'flowbite-react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import api from '../../utils/api'
import { useParams, useNavigate } from 'react-router-dom'

function ResetPassword() {
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        const checkToken = async () => {
            try {
                const response = await axios.post(api + '/resetpassword', {
                    id: params.id,
                    token: params.token
                })

                if (response.data.status === false || response.data.data === null) {
                    navigate('/login', { replace: true })
                }

            } catch (error) {
                alert(error)
            }
        }

        checkToken()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const params = useParams()
    const navigate = useNavigate()

    const onSubmit = async (e) => {
        e.preventDefault()

        if (e.target.password1.value !== e.target.password2.value) {
            alert('password not same')
            return
        }

        if (e.target.password1.value.length < 6 || e.target.password2.value.length < 6) {
            alert('Password harus 6 karakter atau lebih')
            return
        }

        try {
            setIsLoading(true)
            const response = await axios.post(api + '/resetpasswordpost', {
                id: params.id,
                password: e.target.password1.value
            })

            setIsLoading(false)
            if (response.data.status === true) {
                navigate('/login?reset=true')
            }
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
                            <h2 className='font-bold text-3xl'>Reset Password</h2>
                        </div>
                    </div>
                    <form className="flex flex-col gap-4" onSubmit={onSubmit}>
                        <div>
                            <TextInput
                                id="password1"
                                type="password"
                                name='password1'
                                disabled={isLoading ? true : false}
                                placeholder="Password Baru"
                                required={true}
                            />
                        </div>
                        <div>
                            <TextInput
                                id="password2"
                                type="password"
                                disabled={isLoading ? true : false}
                                name='password2'
                                placeholder='Konfirmasi Password Baru'
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
                                Loggin in ...
                            </Button>
                        ) : (
                            <Button type="submit" color="dark">
                                Reset Password
                            </Button>
                        )}
                    </form>
                </Card>
            </div>
        </div>
    )
}

export default ResetPassword