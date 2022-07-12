import { useContext } from "react";
import { Draggable, DraggableProvided } from "react-beautiful-dnd";
import { TodoContext } from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Todo from "../models/todo";
import TodoContextProps from "../models/todoContextProps";

interface TodoItemProps {
  todo: Todo;
  provided: DraggableProvided;
}

function TodoItem({ todo, provided }: TodoItemProps) {
  const { changeTodoCompletion, deleteTodo } = useContext(
    TodoContext
  ) as TodoContextProps;

  return (
    <li
      ref={provided.innerRef}
      {...provided.draggableProps}
      {...provided.dragHandleProps}
      className="p-5 mb-3 rounded-lg shadow-xl bg-base-100 flex justify-between items-center"
    >
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
