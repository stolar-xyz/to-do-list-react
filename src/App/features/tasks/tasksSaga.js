import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksStateInLocalStorage } from "./tasksStateLocalStorage";
import { fetchExampleTasks, selectHideDone, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong!")
    };
};

function* saveTasksStateInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    const hideDone = yield select(selectHideDone);
    yield call(saveTasksStateInLocalStorage, tasks, hideDone);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksStateInLocalStorageHandler);
};