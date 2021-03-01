import { createSlice } from "@reduxjs/toolkit";
import { getDataFromLocalStorage } from "../saveDataInLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getDataFromLocalStorage("tasks") || [],
        hideDone: getDataFromLocalStorage("hideDone") || false,
        loading: false,
    },
    reducers: {
        addTask: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },
        toggleHideDone: state => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks[index].done = !tasks[index].done;
        },
        deleteAllTasks: state => {
            state.tasks = [];
        },
        markAllAsDone: ({ tasks }) => {
            tasks.forEach(task => task.done = true);
        },
        removeTask: ({ tasks }, { payload }) => {
            const index = tasks.findIndex(({ id }) => id === payload);
            tasks.splice(index, 1);
        },
        fetchExampleTasks: () => {

        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        setLoadingExampleTasks: (state, { payload }) => {
            state.loading = payload;
        }
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    deleteAllTasks,
    markAllAsDone,
    removeTask,
    fetchExampleTasks,
    setTasks,
    setLoadingExampleTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;
export const selectLoading = state => selectTasksState(state).loading;

export const getTaskById = (state, taskId) => selectTasks(state).find(({ id }) => id === taskId);

export const selectTasksByQuery = (state, query) => {
    const tasks = selectTasks(state);

    if (!query || query.trim() === "") {
        return tasks;
    };

    return selectTasks(state).filter(({ content }) => content.toUpperCase().includes(query.trim().toUpperCase()));
};

export default tasksSlice.reducer;