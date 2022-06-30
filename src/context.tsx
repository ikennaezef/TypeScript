import React, { FC, useState, createContext, useContext } from 'react';
import { ToDoObj } from './index.d'

interface AppContextInterface {
  todos: ToDoObj[];
  addTodo: (todo: ToDoObj) => void;
  toggleTodo: (todo: ToDoObj) => void;
}

interface Prop {
  children: React.ReactNode;
}

export const useApp = () => {
  return useContext(AppContext) as AppContextInterface;
}

const AppContext = createContext<AppContextInterface | null>(null);

export const ContextProvider: FC<Prop> = ({ children }) => {

  const [todos, setTodos] = useState<ToDoObj[]>([{ id: 4354, title: 'Sample tilte fro context', description: 'Sample desc from conyext', done: true }]);

  const addTodo = (todo: ToDoObj) => {
    setTodos([...todos, todo]);
  }

  const toggleTodo = (todo: ToDoObj) => {
    todos.forEach(t => {
      if (t === todo) {
        t.done = !t.done;
      }
    })
  }


  return (
    <AppContext.Provider value={{ todos, addTodo, toggleTodo }}>
      {children}
    </AppContext.Provider>
  )

}