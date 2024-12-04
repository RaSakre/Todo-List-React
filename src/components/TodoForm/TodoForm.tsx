import { FormEvent, useContext } from "react";
import { TodoFormUI } from "./TodoFormUI";
import { TodoContext } from "../../App";
import { useState } from "react";

export const TodoForm = () => {
  const todoMeta = useContext(TodoContext);
  const [task, setTask] = useState({
    userId: 1,
    id: 1,
    title: "",
    completed: false,
  });
  const error = todoMeta.error;
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
      .then((data) => {
        if (data.title === "") {
          todoMeta.handleError();
        } else {
          todoMeta.addTodo(data);
          todoMeta.handleOffError();
        }
      });
    setTask({ title: "", completed: false, userId: 1, id: 1 });
  };
  return (
    <TodoFormUI
      task={task}
      setTask={setTask}
      handleSubmit={handleSubmit}
      error={error}
    />
  );
};
