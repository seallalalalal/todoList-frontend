import React from "react";
import List from "./components/list";
import Modal from "./components/modal";
import { useState } from "react";
import TaskDetail from "./components/taskForm";
import "./general.css";
export default function App() {
  const [isOpen, setIsOpen] = React.useState();
  const [value, setValue] = useState("");
  const onTyping = (e) => {
    setValue(e.target.value);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <List />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        <TaskDetail taskName={value} onTyping={onTyping} onClose={onClose} />
      </Modal>
    </div>
  );
}
