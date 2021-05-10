import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import Search from "./Search";
import ThemeToggler from "../../themeToggler/ThemeToggler";

const TasksPage = () => (
    <Container>
        <Header
            title="To-do List"
            extraHeaderContent={<ThemeToggler />}
        />
        <Section
            title="Add new task"
            body={<Form />}
        />
        <Section
            title="Search"
            body={<Search />}
        />
        <Section
            title="Task List"
            body={<TaskList />}
            extraHeaderContent={<Buttons />}
        />
    </Container>
);

export default TasksPage;
