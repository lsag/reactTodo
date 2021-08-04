import "./styles.css";
import TodoForm from "./TodoForm";
import TodoContainer from "./TodoContainer";
import React, { useState } from "react";

export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };

  const completeTodo = (todo) => {
    const updated = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, completed: true };
      } else {
        return t;
      }
    });
    setTodos(updated);
  };

  const incompleteTodos = todos.filter((todo) => todo.completed === false);

  const completed = todos.filter((todo) => todo.completed === true);
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodo} />

      <TodoContainer todos={incompleteTodos} completeTodo={completeTodo} />

      <hr />
      <h2>Completed Todos</h2>

      <TodoContainer todos={completed} completeTodo={completeTodo} />
    </div>
  );
}
