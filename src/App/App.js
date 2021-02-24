import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink, List, Navigation, ListItem } from "./styled";
import { toAuthor, toTask, toTasks } from "./routes";

const App = () => (
    <HashRouter>
        <Navigation>
            <List>
                <ListItem>
                    <StyledNavLink to={toTasks()}>Tasks</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to={toAuthor()}>Author</StyledNavLink>
                </ListItem>
            </List>
        </Navigation>
        <Switch>
            <Route path={toTask()}>
                <TaskPage />
            </Route>
            <Route path={toTasks()}>
                <TasksPage />
            </Route>
            <Route path={toAuthor()}>
                <AuthorPage />
            </Route>
            <Route>
                <Redirect to={toTasks()} />
            </Route>
        </Switch>
    </HashRouter>
);

export default App;