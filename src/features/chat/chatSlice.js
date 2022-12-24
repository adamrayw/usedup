import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    trigger: false
}

export const triggerLastChatSlice = createSlice({
    name: 'trigger',
    initialState,
    reducers: {
        triggerNow: (state) => {
            state.trigger = !state.trigger
        }
    }
})

export const { triggerNow } = triggerLastChatSlice.actions

export default triggerLastChatSlice.reducer