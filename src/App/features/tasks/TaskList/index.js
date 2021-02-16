import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Content, Item, Button, Tasks } from "./styled";
import { selectTasks, toggleTaskDone } from "../tasksSlice";

const TaskList = ({ removeTask }) => {
    const { tasks, hideDone } = useSelector(selectTasks);
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
                    <Content
                        done={task.done}>
                        {task.content}
                    </Content>
                    <Button
                        remove
                        onClick={() => removeTask(task.id)}>
                        <FaTimes title="cross mark" />
                    </Button>
                </Item>
            ))}
        </Tasks>
    )
};

export default TaskList;