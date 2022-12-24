import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import formReducer from '../features/form/formSlice'
import chatReducer from '../features/chat/chatSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        form: formReducer,
        chat: chatReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store