import { io } from 'socket.io-client'

// const socket = io("https://usedup-backend.up.railway.app")
const socket = io("http://localhost:3001")

export default socket