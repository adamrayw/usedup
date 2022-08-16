import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import formReducer from '../features/form/formSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        form: formReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store