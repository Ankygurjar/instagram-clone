import { createSlice } from '@reduxjs/toolkit';

export const appSlice = createSlice({
  name: 'app',
  initialState: {
    user: {
      docId: null,
      userId: null,
      userName: null,
      userEmail: null,
      userProfilePic: null
    }
  },

  reducers: {
    currentUser: (state, action) => {
      state.user.docId = action.payload.docId
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
