import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  isLoading: false,
  userInfo: {
    name: "",
    emailId: "",
  },
  tokens: {
    access: "",
    refresh: ""
  },
  currentView: {
    data: [
      {time: "12:00", amount: 1000},
      {time: "13:00", amount: 1500},
      {time: "14:00", amount: 1000},
      {time: "15:00", amount: 2000},
      {time: "16:00", amount: 3000},
      {time: "17:00", amount: 1000},
    ],
    impressions: 0
  }
};

export const slice = createSlice({
  name: "auth",
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
    startEmailLogin: (state) => {
      state.isLoading = true;
    },
    handleEmailLogin: (state, action) => {
      let newUserInfo = {
        name: action.payload.username,
        emailId: action.payload.email,
      }

      let tokens = {
        access: action.payload.tokens.access, 
        refresh: action.payload.tokens.refresh
      }

      state.userInfo = newUserInfo;
      state.tokens = tokens;
      state.isLoading = false;
    },
  },
});
export const {
  responseGoogleSuccess,
  responseGoogleError,
  handleLogout,
  handleEmailLogin,
  startEmailLogin,
} = slice.actions;

export default slice.reducer;
