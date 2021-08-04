import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: 1,
    text: "",
    completed: false
  });

  const handleChange = (event) => {
    setTodo({ ...todo, text: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todo);
    setTodo({ ...todo, text: "", id: todo.id + 1 });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          onChange={handleChange}
          value={todo.text}
        />
        <input type="submit" value="Just Todo It!" />
      </form>
    </div>
  );
};

export default TodoForm;

// props = {
//   addTodo: addTodo()
// }
