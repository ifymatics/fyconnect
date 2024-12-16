import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import authSlice from "./reducerSlices/authSlice";
import userSlice from "./reducerSlices/userSlice";
import { useDispatch } from "react-redux";

const store = configureStore({
  reducer: {
    auth: authSlice,
    user: userSlice,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export const useAppDispatch = () => useDispatch<AppDispatch>();
