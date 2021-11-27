import React, { useState } from "react";
import './App.css';
import DateSelect from './components/dateSelect/dateSelect';
import ToDoInput from './components/input/input';
import Todo from './components/todo/todo';

import { useSelector } from 'react-redux'
import { selectTodoList } from './store/todoSlice'

function App() {
  ///State for keep date
  const [date, setDate] = useState()

  ///Getting todolist from redux
  const todoList = useSelector(selectTodoList)

  ///Callback function for getting date from dateselector
  const handleCallback = (s) => {
    setDate(s.toString().slice(0, 15))
  }

  return (
    <div className="App">

      <div className="main-container">

        <DateSelect handleCallback={handleCallback} />

        <div className="todo-container">

          {todoList.filter(prevState => prevState.selectedDate === date).map(item => (
            <Todo
              name={item.name}
              done={item.done}
              id={item.id} />
          ))}

          <ToDoInput
            date={date}
          />

        </div>

      </div>
      
    </div>
  );
}

export default App;
