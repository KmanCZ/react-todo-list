import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";

/* const todos: Todo[] = [
  { id: 1, name: "Play games", done: false },
  { id: 2, name: "Go outside", done: true },
  { id: 3, name: "Complete this project", done: false },
]; */

function App() {
  const [todos, changeTodos] = useState<Todo[]>([]);

  function addTodo(todo: string) {
    changeTodos([...todos, { id: 4, name: todo, done: false }]);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm addTodo={addTodo} />
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
