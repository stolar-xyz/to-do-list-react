import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import { StyledNavLink, List, Navigation, ListItem } from "./styled";

const App = () => (
    <HashRouter>
        <Navigation>
            <List>
                <ListItem>
                    <StyledNavLink exact to="/tasks">Tasks</StyledNavLink>
                </ListItem>
                <ListItem>
                    <StyledNavLink to="/author">Author</StyledNavLink>
                </ListItem>
            </List>
        </Navigation>
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
    </HashRouter>
);

export default App;