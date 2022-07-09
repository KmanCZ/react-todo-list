import { useContext } from "react";
import { TodoContext } from "../App";
import TodoContextProps from "../models/todoContextProps";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext) as TodoContextProps;

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

export default TodoList;
