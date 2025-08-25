import { configureStore } from "@reduxjs/toolkit";
import { faqBotApi } from "./services/faqBotApi";

export const store = configureStore({
  reducer: { [faqBotApi.reducerPath]: faqBotApi.reducer },
  middleware: (getDefault) => getDefault().concat(faqBotApi.middleware)
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
