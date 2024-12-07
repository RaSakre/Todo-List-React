import axios from "axios";
import { TodoContext } from "../../App";
import { useContext, useState, useRef, useEffect } from "react";
import { TodoUI } from "./TodoUI";

export const Todo = (props: any) => {
  const focusRef = useRef<HTMLInputElement | null>(null);
  const [editing, setEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(props.title);
  const [task, setTask] = useState({
    userId: 1,
    id: props.id,
    title: props.title,
    completed: false,
  });
  const todoMeta = useContext(TodoContext);
  const onEdit = () => {
    setEditing(true);
    if (focusRef.current) {
      focusRef.current.focus();
    }
  };
  useEffect(() => {
    if (editing && focusRef.current) {
      focusRef.current.focus();
    } else if (!editing && focusRef.current) {
      focusRef.current.blur();
    }
  }, [editing]);
  const onSave = () => {
    setTask({
      ...task,
      title: editedTitle,
    });
    setEditing(false);
  };
  const onDelete = () => {
    axios.delete(
      `https://jsonplaceholder.typicode.com/todos/${props.id}?_limit=4`
    );
    todoMeta.deleteTodo(props.id);
  };
  const onDone = () => {
    fetch(`https://jsonplaceholder.typicode.com/todos/${props.id}?_limit=4`, {
      method: "PATCH",
      body: JSON.stringify({
        ...task,
        completed: true,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => todoMeta.addDoneTodo(data));
    todoMeta.deleteTodo(props.id);
  };
  return (
    <TodoUI
      onSave={onSave}
      editedTitle={editedTitle}
      setEditedTitle={setEditedTitle}
      editing={editing}
      onEdit={onEdit}
      focusRef={focusRef}
      task={task}
      onDelete={onDelete}
      onDone={onDone}
    />
  );
};
