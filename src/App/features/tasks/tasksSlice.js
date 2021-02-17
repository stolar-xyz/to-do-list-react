import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
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
    },
});

export const {
    addTask,
    toggleHideDone,
    toggleTaskDone,
    deleteAllTasks,
    markAllAsDone,
    removeTask
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export default tasksSlice.reducer;