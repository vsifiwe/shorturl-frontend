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
      {device: "ios", amount: 355},
      {device: "windows", amount: 1500},
      {device: "mobile chrome", amount: 567},
      {device: "android", amount: 1786},
      {device: "mobile safari", amount: 234},
      {device: "macos", amount: 127},
    ],
    impressions: 0
  },
  shorturls: [],
  deviceInfo: []
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
      state.isLoggedIn = true;
    },
    startLoading: (state) => {
      state.isLoading = true
    },
    loadData: (state, action) => {
      const { totalViews, shorturls, deviceInfo } = action.payload;
      state.currentView.impressions = totalViews;
      state.shorturls = shorturls;
      state.deviceInfo = deviceInfo;
      state.currentView.data = deviceInfo;
      state.isLoading = false;
    },
    updateCurrentView: (state, action) => {
    }
  },
});
export const {
  responseGoogleSuccess,
  responseGoogleError,
  handleLogout,
  handleEmailLogin,
  startEmailLogin,
  startLoading,
  loadData,
  updateCurrentView
} = slice.actions;

export default slice.reducer;
