import { TodoContext } from "src/App";
import { useContext } from "react";
import { DoneTodoListUI } from "./DoneTodoListUI";

export const DoneTodoList = () => {
  const todoMeta = useContext(TodoContext);
  return <DoneTodoListUI todoMeta={todoMeta} />;
};
