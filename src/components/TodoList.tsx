import Todo from "../models/todo";

interface TodosListProps {
  todos: Todo[];
}

function TodoList({ todos }: TodosListProps) {
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.name}</li>
      ))}
    </ul>
  );
}

export default TodoList;
