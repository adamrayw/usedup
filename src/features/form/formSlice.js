import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import formService from './formService'

const initialState = {
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const formMobilBekas = createAsyncThunk('form/mobil-bekas', async (data, thunkAPI) => {
    try {
        return await formService.formMobilBekas(data)
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

export const { reset } = formSlice.actions
export default formSlice.reducer