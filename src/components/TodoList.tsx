import { useContext } from "react";
import {
  DragDropContext,
  Draggable,
  Droppable,
  DropResult,
} from "react-beautiful-dnd";
import { TodoContext } from "../App";
import TodoContextProps from "../models/todoContextProps";
import TodoItem from "./TodoItem";

function TodoList() {
  const { todos, changeTodos } = useContext(TodoContext) as TodoContextProps;

  function onDragEndHandler(result: DropResult) {
    if (!result.destination) return;
    const items = Array.from(todos);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    changeTodos(items);
  }

  return (
    <div className="p-6 rounded-lg shadow-xl w-96 mt-2 bg-secondary">
      <DragDropContext onDragEnd={onDragEndHandler}>
        <Droppable droppableId="todos">
          {(provided) => (
            <ul
              className=""
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {todos.length === 0 && (
                <span className="mx-auto text-lg">Nothig here yet...</span>
              )}
              {todos.map((todo, index) => (
                <Draggable key={todo.id} draggableId={todo.id} index={index}>
                  {(provided) => <TodoItem todo={todo} provided={provided} />}
                </Draggable>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </div>
  );
}

export default TodoList;
