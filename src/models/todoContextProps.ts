import Todo from "./todo";

export default interface TodoContextProps {
  todos: Todo[];
  addTodo(todo: string): void;
  changeTodoCompletion(todo: Todo): void;
  deleteTodo(todo: Todo): void;
  changeTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
