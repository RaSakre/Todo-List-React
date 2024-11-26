import styles from './DoneTodo.module.css'

export const DoneTodo = (props:any) => {
	return (
			<div className={styles.doneTodo}>
				<h3>{props.title}</h3>
			</div>
	)
}