import React, { useState } from "react";

export default function List({ tasks, onComplete }) {
  return (
    <>
      {tasks.map((item) => (
        <Task item={item} onComplete={onComplete} />
      ))}
    </>
  );
}

function Task({ item, onComplete }) {
  return (
    <div key={item.id}>
      <input
        type="checkbox"
        value={item.name}
        onChange={() => onComplete(item)}
        key={item.name}
      />
      <label>{item.name}</label>
    </div>
  );
}
