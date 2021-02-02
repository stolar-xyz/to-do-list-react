import React, { useState } from "react";
import { useTasks } from "./useTasks";
import Form from "./Form";
import List from "./List";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container"

function App() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    markAllAsDone,
    addNewTask,
    deleteAll,
  } = useTasks();

  return (
    <Container>
      <Header title="To-do List" />
      <Section
        title="Add new task"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Task List"
        body={<List tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleTaskDone={toggleTaskDone} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDone={hideDone} toggleHideDone={toggleHideDone} markAllAsDone={markAllAsDone} deleteAll={deleteAll} />}
      />
    </Container>
  );
}

export default App;
