import React from "react";

const TodoItem = ({ todo, setTodos }) => {
  const handleComplete = () => {
    setTodos((prevTodos) =>
      prevTodos.map((t) =>
        t.id === todo.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDelete = () => {
    setTodos((prevTodos) => prevTodos.filter((t) => t.id !== todo.id));
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span className="todo-text">{todo.text}</span>
      <div className="todo-actions">
        <button className="complete-btn" onClick={handleComplete}>
          ✔
        </button>
        <button className="delete-btn" onClick={handleDelete}>
          ✖
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
