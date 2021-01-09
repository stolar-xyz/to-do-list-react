import React from "react";
import "./style.css";

const Buttons = ({ tasks, hideDone, toggleHideDone }) => (
    tasks.length > 0 && (
        <div className="buttons">
            <button onClick={toggleHideDone} className="buttons__button">{hideDone ? "Show done tasks" : "Hide done tasks"}</button>
            <button
                className="buttons__button"
                disabled={tasks.every(({ done }) => done)} >Mark all as done</button>
            <button className="buttons__button">Delete all</button>
        </div>
    )
);

export default Buttons;