import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState : {
        messages: []
    },
    //!TODO : Create a new slice
    //! Creating new comment with better comments
    //plain comment
    reducers: {
        addMsg: (state,action) => {
            state.messages.splice(20, 1)
            state.messages.unshift(action.payload)
        }
    }
})

export const {addMsg} = chatSlice.actions
export default chatSlice.reducer