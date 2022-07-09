import TodoList from "./components/TodoList";
import Todo from "./models/todo";

const todos: Todo[] = [
  { id: 1, name: "Play games", done: false },
  { id: 2, name: "Go outside", done: true },
  { id: 3, name: "Complete this project", done: false },
];

function App() {
  return (
    <div>
      <h1>Hello world!!!</h1>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
