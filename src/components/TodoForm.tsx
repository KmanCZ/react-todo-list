import { FormEvent, useState } from "react";

interface TodoFormProps {
  addTodo: (todo: string) => void;
}

function TodoForm({ addTodo }: TodoFormProps) {
  const [input, changeInput] = useState<string>("");

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
