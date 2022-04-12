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
    deviceInfo: [],
    impressions: 0,
    currentUrl: ''
  },
  shorturls: [],
  deviceInfo: [],
  qrColor: "#000000"
};

export const slice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    responseGoogleSuccess: (state, action) => {
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
    responseGoogleError: (state, action) => {
      console.log(action.payload);
    },
    handleLogout: (state) => {
      
      state.isLoading = false;
      state.isLoggedIn = false;
      state.userInfo.emailId = "";
      state.userInfo.name = "";
      state.currentView.currentUrl = "";
      state.currentView.data = [];
      state.currentView.deviceInfo = [];
      state.currentView.impressions = 0;
      state.tokens.access = "";
      state.tokens.refresh = "";
      state.deviceInfo = [];
      state.shorturls = [];
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
      state.currentView.deviceInfo = deviceInfo
      // state.currentView.data = deviceInfo;
      state.isLoading = false;
    },
    updateCurrentView: (state, action) => {
      let { data, impressions, shortUrl } = action.payload
      state.currentView.deviceInfo = data
      state.currentView.data = data
      state.currentView.impressions = impressions
      state.currentView.currentUrl = shortUrl
    },
    createNewLinkSuccess: (state, action) => {
      let d = action.payload
      d['data'] = []
      d['deviceInfo'] = []
      state.shorturls.push(d)
    },
    changeQrColor: (state, action) => {
      state.qrColor = action.payload
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
  updateCurrentView,
  createNewLinkSuccess,
  changeQrColor
} = slice.actions;

export default slice.reducer;
