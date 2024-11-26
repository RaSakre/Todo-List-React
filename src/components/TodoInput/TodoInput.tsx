import styles from './TodoInput.module.css'
import { v4 as uuidv4 } from 'uuid';

export const TodoInput = (props:any) => {
	return (
		<input onChange={(evt) => props.setTask({
		...props.task, title: evt.target.value
		})} className={styles.input} placeholder="Add a new task" type="text" value={props.task.title} />
	)

}