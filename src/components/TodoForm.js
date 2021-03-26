import React, { useState } from "react";
import InputField from "./InputField";

const TodoForm = ({ addWork }) => {
  const [todayTodo, setTodayTodo] = useState("");

  const addTodayWorks = (event) => {
    event.preventDefault();
    if (todayTodo !== "") {
      addWork({
        id: Date.now(),
        todo: todayTodo,
      });

      setTodayTodo("");
    }
  };

  return (
    <div className="form">
      <form onSubmit={addTodayWorks}>
        <div className="inputbox">
          <InputField
            className="todayWorkInput"
            type="text"
            placeholder="Today's to-do"
            value={todayTodo}
            onChange={(e) => setTodayTodo(e.target.value)}
          ></InputField>
        </div>
        <div className="buttonBox">
          <button className="addButton">Add</button>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
