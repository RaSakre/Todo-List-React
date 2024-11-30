import { TodoContextType } from '../../App'
import styles from './DoneTodoList.module.css'
import { DoneTodo } from './DoneTodo'

type Props = {
	todoMeta: TodoContextType
}

export const DoneTodoListUI = ({todoMeta}:Props) => {
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