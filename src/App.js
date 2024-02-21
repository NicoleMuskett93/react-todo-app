import "./App.css";
import TodoInput from "./components/TodoInput";
import TodoItem from "./components/TodoItem";
import React from "react";

function App() {
  const [todoItems, setTodoItems] = React.useState([
    {
      todo: "Walk the dog",
      complete: false,
    },
    {
      todo: "Put a washing machine on",
      complete: false,
    },
    {
      todo: "Hover the car",
      complete: false,
    },
  ]);

  const createTodoItem = (todo) => {
    const newTodoItems = [...todoItems, { todo, complete: false }];
    setTodoItems(newTodoItems);
  };

  const deleteTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems.splice(index, 1);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    newTodoItems[index].complete === false
      ? (newTodoItems[index].complete = true)
      : (newTodoItems[index].complete = false);
    setTodoItems(newTodoItems);
  };

  const updateTodoItem = (index) => {
    const newTodoItems = [...todoItems];
    const item = newTodoItems[index];
    let newItem = prompt(`Update ${item.todo}?`, item.todo);
    let todoObj = { todo: newItem, complete: false };
    newTodoItems.splice(index, 1, todoObj);
    if (newItem === null || newItem === "") {
      return;
    } else {
      item.todo = newItem;
    }
    setTodoItems(newTodoItems);
  };

  return (
    <div className="app">
      <div>
        <h1> To Do List </h1>
        <p> Please use this app to help you with your busy schedule. </p>
      </div>
      <TodoInput createTodoItem={createTodoItem} />
      {todoItems.map((item, index) => (
        <TodoItem
          key={index}
          index={index}
          item={item}
          deleteTodoItem={deleteTodoItem}
          completeTodoItem={completeTodoItem}
          updateTodoItem={updateTodoItem}
        />
      ))}
    </div>
  );
}

export default App;
