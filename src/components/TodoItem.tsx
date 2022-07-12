import { useContext } from "react";
import { TodoContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <li className="p-5 rounded-lg shadow-xl bg-base-100 flex justify-between items-center">
      <span
        className="inline-block break-words w-1/2"
        style={{ textDecoration: todo.done ? "line-through" : "none" }}
      >
        {todo.name}
      </span>
      <span className="btn-group inline-block">
        <button
          className="btn btn-sm"
          onClick={() => changeTodoCompletion(todo)}
        >
          <FontAwesomeIcon icon={todo.done ? "xmark" : "check"} />
        </button>
        <button className="btn btn-sm" onClick={() => deleteTodo(todo)}>
          <FontAwesomeIcon icon="trash-can" />
        </button>
      </span>
    </li>
  );
}

export default TodoItem;
