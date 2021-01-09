import React from "react";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

const tasks = [
  { id: 1, content: "test1", done: true },
  { id: 2, content: "test2", done: false },
];

const hideDone = false;

function App() {
  return (
    <Container>
      <Header title="To-do List" />
      <Section
        title="Add new task"
        body={<Form />}
      />
      <Section
        title="Task List"
        body={<List tasks={tasks} hideDone={hideDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} />}
      />
    </Container>
  );
}

export default App;
