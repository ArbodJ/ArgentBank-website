import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    token: null,
    profile: {
      firstName: null,
      lastName: null,
      userName: null,

    }
  },
  reducers: {
    getToken: (state, {payload}) => {
      console.log(payload)
      state.token=payload
    },
    setProfile: (state, {payload})=>{
      state.profile=payload
    }
  }
})
export const {getToken, setProfile } = userSlice.actions
export default userSlice.reducer