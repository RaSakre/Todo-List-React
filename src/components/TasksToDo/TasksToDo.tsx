import { TodoContext } from "../../App";
import { useContext, useEffect } from "react"
import { TasksTodoUI } from "./TasksTodoUI";
import axios from "axios"


export const TasksToDo = () => {
  const todoMeta = useContext(TodoContext);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then(res => todoMeta.addTodos(res.data));
  }, []);
  return (
		<TasksTodoUI todoMeta={todoMeta} />
  );
};