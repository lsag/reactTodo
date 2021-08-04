import React from "react";

const Todo = ({ todo, completeTodo }) => {
  const handleClick = () => {
    completeTodo(todo);
  };
  return (
    <div>
      <p>
        {todo.text}
        <button onClick={handleClick}>Complete</button>
      </p>
    </div>
  );
};

export default Todo;

// props = {
//   todo: {
//     id: 1,
//     text: "some text"
//     completed: false
//   }
// }
