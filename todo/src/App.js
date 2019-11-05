import React, { useReducer } from "react";
import ToDoList from "./components/ToDoList";
import ToDoForm from "./components/ToDoForm";
import { Reducer, initialState } from "./reducers/Reducers";
import "./App.css";

function App() {
  const [{ toDoList }, dispatch] = useReducer(Reducer, initialState);

  return (
    <div className="App">
      <h1>To-Do List</h1>
      <ToDoForm dispatch={dispatch} />
      <ToDoList toDoList={toDoList} dispatch={dispatch} />
    </div>
  );
}

export default App;