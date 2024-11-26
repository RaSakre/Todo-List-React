import checkIcon from '../../images/Check.svg'
import axios from 'axios'
import styles from './Todo.module.css'
import { TodoContext } from 'src/App';
import { useContext, useState } from 'react';

export const Todo = (props:any) => {
	const [task, setTask] = useState({
		userId: 1,
		id: props.id,
		title: props.title,
		completed: false,
	})
	const todoMeta = useContext(TodoContext);
	const onDelete = () => {
			axios.delete(`https://jsonplaceholder.typicode.com/todos/${props.id}?_limit=4`)
			todoMeta.deleteTodo(props.id)
	}
	const onDone = () => {
		fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}?_limit=4`, {
			method: 'PATCH',
			body: JSON.stringify({
				...task,
				completed: true,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
		.then(res => res.json()).then(data => todoMeta.addDoneTodo(data))
		todoMeta.deleteTodo(props.id)
	}
	console.log(todoMeta.doneTodoList)
	return (
	<div className={styles.todo}>
		<h1 className={styles.todoText}>{props.title}</h1>
		<div className={styles.todoImages}>
		<img onClick={onDone} className={styles.doneButton} src={checkIcon} alt="" />
		<img onClick={onDelete} className={styles.deleteButton} src='' alt="" />
		</div>
	</div>
	)
}