import { takeLatest, call, select } from "redux-saga/effects";
import { selectDarkTheme, toggleDarkTheme } from "./themeSlice";
import { saveDataInLocalStorage } from "../saveDataInLocalStorage";

function* saveDarkThemeStateInLocalStorageHandler() {
    const darkTheme = yield select(selectDarkTheme);
    yield call(saveDataInLocalStorage, "darkTheme", darkTheme);
};

export function* themeSaga() {
    yield takeLatest(toggleDarkTheme.type, saveDarkThemeStateInLocalStorageHandler);
};

