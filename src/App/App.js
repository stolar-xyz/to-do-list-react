import React from "react";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";

const App = () => (
    <HashRouter>
        <nav>
            <ul>
                <li>
                    <Link to="/tasks">Tasks</Link>
                </li>
                <li>
                    <Link to="/author">Author</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/tasks/:id">
                    <TaskPage />
                </Route>
                <Route path="/tasks">
                    <TasksPage />
                </Route>
                <Route path="/author">
                    <AuthorPage />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;