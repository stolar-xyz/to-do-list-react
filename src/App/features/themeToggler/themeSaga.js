import { takeLatest, call, select } from "redux-saga/effects";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";
import { saveDarkThemeInLocalStorage } from "./darkThemeStateLocalStorage";

function* saveDarkThemeStateInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveDarkThemeInLocalStorage, darkTheme);
};

export function* themeSaga() {
    yield takeLatest(toggleDarkTheme.type, saveDarkThemeStateInLocalStorageHandler);
};

