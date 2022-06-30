import React, { FC, useState, createContext, useContext } from 'react';
import { ToDoObj } from './index.d'

interface AppContextInterface {
  todos: ToDoObj[];
  addTodo: (todo: ToDoObj) => void;
}

interface Prop {
  children: React.ReactNode;
}

export const useApp = () => {
  return useContext(AppContext);
}

const AppContext = createContext<AppContextInterface | null>(null);

export const ContextProvider: React.FC<Prop> = ({ children }) => {

  const [todos, setTodos] = useState<ToDoObj[]>([]);

  const addTodo = (todo: ToDoObj) => {
    const newTodo: ToDoObj = {
      id: Math.round(Math.random() * 1000),
      title: todo.title,
      description: todo.description,
      done: todo.done
    }

    setTodos([...todos, newTodo]);
  }


  return (
    <AppContext.Provider value={{ todos, addTodo }}>
      {children}
    </AppContext.Provider>
  )

}