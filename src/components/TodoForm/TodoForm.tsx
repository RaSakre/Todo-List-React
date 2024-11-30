import { FormEvent, useContext } from "react";
import { TodoFormUI } from "./TodoFormUI";
import { TodoContext } from "src/App";
import { useState } from "react";

export const TodoForm = () => {
  const [task, setTask] = useState({
    userId: 1,
    id: 1,
    title: "",
    completed: false,
  });
  const todoMeta = useContext(TodoContext);
  const handleSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    fetch("https://jsonplaceholder.typicode.com/todos?_limit=4", {
      method: "POST",
      body: JSON.stringify({
        title: task.title,
        completed: false,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => todoMeta.addTodo(data));
    setTask({ title: "", completed: false, userId: 1, id: 1 });
  };
  return (
    <TodoFormUI task={task} setTask={setTask} handleSubmit={handleSubmit} />
  );
};
