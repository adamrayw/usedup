import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formService from './formService'

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
    foto: []
}

export const formMobilBekas = createAsyncThunk('form/mobil-bekas', async (data, thunkAPI) => {
    try {
        const token = thunkAPI.getState().auth.user ? thunkAPI.getState().auth.user.token : null
        return await formService.formMobilBekas(data, token)
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()

        return thunkAPI.rejectWithValue(message)
    }
})

export const formSlice = createSlice({
    name: 'form',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        },
        uploadFile: (state, action) => {
            state.foto.push(action.payload)
        },
        resetUpload: (state, action) => {
            state.foto = []
        },
        removeFoto: (state, action) => {
            const findIndex = state.foto.findIndex(e => e.name === action.payload.name)
            state.foto.splice(findIndex, 1)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(formMobilBekas.pending, (state) => {
                state.isLoading = true
            })
            .addCase(formMobilBekas.fulfilled, (state) => {
                state.isLoading = false
                state.isSuccess = true
            })
            .addCase(formMobilBekas.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
            })
    }
})

export const { reset, uploadFile, resetUpload, removeFoto } = formSlice.actions
export default formSlice.reducer