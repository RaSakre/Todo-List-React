
import styles from './AddTodoButton.module.css';
import { v4 as uuidv4 } from 'uuid';

const AddTodoButton = () => {
  return (
    <button type='submit' className={styles.button}>+</button>
  );
};
export default AddTodoButton;
