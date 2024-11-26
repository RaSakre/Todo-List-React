import { TodoContext } from "src/App"
import { useContext } from "react"
import { DoneTodo } from "./DoneTodo"
import styles from './DoneTodoList.module.css'

export const DoneTodoList = () => {
	const todoMeta = useContext(TodoContext)
	return (
		<>
		<div className={styles.doneList}>
		<h2>
			Done - {todoMeta.doneTodoList.length}
		</h2>
		</div>
		{todoMeta.doneTodoList.map(el => <DoneTodo key={el.id} title={el.title}/>)}
	</>
	)
}