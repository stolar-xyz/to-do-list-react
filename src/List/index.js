import React from "react";
import "./style.css";
import { FaCheck, FaTimes } from "react-icons/fa";

const List = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                key={task.id}
                className={`list__item ${hideDone && task.done ? "list__item--hidden" : ""}`}>
                <button className={`list__button list__button--done ${task.done ? "list__button--done-js" : ""}`} onClick={() => toggleTaskDone(task.id)}><FaCheck title="check mark" /></button>
                <span className={`list__content ${task.done ? "list__content--special" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove" onClick={() => removeTask(task.id)}><FaTimes title="cross mark" /></button>
            </li>
        ))}
    </ul>
);

export default List;