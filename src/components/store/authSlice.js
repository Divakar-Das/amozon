import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLogged: false,
};

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setIsLogged: (state, action) => {
            state.isLogged = action.payload;
        },
    },
});

export const { setIsLogged } = authSlice.actions;
export default authSlice.reducer;
