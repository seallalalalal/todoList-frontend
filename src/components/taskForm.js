import React, { useEffect } from "react";
import "./taskForm.css";
import { BsCalendarEvent } from "react-icons/bs";
import DatePicker from "react-datepicker";
import {
  BiCalendarCheck, //today
  BiCalendarPlus, //tomorrow
  BiCalendarEdit, //other
} from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";
import { TASK } from "../data/task";

var newTask = JSON.parse(JSON.stringify(TASK));

export default function TaskForm({ onClose, onAdd, tasks }) {
  const pickDate = (date) => {
    //TODO: format date
    //TODO: set value
  };

  const [taskName, setTaskName] = React.useState("");

  const abortTask = () => {};
  const clearTask = () => {
    setTaskName("");
    newTask = JSON.parse(JSON.stringify(TASK));
  };

  useEffect(() => {
    newTask.name = taskName;
  }, [taskName]);

  return (
    <>
      <form className="task-form">
        <input
          value={taskName}
          onChange={(e) => {
            setTaskName(e.target.value);
          }}
          placeholder="task name"
          className="input-box task-form__name"
        />

        <div className="form-row">
          <AiOutlineUser />
          <select
            className="input-box bubble"
            onClick={() => {
              //TODO: get Users API
            }}
            onChange={(e) => {
              newTask.owner = e.target.value;
            }}
          >
            <option>Andy</option>
            <option>Peter</option>
          </select>
        </div>
        <div className="form-row">
          <BsCalendarEvent />
          <Bubble
            type={"date"}
            text="Today"
            Icon={BiCalendarCheck}
            onClick={() => pickDate(Date.now())}
          />
          <Bubble
            text="Tomorrow"
            Icon={BiCalendarPlus}
            onClick={() => pickDate(Date.now())}
          />
          <Bubble text="Other" Icon={BiCalendarEdit} />
        </div>
        <div className="row">
          <textarea
            className="input-box textarea"
            placeholder="Add Description"
            onChange={(e) => {
              newTask.description = e.target.value;
            }}
          />
        </div>

        <div className="form-row">
          {" "}
          <button
            className="primary-button"
            onClick={(e) => {
              e.preventDefault();
              onClose();
              onAdd(newTask);
              clearTask();
            }}
          >
            Confirm
          </button>
          <button
            className="secondary-button"
            onClick={() => {
              onClose();
              //TODO: clear value
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </>
  );
}

function Bubble({ type, text, Icon, onClick }, ...props) {
  return (
    <button
      className="bubble"
      onClick={(e) => {
        e.preventDefault();
        if (onClick) onClick();
      }}
    >
      {Icon ? <Icon /> : <></>}
      {text}
    </button>
  );
}
