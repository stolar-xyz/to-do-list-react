import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Content, Item, Button, Tasks, StyledLink } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName)

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);

    const dispatch = useDispatch();

    return (
        <Tasks>
            {tasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone={task.done}
                        onClick={() => dispatch(toggleTaskDone(task.id))}>
                        <FaCheck title="check mark" />
                    </Button>
                    <Content done={task.done}>
                        <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
                    </Content>
                    <Button
                        remove
                        onClick={() => dispatch(removeTask(task.id))}>
                        <FaTimes title="cross mark" />
                    </Button>
                </Item>
            ))}
        </Tasks>
    )
};

export default TaskList;