import styles from './DoneTodo.module.css'

type Props = {
	title: string
}

export const DoneTodo = (props:Props) => {
	return (
			<div className={styles.doneTodo}>
				<h3>{props.title}</h3>
			</div>
	)
}