import React, { useReducer } from 'react';
import Title from './components/Todo';
import AddToDo from './components/AddToDo';
import './App.css';
import { Reducer } from './reducers/Reducers';

function App() {
  return (
    <div className="App">
      <Reducer></Reducer>
      <Title>To Do List</Title>
      <AddToDo>
      
      </AddToDo>
    </div>
  );
}

export default App;
