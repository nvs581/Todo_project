import React, { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Filter from "./components/Filter";
import ThemeToggle from "./components/ThemeToggle";
import "./App.css";
import "./styles/App.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");

  return (
    <div className="app">
      <h1>To-Do List</h1>
      <ThemeToggle />
      <TodoForm setTodos={setTodos} />
      <Filter setFilter={setFilter} />
      <TodoList todos={todos} setTodos={setTodos} filter={filter} />
    </div>
  );
};

export default App;
