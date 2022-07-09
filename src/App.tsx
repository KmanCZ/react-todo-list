import { useState, createContext } from "react";
import { v4 as makeId } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import TodoContextProps from "./models/todoContextProps";

export const TodoContext = createContext<TodoContextProps | null>(null);

function App() {
  const [todos, changeTodos] = useState<Todo[]>([]);

  function addTodo(todo: string) {
    changeTodos([...todos, { id: makeId(), name: todo, done: false }]);
  }

  function changeTodoCompletion(todo: Todo) {
    const newState = todos.map((currentTodo) => {
      if (currentTodo === todo) {
        return { ...currentTodo, done: !currentTodo.done };
      }
      return currentTodo;
    });
    changeTodos(newState);
  }

  function deleteTodo(todo: Todo) {
    changeTodos(todos.filter((currentTodo) => currentTodo !== todo));
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoContext.Provider
        value={{ todos, addTodo, changeTodoCompletion, deleteTodo }}
      >
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
