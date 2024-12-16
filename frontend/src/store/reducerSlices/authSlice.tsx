import { createAsyncThunk, createSlice, PrepareAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  authenticated: false,
  isLoading: false,
  token: null,
  error: "",
};
export const loginUser = createAsyncThunk(
  "auth/login",
  async function (
    { email, password }: { email: string; password: string },
    thunkApi
  ) {
    const { data } = await axios.post("http://localhost:5001/auth/login", {
      email,
      password,
    });

    console.log(data);
    return data;
  }
);

const authSlice = createSlice({
  initialState,
  name: "auth",
  reducers: {
    // login: {
    //   prepare: (emailOrPhone: string, password: string) => {
    //     return {
    //       payload: { password, emailOrPhone, error:"" },
    //     };
    //   },
    //   reducer: (state, action) => {
    //     // return {isLoading:false, authenticated:true, token:action.payload}
    //     // state.authenticated = true;
    //     // state.isLoading = false;
    //     // state.token = action.payload
    //   },
    //   extraReducers: (builder) => {
    //    builder.addCase()
    //  }
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.authenticated = true;
        state.isLoading = false;
        state.token = action.payload;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.authenticated = false;
        state.isLoading = false;
        state.token = null;
        state.error = "login failed";
      });
  },
});

export default authSlice.reducer;
