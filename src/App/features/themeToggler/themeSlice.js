import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../saveDataInLocalStorage";

const themeSlice = createSlice({
    name: 'theme',
    initialState: {
        darkTheme: getDataFromLocalStorage("darkTheme"),
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