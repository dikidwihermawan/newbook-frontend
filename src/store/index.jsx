import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice";

import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";

const persistAuthConfig = {
  key: "auth",
  storage,
};

const persistedAuth = persistReducer(persistAuthConfig, authReducers);

export const store = configureStore({
  reducer: {
    auth: persistedAuth,
  },
  devTools: true,
  middleware: () => [],
});

export const persistor = persistStore(store);
