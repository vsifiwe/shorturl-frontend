import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userInfo: {
    name: "",
    emailId: "",
  },
};

export const slice = createSlice({
  name: "googleLogin",
  initialState,
  reducers: {
    responseGoogleSuccess: (state, action) => {
      console.log(action.payload);
      let newUserInfo = {
        name: action.payload.profileObj.name,
        emailId: action.payload.profileObj.email,
      };
      state.userInfo = newUserInfo;
      state.isLoggedIn = true;
    },
    responseGoogleError: (state, action) => {
      console.log(action.payload);
    },
    handleLogout: (state) => {
      let newUserInfo = {
        name: "",
        emailId: "",
      };
      state.userInfo = newUserInfo;
      state.isLoggedIn = false;
    },
    handleEmailLogin: (state, action) => {
      console.log(action.payload);
    },
  },
});
export const {
  responseGoogleSuccess,
  responseGoogleError,
  handleLogout,
  handleEmailLogin,
} = slice.actions;

export default slice.reducer;
