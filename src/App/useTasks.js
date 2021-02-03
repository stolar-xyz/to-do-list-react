import { useLocalStorage } from "./useLocalStorage";

export const useTasks = () => {
    const [tasks, setTasks] = useLocalStorage("tasks", [
        { id: 1, content: "test1", done: true },
        { id: 2, content: "test2", done: false },
    ])

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
            }
        ])
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map(task => {
            if (task.id === id) {
                return { ...task, done: !task.done }
            }

            return task;
        }))
    };

    const markAllAsDone = () => {
        setTasks(tasks => tasks.map(task => ({
            ...task,
            done: true,
        })));
    };

    const deleteAll = () => {
        setTasks(tasks => tasks = []);
    };

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        markAllAsDone,
        addNewTask,
        deleteAll,
    };
};