const localStorageTasks = "tasks";
const localStorageHideDone = "hideDone";

export const saveTasksStateInLocalStorage = (tasks, hideDone) => {
    localStorage.setItem(localStorageTasks, JSON.stringify(tasks));
    localStorage.setItem(localStorageHideDone, JSON.stringify(hideDone));
};

export const getTasksFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageTasks)) || [];

export const getHideDoneFromLocalStorage = () =>
    JSON.parse(localStorage.getItem(localStorageHideDone)) || false;