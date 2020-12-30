import React from "react";
import "./style.css";

const Form = () => (
    <form className="form">
        <input className="form__input" placeholder="What should I do today?" />
        <button className="form__button">Add task</button>
    </form>
);

export default Form;