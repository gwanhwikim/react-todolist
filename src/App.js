import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Retry from "./components/Retry";

function App() {
  const [todayWorks, setTodayWorks] = useState([]);

  const deleteTodo = (id) => {
    setTodayWorks(
      todayWorks.filter((work) => {
        return work.id !== id;
      })
    );
  };

  const addWork = (work) => {
    setTodayWorks([...todayWorks, work]);
  };

  const renderTodayWorks = todayWorks.length ? (
    todayWorks.map((work) => {
      return <TodoList work={work} key={work.id} deleteTodo={deleteTodo} />;
    })
  ) : (
    <div className="NoneWork">" Please add something to do"</div>
  );

  const deleteAll = () => {
    setTodayWorks("");
  };

  return (
    <div className="App">
      <div className="container">
        <h1>To Do List</h1>
        <TodoForm addWork={addWork} />
        {renderTodayWorks}
        <Retry deleteAll={deleteAll} />
      </div>
    </div>
  );
}

export default App;
