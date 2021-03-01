import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga";
import { themeSaga } from "./features/themeToggler/themeSaga"

export default function* rootSaga() {
    yield all([
        tasksSaga(),
        themeSaga(),
    ])
};