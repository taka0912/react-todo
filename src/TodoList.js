import React from "react";
import Todo from "./Todo";

const TodoLost = ({ todos, toggleTodo }) => {
  return todos.map((todo) => (
    <Todo todo={todo} key={todo.name} toggleTodo={toggleTodo} />
  ));
};

export default TodoLost;
