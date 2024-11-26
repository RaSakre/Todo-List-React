import { TodoContext } from "src/App"
import { useContext, useEffect, useRef } from "react"
import styles from './TasksToDo.module.css'
import { Todo } from "./Todo"
import axios from "axios"


export const TasksToDo = () => {
  const todoMeta = useContext(TodoContext);
  useEffect(() => {
      axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4')
        .then(res => todoMeta.addTodos(res.data));
  }, []);
	console.log(todoMeta.todoList)
  return (
    <div className={styles.todoList}>
      <h1 className={styles.tasksLength}>Tasks To Do - {todoMeta.todoList.length}</h1>
      {todoMeta.todoList.map(todo => <Todo key={todo.id} title={todo.title} id={todo.id} />)}
    </div>
  );
};