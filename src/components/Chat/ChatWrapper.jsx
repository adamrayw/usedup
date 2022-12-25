/* eslint-disable react-hooks/exhaustive-deps */
import { IoIosSend } from 'react-icons/io'
import { io } from 'socket.io-client'
import { useEffect, useState, useRef } from 'react'
import axios from 'axios'
import api from '../../utils/api'
import { useDispatch } from 'react-redux'
import { triggerNow } from '../../features/chat/chatSlice'
import { toast } from 'react-toastify'
import { MdNotifications } from 'react-icons/md'

const socket = io("https://usedup-backend.up.railway.app:3001", {
    transports: ['websocket']
})

function ChatWrapper({ room }) {
    const [messageReceived, setMessageReceived] = useState([])
    const [message, setMessage] = useState("")
    const [roomChat, setRoomChat] = useState(room)
    const messageEndRef = useRef(null)
    const userId = JSON.parse(localStorage.getItem('user')) ?? null

    const dispatch = useDispatch()

    function getHoursAndMinutes() {
        const now = new Date()
        const current = now.getHours() + ':' + now.getMinutes()
        return current
    }

    const getChatMsg = async () => {
        try {
            const response = await axios.get(api + "/chat/msg/" + room)
            setMessageReceived(response.data.response.Message);
        } catch (error) {

        }
    }

    const sendMessage = async () => {
        socket.emit("send_message", { message, roomChat })
        const user = {
            userId: userId.id,
            message,
            time: getHoursAndMinutes()
        }
        setMessageReceived((data) => [...data, user])

        // post to api
        try {
            await axios.post(api + '/chat/send/msg', {
                roomId: room,
                userId: userId.id,
                message
            })
        } catch (error) {
            alert('something went wrong')
        }
        setMessage("")
    }

    useEffect(() => {
        setMessage('')
        setMessageReceived([])
    }, [room])

    useEffect(() => {
        socket.emit("join_room", { roomChat });
        getChatMsg()
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [room])

    useEffect(() => {
        socket.on("receive_message", (data) => {
            const user2 = {
                id: 2,
                message: data.message,
                time: getHoursAndMinutes()
            }
            messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
            dispatch(triggerNow())
            toast('Ada pesan baru!', {
                icon: <MdNotifications className='text-blue-500' />,
                position: "top-right",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable: true,
                progress: undefined,
            })
            setMessageReceived(mess => [...mess, user2])
        })
    }, [socket])

    useEffect(() => {
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, [message])

    function timeFormatter(timestamp) {
        const myTimestamp = new Date(timestamp)
        // return myTimestamp.getHours() + ":" + padTo2Digits(myTimestamp.getMinutes())
        return myTimestamp.toLocaleTimeString('id-ID', {
            hour: "2-digit", minute: "2-digit"
        });
    }

    return (
        <>
            <div className='w-full h-80 px-4 overflow-y-auto ' >
                {messageReceived.map((user) =>
                    user.userId !== userId.id ? (
                        <div className='my-4' key={user.id}>
                            <div key={user.id} className='bg-blue-500 text-white w-44 break-words py-2 px-3 rounded-lg '>
                                <p className='text-sm'>{user.message}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 py-1'>{user.createdAt === undefined ? user.time : timeFormatter(user.createdAt)}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='my-4' key={user.id}>
                            <div key={user.id} className='bg-black w-44 text-white ml-auto break-words py-3 px-4 rounded-lg '>
                                <p className='text-sm'>{user.message}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 py-1 text-right'>{user.createdAt === undefined ? user.time : timeFormatter(user.createdAt)}</p>
                            </div>
                        </div>
                    )

                )}
                <div ref={messageEndRef} />
            </div>
            <div className='relative'>
                <div className='absolute w-full top-0 textField '>
                    <input type="text" className='w-full border-0 bg-gray-50 border-b border-gray-300 placeholder-gray-300' placeholder='Ketik pesan...' onChange={(e) => setMessage(e.target.value)} value={message} />
                    <button className='shadow flex items-center px-3 mt-4 py-2 ml-auto hover:bg-gray-50 active:bg-gray-100 transition' onClick={
                        () => {
                            sendMessage()
                            dispatch(triggerNow())
                        }
                    }>
                        <IoIosSend className='w-5 h-5' />
                        Kirim
                    </button>
                </div>
            </div>
        </>

    )
}

export default ChatWrapper