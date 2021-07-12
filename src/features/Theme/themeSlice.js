import { createSlice } from "@reduxjs/toolkit";
import { availableThemes } from "./themes";

const localStorageTheme = localStorage.getItem("witwTheme");

const initialState = {
  currentTheme: localStorageTheme ? localStorageTheme : availableThemes.Light,
};

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    changeTheme: (state, action) => {
      const theme = action.payload;
      state.currentTheme = theme;
      localStorage.setItem("witwTheme", theme);
    },
  },
});

export const { changeTheme } = themeSlice.actions;

export const selectTheme = (state) => state.theme.currentTheme;

export default themeSlice.reducer;
