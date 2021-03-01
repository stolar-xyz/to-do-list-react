export const saveDataInLocalStorage = (key, value) =>
    localStorage.setItem(key, JSON.stringify(value));

export const getDataFromLocalStorage = key =>
    JSON.parse(localStorage.getItem(key));