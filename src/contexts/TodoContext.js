import React, { useState, createContext } from "react";

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([
    { id: 1, title: "Escovar os dentes", done: true },
    { id: 2, title: "Tomar café da manhã", done: false },
    { id: 3, title: "Tomar banho", done: false },
  ]);

  const saveTodos = (todo) => {
    const newTodo = {
      id: todos ? todos.length + 1 : 1,
      title: todo.title,
      done: false,
    };
    setTodos([...todos, newTodo]);
  };

  return (
    <TodoContext.Provider value={{ todos, saveTodos }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoProvider;
