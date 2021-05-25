import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {
      userId: null,
      userName: null,
      userEmail: null
    }
  },

  reducers: {
    currentUser: (state, action) => {
      state.user.userId = action.payload.userId
      state.user.userName = action.payload.userName
      state.user.userEmail = action.payload.userEmail
      state.user.userProfilePic = action.payload.userProfilePic
    },

  }
});

export const { currentUser } = appSlice.actions;

export const selectUser = (state) => state.app.user;

export default appSlice.reducer;
