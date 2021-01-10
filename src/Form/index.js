import React, { useState } from "react";
import "./style.css";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();

        if (newTaskContent) {
            addNewTask(newTaskContent.trim());
            setNewTaskContent("");
        };
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input className="form__input" placeholder="What should I do today?" value={newTaskContent} onChange={({ target }) => setNewTaskContent(target.value)} />
            <button className="form__button">Add task</button>
        </form>
    )
};

export default Form;