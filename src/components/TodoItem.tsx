import { useContext } from "react";
import { TodoContext } from "../App";
import Todo from "../models/todo";
import TodoContextProps from "../models/todoContextProps";

interface TodoItemProps {
  todo: Todo;
}

function TodoItem({ todo }: TodoItemProps) {
  const { changeTodoCompletion, deleteTodo } = useContext(
    TodoContext
  ) as TodoContextProps;

  return (
    <li>
      <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
        {todo.name}
      </span>{" "}
      <button onClick={() => changeTodoCompletion(todo)}>
        {todo.done ? "❌" : "✅"}
      </button>
      <button onClick={() => deleteTodo(todo)}>🗑</button>
    </li>
  );
}

export default TodoItem;
