import React from "react";
import "./style.css";

const List = ({tasks, hideDoneTasks}) => (
    <ul className="list">
        {tasks.map(task => (
            <li
                className={`list__item ${hideDoneTasks && task.done ? "list__item--hidden" : ""}`}>
                <button className={`list__button list__button--done ${task.done ? "list__button--done-js" : ""}`}>✔</button>
                <span className={`list__content ${task.done ? "list__content--special" : ""}`}>
                    {task.content}
                </span>
                <button className="list__button list__button--remove">✖</button>
            </li>
        ))}
    </ul>
);

export default List;