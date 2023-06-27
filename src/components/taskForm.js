import React from "react";
import "./taskForm.css";
import { BsCalendarEvent } from "react-icons/bs";
import DatePicker from "react-datepicker";
import {
  BiCalendarCheck, //today
  BiCalendarPlus, //tomorrow
  BiCalendarEdit, //other
} from "react-icons/bi";
import { AiOutlineUser } from "react-icons/ai";

export default function TaskForm({ taskName, onTyping, onClose, onAdd }) {
  const pickDate = (date) => {
    //TODO: format date
    //TODO: set value
  };

  return (
    <>
      <form className="task-form">
        <input
          value={taskName}
          onChange={onTyping}
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
          />
        </div>

        <div className="form-row">
          {" "}
          <button
            className="primary-button"
            onClick={() => {
              onClose();
              //TODO: addTask();
              //TODO: clear value
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
  console.log(Icon);
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
