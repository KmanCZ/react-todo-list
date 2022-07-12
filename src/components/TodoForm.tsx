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
    <form onSubmit={submitHandler} className="card shadow-xl w-96 bg-primary">
      <div className="card-body mx-auto">
        <div className="input-group">
          <input
            type="text"
            onChange={(e) => changeInput(e.target.value)}
            value={input}
            className="input input-bordered w-72 focus:outline-none"
          />
          <button
            type="submit"
            disabled={input === ""}
            className="btn btn-square btn-success"
          >
            Add
          </button>
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
