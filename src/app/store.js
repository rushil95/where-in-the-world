import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/Theme/themeSlice";
import countriesReducer from "../features/Countries/countriesSlice"

const store = configureStore({
  reducer: {
    theme: themeReducer,
    countries : countriesReducer
  },
});

export default store;
