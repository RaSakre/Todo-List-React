import styles from "./mainPage.module.css";
import "./App.css";
import { TodoForm } from "./components/TodoForm/TodoForm";
import { createContext, ReactNode, useState } from "react";
import { TasksToDo } from "./components/TasksToDo/TasksToDo";
import { DoneTodoList } from "./components/DoneTodos/DoneTodoList";

export interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface TodoContextType {
  todoList: ITodo[];
  doneTodoList: ITodo[];
  addTodo: (todo: ITodo) => void;
  deleteTodo: (id: number) => void;
  addTodos: (todos: ITodo[]) => void;
  addDoneTodo: (todo: ITodo) => void;
  handleError: () => void;
  handleOffError: () => void;
  error: boolean;
}

export const TodoContext = createContext<TodoContextType>({
  todoList: [],
  doneTodoList: [],
  addTodo: () => {},
  deleteTodo: () => {},
  addTodos: () => {},
  addDoneTodo: () => {},
  handleError: () => {},
  handleOffError: () => {},
  error: false,
});

const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const [doneTodoList, setDoneTodoList] = useState<ITodo[]>([]);
  const [error, setError] = useState<boolean>(false);

  const addTodo = (todo: ITodo) => {
    setTodoList((prevState) => [...prevState, todo]);
  };

  const deleteTodo = (id: number) => {
    setTodoList((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const addTodos = (todos: ITodo[]) => {
    const activeTodos = todos.filter((todo) => !todo.completed);
    const completedTodos = todos.filter((todo) => todo.completed);

    setTodoList(activeTodos);
    setDoneTodoList(completedTodos);
  };

  const addDoneTodo = (todo: ITodo) => {
    setDoneTodoList((prevState) => [...prevState, todo]);
  };

  const handleError = () => {
    setError(true);
  };

  const handleOffError = () => {
    setError(false);
  };

  return (
    <TodoContext.Provider
      value={{
        todoList,
        doneTodoList,
        addTodo,
        deleteTodo,
        addTodos,
        addDoneTodo,
        handleError,
        error,
        handleOffError,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

function App() {
  return (
    <TodoProvider>
      <div className={styles.page}>
        <TodoForm />
        <TasksToDo />
        <DoneTodoList />
      </div>
    </TodoProvider>
  );
}

export default App;
