import { createAsyncThunk, createSlice, PrepareAction } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: false,
  error: "",
  userId: "",
};
export const createUser = createAsyncThunk(
  "user/createUser",
  async function (signupdata: {
    email: string;
    password: string;
    gender: string;
    dob: {
      birth_day: number;
      birth_month: number;
      birth_year: number;
    };
  }) {
    const { data } = await axios.post("users/create", signupdata);
    return data;
  }
);
const userSlice = createSlice({
  initialState,
  name: "user",
  reducers: {
    // createUser: {
    //   prepare: (emailOrPhone: string, password: string) => {
    //     return {
    //       payload: { password, emailOrPhone },
    //     };
    //   },
    //   reducer: async (state, action) => {},
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createUser.pending, (state, action) => {
        state.isLoading = true;
      })

      .addCase(createUser.rejected, (state, action) => {
        console.log(action.error.message);
        state.error = action.error.message as string;
        state.isLoading = false;
      });
  },
});

export default userSlice.reducer;
