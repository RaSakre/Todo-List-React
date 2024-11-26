import {  useContext } from 'react';
import AddTodoButton from '../AddTodoButton/AddTodoButton';
import { TodoInput } from '../TodoInput/TodoInput';
import styles from './TodoForm.module.css'
import { TodoContext } from 'src/App';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';


export const TodoForm = () => {
	const [task, setTask] = useState({
		"userId": 1,
    "id": 1,
    "title": "",
    "completed": false
	});
	const todoMeta = useContext(TodoContext);
	const handleSubmit = (evt:any) => {
    evt.preventDefault();
		fetch('https://jsonplaceholder.typicode.com/todos?_limit=4', {
			method: 'POST',
			body: JSON.stringify({
				title: task.title,
				completed: false,
				userId: 1,
			}),
			headers: {
				'Content-type': 'application/json; charset=UTF-8',
			},
		})
			.then((response) => response.json())
			.then((data) => todoMeta.addTodo(data));
			setTask({title: '', completed: false, userId: 1, id: 1});
			
  };
	return (
<form className={styles.form} onSubmit={handleSubmit}>
	<TodoInput setTask={setTask} task={task}/>
	<AddTodoButton/>
	</form>
	)
}