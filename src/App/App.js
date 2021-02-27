import React from "react";
import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./features/author/AuthorPage";
import TasksPage from "./features/tasks/TasksPage/index";
import TaskPage from "./features/tasks/TaskPage/index";
import Navigation from "./common/Navigation";
import { toAuthor, toTask, toTasks } from "./routes";
import { ThemeProvider } from "styled-components";
import { theme, darkTheme } from "./theme";
import { useSelector } from "react-redux";
import { selectDarkTheme } from "./common/ThemeToggler/themeSlice";
import { GlobalStyle } from "./GlobalStyle";

const App = () => {
    const isThemeDark = useSelector(selectDarkTheme)

    return (
        <ThemeProvider theme={isThemeDark ? darkTheme : theme}>
            <GlobalStyle />
            <HashRouter>
                <Navigation />
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
        </ThemeProvider>
    );
};

export default App;