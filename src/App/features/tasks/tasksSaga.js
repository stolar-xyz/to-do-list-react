import { takeLatest, call, put, takeEvery, select } from "redux-saga/effects";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage, saveHideDoneInLocalStorage } from "./tasksLocalStorage";
import { fetchExampleTasks, selectHideDone, selectTasks, setTasks } from "./tasksSlice";

function* fetchExampleTasksHandler() {
    try {
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        yield call(alert, "Something went wrong!")
    };
};

function* saveTasksInLocalStorageHandler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks);
};

function* saveHideDoneInLocalStorageHandler() {
    const hideDone = yield select(selectHideDone);
    yield call(saveHideDoneInLocalStorage, hideDone);
};

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery("*", saveTasksInLocalStorageHandler);
    yield takeEvery("*", saveHideDoneInLocalStorageHandler);
};