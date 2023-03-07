import { createSlice } from "@reduxjs/toolkit";

const chatSlice = createSlice({
    name: "chat",
    initialState : {
        messages: []
    },
    //!TODO : Create a new slice
    //! Creating new comment with better comments
    reducers: {
        addMsgs: (state,action) => {
            
        }
    }
})

export const {addMsgs} = chatSlice.actions
export default chatSlice.reducer