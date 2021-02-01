import React, { useState } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent) {
            addNewTask(trimmedNewTaskContent);
            setNewTaskContent("");
        };
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                placeholder="What should I do today?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>Add task</Button>
        </StyledForm>
    )
};

export default Form;