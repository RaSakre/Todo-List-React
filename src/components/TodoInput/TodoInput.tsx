import { ITodo } from '../../App'
import styles from './TodoInput.module.css'

type Props = {
	setTask: (e: React.SetStateAction<ITodo>) => void
	task: ITodo
}

export const TodoInput = (props:Props) => {
	return (
		<input onChange={(evt) => props.setTask({
		...props.task, title: evt.target.value
		})} className={styles.input} placeholder="Add a new task" type="text" value={props.task.title} />
	)

}