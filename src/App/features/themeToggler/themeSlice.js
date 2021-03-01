import { createSlice } from "@reduxjs/toolkit";
import { getDarkThemeFromLocalStorage } from "./darkThemeStateLocalStorage";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: getDarkThemeFromLocalStorage(),
    },
    reducers: {
        toggleDarkTheme: state => {
            state.darkTheme = !state.darkTheme;
        },
    },
});

export const {
    toggleDarkTheme,
} = themeSlice.actions;

export const selectDarkTheme = state => state.theme.darkTheme;

export default themeSlice.reducer;