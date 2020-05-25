import React, { useState, useEffect } from "react";
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Checkbox,
  Divider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
// import { Container } from './styles';

const useStyles = makeStyles({
  textStyle: {
    textDecoration: "line-through",
  },
});

function TodoListItem({ todo }) {
  const classes = useStyles();
  const [todoCheck, setTodoCheck] = useState(todo.done);

  const handleTodo = (evt) => {
    setTodoCheck(!todoCheck);
  };

  return (
    <>
      <ListItem key={todo.id} button onClick={handleTodo}>
        <ListItemText
          primary={todo.title}
          className={todoCheck ? classes.textStyle : ""}
        />
        <ListItemSecondaryAction>
          <Checkbox
            key={todo.id}
            edge="end"
            checked={todoCheck}
            onChange={handleTodo}
          />
        </ListItemSecondaryAction>
      </ListItem>
      <Divider />
    </>
  );
}

export default TodoListItem;
