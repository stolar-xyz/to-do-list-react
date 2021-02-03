import React, { useState } from "react";
import { useTasks } from "./useTasks";
import Form from "./components/Form";
import List from "./components/List";
import Buttons from "./components/Buttons";
import Section from "./components/Section";
import Header from "./components/Header";
import Container from "./components/Container"

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
        body={<List tasks={tasks}
          hideDone={hideDone}
          removeTask={removeTask}
          toggleTaskDone={toggleTaskDone}
        />}

        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          markAllAsDone={markAllAsDone}
          deleteAll={deleteAll}
        />}
      />
    </Container>
  );
}

export default App;
