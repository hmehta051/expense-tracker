import { configureStore } from "@reduxjs/toolkit";
import expenseSlice from "./slice/expenseSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Choose your storage type

const persistConfig = {
  key: "root", // This is the key under which your persisted data will be stored
  storage,
  // Add any additional configuration options as needed
  // Add any additional configuration options as needed
  // blacklist: ["expense"], // Add the reducer key you want to whitelist
  // blacklist: [], // If you want to use blacklist, uncomment this line and add the reducer keys you want to exclude
};

const persistedReducer = persistReducer(persistConfig, expenseSlice);

const store = configureStore({
  reducer: {
    expense: persistedReducer,
  },
});
export const persistor = persistStore(store);
export default store;

// export default store;
