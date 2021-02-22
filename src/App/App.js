import React from "react";
import { HashRouter, Link, Redirect, Route, Switch } from "react-router-dom";
import Author from "./features/author/Author";
import Tasks from "./features/tasks/Tasks";

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
                <Route path="/tasks">
                    <Tasks />
                </Route>
                <Route path="/author">
                    <Author />
                </Route>
                <Route path="/">
                    <Redirect to="/tasks" />
                </Route>
            </Switch>
        </nav>
    </HashRouter>
);

export default App;