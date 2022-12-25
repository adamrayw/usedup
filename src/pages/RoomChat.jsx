import { FaUserCircle } from 'react-icons/fa'
import { MdChat } from 'react-icons/md'
import ChatWrapper from '../components/Chat/ChatWrapper'
import { useState } from 'react'
import { RiWechat2Fill } from 'react-icons/ri'
import { useEffect } from 'react'
import axios from 'axios'
import api from '../utils/api'
import { io } from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux'
import { triggerNow } from '../features/chat/chatSlice'

const socket = io("https://usedup-backend.up.railway.app", {
    transports: ['websocket'],
    autoConnect: true
})

function RoomChat() {
    const [isChatting, setIsChatting] = useState(false)
    const [room, setRoom] = useState('')
    const [chatList, setChatList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const trigger = useSelector((state) => state.chat.trigger)
    const dispatch = useDispatch()
    const userId = JSON.parse(localStorage.getItem('user')) ?? null

    const getChatData = async () => {
        try {
            setIsLoading(true)
            const getResponse = await axios.get(api + '/chat/index/' + userId.id)
            setChatList(getResponse.data.message.Participant)
            setIsLoading(false)
        } catch (error) {
            setIsLoading(false)
        }
        // console.log(getResponse.data.message.Participant.Room.Message)

    }

    function joinAllRoom(e) {
        socket.emit("join_room", { e });
    }

    function timeFormatter(timestamp) {
        const myTimestamp = new Date(timestamp)
        // return myTimestamp.getHours() + ":" + padTo2Digits(myTimestamp.getMinutes())
        return myTimestamp.toLocaleTimeString('id-ID', {
            hour: "2-digit", minute: "2-digit"
        });
    }

    useEffect(() => {
        socket.on("receive_message", (data) => {
            dispatch(triggerNow())
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [socket])

    useEffect(() => {
        getChatData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [trigger])

    return (
        <div className="container max-w-6xl h-80 mx-auto px-4 mt-4 mb-60">
            <div className="text-left">
                <h1 className="font-bold md:text-4xl text-xl text-black">Chat</h1>
                <div className="mt-4 flex items-start">
                    <div className='w-1/2'>
                        {isLoading ? (
                            <div className='flex flex-col'>
                                <div className='flex justify-between items-end animate-pulse p-3'>
                                    <div className="flex space-x-3 items-center">
                                        <div>
                                            <FaUserCircle className='p-0.5 text-gray-300 w-12 h-12' />
                                        </div>
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mb-3.5"></div>
                                </div>
                                <div className='flex justify-between items-end animate-pulse p-3'>
                                    <div className="flex space-x-3 items-center">
                                        <div>
                                            <FaUserCircle className='p-0.5 text-gray-300 w-12 h-12' />
                                        </div>
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mb-3.5"></div>
                                </div>
                                <div className='flex justify-between items-end animate-pulse p-3'>
                                    <div className="flex space-x-3 items-center">
                                        <div>
                                            <FaUserCircle className='p-0.5 text-gray-300 w-12 h-12' />
                                        </div>
                                        <div>
                                            <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5"></div>
                                            <div className="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></div>
                                        </div>
                                    </div>
                                    <div className="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12 mb-3.5"></div>
                                </div>
                            </div>
                        ) : (
                            <>
                                {
                                    chatList.length === 0 ? (
                                        <div className='h-80 flex flex-col justify-center items-center '>
                                            <RiWechat2Fill className='w-10 h-10' />
                                            <p className='text-xs p-2 text-center text-gray-400'>Kamu belum melakukan <br /> obrolan dengan siapapun</p>
                                        </div>
                                    ) : (
                                        <>
                                            {chatList.map((e, index) => {
                                                joinAllRoom(e.roomId)
                                                const filtering = e.Room.Participant.filter(id => id.userId !== userId.id)
                                                return (
                                                    <div key={e.id} className='flex flex-row justify-between items-end hover:bg-gray-50 active:bg-gray-100  transition cursor-pointer border-b border-gray-50' onClick={() => {
                                                        setIsChatting(true)
                                                        setRoom(e.roomId)
                                                    }}>
                                                        <div key={index} className=' flex items-center space-x-3 p-3'>
                                                            {filtering[0].User.foto_profile === null ? (
                                                                <FaUserCircle className='p-0.5 border rounded-full text-gray-300 w-12 h-12' />
                                                            ) : (
                                                                <div>
                                                                    <img src={filtering[0].User.foto_profile.url} alt='profile_stranger' className='p-0.5 border rounded-full object-cover w-12 h-12 ' />
                                                                </div>
                                                            )}
                                                            <div>
                                                                <div>
                                                                    <h3 className='font-bold'>{filtering[0].User.name}</h3>
                                                                    <p className='text-sm text-gray-400 text-ellipsis overflow-hidden w-40 whitespace-nowrap'>{e.Room.Message.length < 1 ? '' : e.Room.Message[0].message}</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <p className='text-xs px-3 py-4 text-gray-300'>{e.Room.Message < 1 ? '' : timeFormatter(e.Room.Message[0].createdAt)}</p>
                                                        </div>
                                                    </div>

                                                )
                                            })}
                                        </>
                                    )
                                }
                            </>

                        )}

                    </div>
                    <div className='w-full border-l border-gray-100'>
                        {isChatting ? (
                            <ChatWrapper room={room} />
                        ) : (
                            <div className='flex w-full h-80 justify-center items-center flex-col'>
                                <MdChat className='w-20 h-20 mb-4' />
                                <p className='text-sm text-gray-400 '>Selamat Datang di fitur chat! silahkan lakukan tawar menawar sampai deal!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default RoomChat