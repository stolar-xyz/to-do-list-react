import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { Content, Item, Button, Tasks } from "./styled";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <Tasks>
        {tasks.map(task => (
            <Item
                key={task.id}
                hidden={task.done && hideDone}
            >
                <Button
                    toggleDone={task.done}
                    onClick={() => toggleTaskDone(task.id)}>
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
);

export default List;