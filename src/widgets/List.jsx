import React, { useState } from "react";

function Control({ onAdd }) {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const addItem = (e) => {
    onAdd({ taskName: value, isComplete: false });
    setValue(value);
  };

  return (
    <>
      <input value={value} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </>
  );
}

export default function List() {
  const [list, setList] = useState([]);

  const onAdd = (value) => {
    const newArray = [...list, value];
    setList(newArray);
  };
  const onComplete = (item) => {
    const itemIndex = list.findIndex((e) => e.taskName === item.taskName);
    var newList = list;
    console.log(itemIndex);
    newList[itemIndex].isComplete = !newList[itemIndex].isComplete;
    setList(newList);
    console.log(list);
  };

  return (
    <>
      <Control onAdd={onAdd} />
      <button>New Task</button>
      {list.map((item) => (
        <div key={item.taskName}>
          <input
            type="checkbox"
            value={item.name}
            onChange={() => onComplete(item)}
            key={item.taskName}
          />
          <label>{item.taskName}</label>
        </div>
      ))}
    </>
  );
}

function Task() {}
