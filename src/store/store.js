import { configureStore } from "@reduxjs/toolkit";
import usersSlice from "../pages/landingPage/usersSlice";
import singleUserSlice from "../pages/profilePage/singleUserSlice";


const store = configureStore({
  reducer: {
    activeUser: singleUserSlice, 
    users: usersSlice, 
  },
});

export default store;
