import { useState, createContext, useEffect } from "react";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTrashCan,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import GithubCorner from "react-github-corner";
import { v4 as makeId } from "uuid";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Todo from "./models/todo";
import TodoContextProps from "./models/todoContextProps";

library.add(faTrashCan, faCheck, faXmark);

export const TodoContext = createContext<TodoContextProps | null>(null);

function App() {
  const [todos, changeTodos] = useState<Todo[]>(() => {
    const initialvalues: Todo[] = JSON.parse(localStorage.getItem("todos")!);
    return initialvalues || [];
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

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
    <div className="m-5 w-fit mx-auto bg-primary-content p-5 rounded-lg">
      <GithubCorner href="https://github.com/KmanCZ/react-todo-list" />
      <h1 className="text-5xl text-center font-light mb-2">Todo List</h1>
      <TodoContext.Provider
        value={{
          todos,
          addTodo,
          changeTodoCompletion,
          deleteTodo,
          changeTodos,
        }}
      >
        <TodoForm />
        <TodoList />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
