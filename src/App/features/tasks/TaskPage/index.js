import Section from "../../../common/Section";
import Header from "../../../common/Header";
import Container from "../../../common/Container";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById, setTasks } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id), (setTasks));

    return (
        <Container>
            <Header title="Task details" />
            <Section
                title={task ? task.content : "There is no such task on the list, sorry!"}
                body={task && (
                    <>
                        <strong>Completed:</strong> {task.done ? "Yes" : "No"}
                    </>
                )
                }
            />
        </Container>
    )
};

export default TaskPage;