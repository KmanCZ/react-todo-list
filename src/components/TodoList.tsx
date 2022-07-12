import { useContext } from "react";
import { TodoContext } from "../App";
import TodoContextProps from "../models/todoContextProps";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos } = useContext(TodoContext) as TodoContextProps;

  return (
    <div className="card shadow-xl w-96 mt-2 bg-secondary">
      <ul className="card-body">
        {todos.length === 0 && (
          <span className="mx-auto text-lg">Nothig here yet...</span>
        )}
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
