import styles from "./Todo.module.css";
import checkIcon from "../../images/Check.svg";
import editIcon from "../../images/edit.svg";
import { ITodo } from "../../App";
import { MutableRefObject } from "react";

type Props = {
  task: ITodo;
  focusRef: MutableRefObject<HTMLInputElement | null>;
  onDone: () => void;
  onDelete: () => void;
  onEdit: () => void;
  editing: boolean;
  editedTitle: string;
  setEditedTitle: (title: string) => void;
  onSave: () => void;
};

export const TodoUI = ({
  task,
  onDone,
  onDelete,
  onEdit,
  editing,
  editedTitle,
  setEditedTitle,
  onSave,
  focusRef,
}: Props) => {
  return (
    <div className={styles.todo}>
      {editing ? (
        <div>
          <input
            ref={focusRef}
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
            className={styles.editing}
          />
          <button className={styles.editingButton} onClick={onSave}>
            Сохранить
          </button>
        </div>
      ) : (
        <>
          <h1 className={styles.todoText}>{task.title}</h1>
          <div className={styles.todoImages}>
            <img
              onClick={onDone}
              className={styles.doneButton}
              src={checkIcon}
              alt=""
            />
            <img
              onClick={onDelete}
              className={styles.deleteButton}
              src=""
              alt=""
            />
            <img
              onClick={onEdit}
              className={styles.editButton}
              src={editIcon}
              alt=""
            />
          </div>
        </>
      )}
    </div>
  );
};
