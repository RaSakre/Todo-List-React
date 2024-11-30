import axios from 'axios'
import { TodoContext } from 'src/App';
import { useContext, useState } from 'react';
import { TodoUI } from './TodoUI';

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
	return (
		<TodoUI
		task={task}
		onDelete={onDelete}
		onDone={onDone} />
	)
}