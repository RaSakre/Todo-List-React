import { ITodo } from "../../App";
import styles from "./TodoForm.module.css";
import { TodoInput } from "../TodoInput/TodoInput";
import AddTodoButton from "../AddTodoButton/AddTodoButton";

type Props = {
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  setTask: (e: React.SetStateAction<ITodo>) => void;
  task: ITodo;
  error: boolean;
};

export const TodoFormUI = ({ handleSubmit, setTask, task, error }: Props) => {
  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <TodoInput setTask={setTask} task={task} />
      <span className={styles.taskError}>
        {error ? "Пожалуйста введите задачу" : ""}
      </span>
      <AddTodoButton />
    </form>
  );
};
