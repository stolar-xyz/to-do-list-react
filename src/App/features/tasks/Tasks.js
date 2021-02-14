import React, { useState } from "react";
import { useTasks } from "../../useTasks";
import { useSelector } from "react-redux";
import Form from "./Form";
import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import { selectTasks } from "./tasksSlice";

function Tasks() {
  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const { tasks } = useSelector(selectTasks);

  const {
    // tasks,
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
        body={<TaskList tasks={tasks}
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

export default Tasks;
