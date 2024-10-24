import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    messages: []
};

const messageSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        addToMessage(state, action) {
            const newMessage = action.payload;
            state.messages.push({
                name: newMessage.name,
                text: newMessage.text
            });
        }
    }
});

export const { addToMessage } = messageSlice.actions;
export default messageSlice.reducer