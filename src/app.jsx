import React from "react";
import List from "./widgets/List";
import Modal from "./widgets/modal";
import { useState } from "react";
export default function App() {
  const [isOpen, setIsOpen] = React.useState();
  const [value, setValue] = useState("");
  const onTyping = (e) => {
    setValue(e.target.value);
  };

  return (
    <div>
      <List />
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <Modal onClose={() => setIsOpen(false)} open={isOpen}>
        {console.log(isOpen)}
        <input
          value={value}
          onChange={onTyping}
          placeholder="task name"
        ></input>
        <button
          onClick={() => {
            setIsOpen(false);
            //addTask();
          }}
        >
          Confirm
        </button>
        <button onClick={() => setIsOpen(false)}>Cancel</button>
      </Modal>
    </div>
  );
}
