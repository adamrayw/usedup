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
import { FaUserCircle } from 'react-icons/fa'
import { current } from '@reduxjs/toolkit'
import socket from '../../utils/socket'

function ChatWrapper({ room, chatTo }) {
    const [messageReceived, setMessageReceived] = useState([])
    const [message, setMessage] = useState("")
    const [roomChat, setRoomChat] = useState(room)
    const messageEndRef = useRef(null)
    const chatWindowRef = useRef(null)
    const userId = JSON.parse(localStorage.getItem('user')) ?? null

    const dispatch = useDispatch()

    function getHoursAndMinutes() {
        const now = new Date()
        const current = now.getHours() + ':' + now.getMinutes()
        return current
    }

    const getChatMsg = async () => {

        try {
            const response = await axios.get(api + "chat/msg/" + room)
            setMessageReceived(response.data.response.Message);
        } catch (error) {
            console.log(error)
        }

    }

    const sendMessage = async () => {
        const user = {
            userId: userId.id,
            message,
            time: getHoursAndMinutes()
        }
        socket.emit("send_message", { message, roomChat })
        socket.emit("notification", { user, chatTo })
        setMessageReceived((data) => [...data, user])
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
        // post to api
        try {
            await axios.post(api + 'chat/send/msg', {
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
        chatWindowRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, [messageReceived])


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
        messageEndRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' })
    }, [socket])

    function timeFormatter(timestamp) {
        const myTimestamp = new Date(timestamp)
        // return myTimestamp.getHours() + ":" + padTo2Digits(myTimestamp.getMinutes())
        return myTimestamp.toLocaleTimeString('id-ID', {
            hour: "2-digit", minute: "2-digit"
        });
    }

    return (
        <>
            <div className='shadow py-2 pr-2 pl-4 flex items-center space-x-2'>
                {chatTo.fotoProfile ? (
                    <img src={chatTo.fotoProfile.url} alt="profile" className='p-0.5 border rounded-full object-cover w-10 h-10' />
                ) : (
                    <FaUserCircle className='p-0.5 border rounded-full text-gray-300 w-12 h-12' />
                )}
                <h2 className='font-bold'>{chatTo.name}</h2>
            </div>
            <div className='w-full h-80 px-4 overflow-y-auto '>
                {messageReceived.map((user, index) =>
                    user.userId !== userId.id ? (
                        <div className='my-4' key={index}>
                            <div className='bg-blue-500 text-white w-44 break-words py-2 px-3 rounded-lg '>
                                <p className='text-sm'>{user.message}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 py-1'>{user.createdAt === undefined ? user.time : timeFormatter(user.createdAt)}</p>
                            </div>
                        </div>
                    ) : (
                        <div className='my-4' key={index}>
                            <div className='bg-black w-44 text-white ml-auto break-words py-3 px-4 rounded-lg '>
                                <p className='text-sm'>{user.message}</p>
                            </div>
                            <div>
                                <p className='text-xs text-gray-300 py-1 text-right'>{user.createdAt === undefined ? user.time : timeFormatter(user.createdAt)}</p>
                            </div>
                        </div>
                    )

                )}

                <div ref={messageEndRef} />
                <div ref={chatWindowRef} />
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