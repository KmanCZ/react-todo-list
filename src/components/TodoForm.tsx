import { FormEvent, useState, useContext } from "react";
import TodoContextProps from "../models/todoContextProps";
import { TodoContext } from "../App";

function TodoForm() {
  const [input, changeInput] = useState<string>("");
  const { addTodo } = useContext(TodoContext) as TodoContextProps;

  function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (input === "") return;
    addTodo(input);
    changeInput("");
  }

  return (
    <form onSubmit={submitHandler}>
      <input
        type="text"
        onChange={(e) => changeInput(e.target.value)}
        value={input}
      />
      <button type="submit" disabled={input === ""}>
        Add
      </button>
    </form>
  );
}

export default TodoForm;
