import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    message: '',
    open: false,
};

const SnackSlice = createSlice({
    name: 'message',
    initialState,
    reducers: {
        showMessage: (state, action) => {
            state.message = action.payload.message;
            state.open = true;
        },
        closeMessage: (state) => {
            state.open = false;
        },
        clearMessage: (state) => {
            state.message = '';
            state.open = false;
        },
    },

})

export const { showMessage, closeMessage, clearMessage } = SnackSlice.actions;
export default SnackSlice.reducer;

