import React, { FC, useState, createContext, useContext } from 'react';
import { ToDoObj } from './index.d'

interface AppContextInterface {
  todos: ToDoObj[];
  addTodo: (todo: ToDoObj) => void;
  toggleTodo: (id: number) => void;
  deleteTodo: (id: number) => void;
}

interface Prop {
  children: React.ReactNode;
}

export const useApp = () => {
  return useContext(AppContext) as AppContextInterface;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const ContextProvider: FC<Prop> = ({ children }) => {

  const [todos, setTodos] = useState<ToDoObj[]>([]);

  const addTodo = (todo: ToDoObj) => {
    setTodos([...todos, todo]);
  }

  const toggleTodo = (id: number) => {
    setTodos(
      todos.map(task => task.id === id ? { ...task, done: !task.done } : task)
    )
  }

  const deleteTodo = (id: number) => {
    setTodos(
      todos.filter(task => task.id !== id)
    )
  }


  return (
    <AppContext.Provider value={{ todos, addTodo, toggleTodo, deleteTodo }}>
      {children}
    </AppContext.Provider>
  )

}