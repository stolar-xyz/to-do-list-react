import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { ItemContent, Item, Button, Tasks, StyledLink, Content } from "./styled";
import { toggleTaskDone, removeTask, selectHideDone, selectTasksByQuery, selectAreTasksEmpty } from "../../tasksSlice";
import { useLocation } from "react-router-dom";
import searchQueryParamName from "../searchQueryParamName";

const TaskList = () => {
    const location = useLocation();
    const query = (new URLSearchParams(location.search)).get(searchQueryParamName)

    const tasks = useSelector(state => selectTasksByQuery(state, query));
    const hideDone = useSelector(selectHideDone);
    const areTasksEmpty = useSelector(selectAreTasksEmpty);

    const dispatch = useDispatch();

    return (
        <>
            {areTasksEmpty ?
                <Content>
                    The task list is currently empty. Enjoy your free time!
                </Content>
                :
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
                            <ItemContent done={task.done}>
                                <StyledLink to={`/tasks/${task.id}`}>{task.content}</StyledLink>
                            </ItemContent>
                            <Button
                                remove
                                onClick={() => dispatch(removeTask(task.id))}>
                                <FaTimes title="cross mark" />
                            </Button>
                        </Item>
                    ))}
                </Tasks>
            }
        </>
    )
};

export default TaskList;