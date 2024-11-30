import { ITodo } from 'src/App'
import styles from './TodoForm.module.css'
import { TodoInput } from '../TodoInput/TodoInput'
import AddTodoButton from '../AddTodoButton/AddTodoButton'

type Props = {
	handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
	setTask: (e: React.SetStateAction<ITodo>) => void
	task: ITodo
}

export const TodoFormUI = ({handleSubmit, setTask, task}:Props) => {
	return (
<form className={styles.form} onSubmit={handleSubmit}>
	<TodoInput setTask={setTask} task={task}/>
	<AddTodoButton/>
	</form>
	)
}