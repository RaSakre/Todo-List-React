import { TodoContextType } from "../../App";
import styles from './TasksToDo.module.css'
import { Todo } from "./Todo";

type Props = {
	todoMeta: TodoContextType
};


export const TasksTodoUI = ({todoMeta}:Props) => {
	return (
		<div className={styles.todoList}>
		<h1 className={styles.tasksLength}>Tasks To Do - {todoMeta.todoList.length}</h1>
		{todoMeta.todoList.map(todo => <Todo key={todo.id} title={todo.title} id={todo.id} />)}
	</div>
	)
}