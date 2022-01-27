import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: null
}

export const hotels = createSlice({
    name: 'user',
    initialState,
    reducers: {
        SET_USER: (state, action) => {
            state.user = action.payload
        },
    }
})

export const {
    SET_USER,
} = user.actions

export default user.reducer