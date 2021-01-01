import React from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";

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
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="Task List"
        body={<List tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />
    </main>
  );
}

export default App;
