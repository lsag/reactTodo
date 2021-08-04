import React from "react";
import Todo from "./Todo";
const TodoContainer = ({ todos, completeTodo }) => {
  return (
    <div>
      {todos.map((todo, i) => (
        <Todo key={i} todo={todo} completeTodo={completeTodo} />
      ))}
    </div>
  );
};

export default TodoContainer;
