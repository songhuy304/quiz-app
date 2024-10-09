import { configureStore } from "@reduxjs/toolkit";
import { AuthenticationSlice, AuthenticationApi } from "./userSlice/userSlice";
import { ExamsSlice, ExamsApi } from "./examSlice/examSlice";
const store = configureStore({
  reducer: {
    userSlice: AuthenticationSlice.reducer,
    examsSlice: ExamsSlice.reducer,
    [AuthenticationApi.reducerPath]: AuthenticationApi.reducer,
    [ExamsApi.reducerPath]: ExamsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(AuthenticationApi.middleware, ExamsApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
