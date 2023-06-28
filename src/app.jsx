import React, { useEffect } from "react";
import List from "./components/list";
import Modal from "./components/modal";
import TaskDetail from "./components/taskForm";
import "./general.css";
export default function App() {
  const [isOpen, setIsOpen] = React.useState();
  const [tasks, setTasks] = React.useState([]);

  useEffect(() => {
    console.log(tasks);
  }, [tasks]);

  const onModalClose = () => {
    setIsOpen(false);
  };

  const onAddTask = (value) => {
    console.log({ value: value });
    const newArray = [...tasks, value];
    console.log(newArray);
    setTasks(newArray);
  };
  const onComplete = (item) => {
    const itemIndex = tasks.findIndex((e) => e.taskName === item.taskName);
    var newTasks = tasks;
    newTasks[itemIndex].isComplete = !newTasks[itemIndex].isComplete;
    setTasks(newTasks);
  };

  return (
    <div>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        new Task
      </button>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <TaskDetail onClose={onModalClose} onAdd={onAddTask} tasks={tasks} />
      </Modal>
      <List tasks={tasks} onComplete={onComplete} />
    </div>
  );
}
