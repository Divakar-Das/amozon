import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  mobile: '',
  password: '',
  userName: '', 
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserDetails: (state, action) => {
      const { mobile, password } = action.payload;
      state.mobile = mobile;
      state.password = password;
    },
    clearUserDetails: (state) => {
      state.mobile = '';
      state.password = '';
      state.userName = '';
    },
    setUserName: (state, action) => {
      state.userName = action.payload;
    },
  },
});

export const { setUserDetails, clearUserDetails, setUserName } = userSlice.actions;
export default userSlice.reducer;
