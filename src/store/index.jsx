import { configureStore } from "@reduxjs/toolkit";
import authReducers from "./authSlice";
import statusReducer from "./statusSlice";

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
    status: statusReducer,
  },
  devTools: true,
  middleware: () => [],
});

export const persistor = persistStore(store);
