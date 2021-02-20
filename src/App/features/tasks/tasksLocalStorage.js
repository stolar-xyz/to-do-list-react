const localStorageTasks = "tasks";
const localStorageHideDone = "hideDone";

export const saveTasksInLocalStorage = tasks =>
    localStorage.setItem(localStorageTasks, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageTasks)) || [];

export const saveHideDoneInLocalStorage = hideDone =>
    localStorage.setItem(localStorageHideDone, JSON.stringify(hideDone));

export const getHideDoneFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageHideDone)) || false;