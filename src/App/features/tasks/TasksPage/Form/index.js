import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";
import Input from "../Input";
import { Button, StyledForm } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null)

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedNewTaskContent = newTaskContent.trim();

        if (trimmedNewTaskContent) {

            dispatch(addTask({
                content: trimmedNewTaskContent,
                done: false,
                id: nanoid(),
            }))

            setNewTaskContent("");
            inputRef.current.focus()
        };
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                placeholder="What should I do today?"
                value={newTaskContent}
                onChange={({ target }) => setNewTaskContent(target.value)} />
            <Button>
                Add task
            </Button>
        </StyledForm>
    )
};

export default Form;