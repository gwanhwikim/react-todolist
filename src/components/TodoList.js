import React from "react";
import TrashIcon from "./TrashIcon";

const TodoList = ({ work, deleteTodo }) => {
  return (
    <div className="todayWorkList" key={work.id}>
      <div className="todayWork">{work.todo}</div>
      <TrashIcon className="deleteButton" onClick={() => deleteTodo(work.id)} />
    </div>
  );
};

export default TodoList;
