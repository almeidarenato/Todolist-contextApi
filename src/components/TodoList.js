import React, { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { List } from "@material-ui/core";
import TodoListItem from "./TodoListItem";
// import { Container } from './styles';

function TodoList() {
  const { todos } = useContext(TodoContext);
  let data;
  if (todos) {
    data = todos.map((todo) => <TodoListItem key={todo.id} todo={todo} />);
  }

  return (
    <div>
      <List>{data}</List>
    </div>
  );
}

export default TodoList;
