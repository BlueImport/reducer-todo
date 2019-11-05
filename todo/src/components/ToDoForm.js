import React, { useState } from "react";

const ToDoForm = ({ dispatch }) => {
  const [task, setTask] = useState("");

  const handleChange = e => {
    setTask(e.target.value);
  };

  return (
    <form className="todo-form">
      <label htmlFor="item">
        <input
          type="text"
          name="item"
          value={task}
          placeholder="Add A Task"
          onChange={handleChange}
        />
      </label>
      <button
        onClick={e => {
          e.preventDefault();
          dispatch({ type: "ADD_TASK", payload: task });
        }}
      >
        Add a New Task
      </button>
    </form>
  );
};

export default ToDoForm;