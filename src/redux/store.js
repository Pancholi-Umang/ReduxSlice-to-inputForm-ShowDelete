import { configureStore } from "@reduxjs/toolkit";
import AddSlice from "./AddSlice";

const store = configureStore({
  reducer:{
    add:AddSlice
  }
})

export default store