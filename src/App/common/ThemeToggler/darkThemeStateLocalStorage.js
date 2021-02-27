const localStorageDarkTheme = "darkTheme";

export const saveDarkThemeInLocalStorage = darkTheme =>
    localStorage.setItem(localStorageDarkTheme, JSON.stringify(darkTheme));

export const getDarkThemeFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageDarkTheme)) || false;