import { configureStore } from "@reduxjs/toolkit";
import usersReducer from "./users.reducer";

export default configureStore({
  reducer: {
    user: usersReducer,
  }
})