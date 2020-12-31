import React from "react";
import Form from "./Form";
import List from "./List"

const tasks = [
  { id: 1, content: "test1", done: true },
  { id: 2, content: "test2", done: false },
];

const hideDoneTasks = false;

function App() {
  return (
    <main classNameName="container">
      <header>
        <h1>To-do List</h1>
      </header>
      <section className="section">
        <h2 className="section__header">Add new task</h2>
        <div className="section__body">
          <Form />
        </div>
      </section>
      <section className="section">
        <div className="section__container">
          <h2 className="section__header">Task List</h2>
          <div className="section__buttonsContainer">
          </div>
        </div>
        <div className="section__body">
          <List tasks={tasks} hideDoneTasks={hideDoneTasks} />
        </div>
      </section>
    </main>
  );
}

export default App;
