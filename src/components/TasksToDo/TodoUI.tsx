import styles from './Todo.module.css'
import checkIcon from '../../images/Check.svg'
import { ITodo } from '../../App'



type Props = {
	task: ITodo
	onDone: () => void,
	onDelete: () => void,
}

export const TodoUI = ({task, onDone, onDelete}:Props) => {
	return (
		<div className={styles.todo}>
		<h1 className={styles.todoText}>{task.title}</h1>
		<div className={styles.todoImages}>
		<img onClick={onDone} className={styles.doneButton} src={checkIcon} alt="" />
		<img onClick={onDelete} className={styles.deleteButton} src='' alt="" />
		</div>
	</div>
	)
}