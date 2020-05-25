import React, { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { TextField, Button } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import { makeStyles } from "@material-ui/core/styles";
// import { Container } from './styles';

const useStyles = makeStyles({
  inputStyle: { marginRight: "20px" },
  buttonStyle: {
    marginRight: "20px",
  },
});

function AddTodo() {
  const { saveTodos } = useContext(TodoContext);
  const [todo, setTodo] = useState();

  const handleForm = (evt) => {
    evt.preventDefault();
    evt.target.reset();
    saveTodos(todo);
  };

  const handleTodo = (evt) => {
    setTodo({ ...todo, title: evt.target.value });
  };

  const classes = useStyles();
  return (
    <div>
      <form action="/" onSubmit={handleForm}>
        <TextField
          label="Nova Atividade"
          type="text"
          name="todo"
          variant="outlined"
          onChange={handleTodo}
          className={classes.inputStyle}
          required
          size="small"
        />

        <Button
          variant="outlined"
          color="primary"
          type="submit"
          startIcon={<SaveIcon />}
          className={classes.buttonStyle}
        >
          Adicionar
        </Button>
      </form>
    </div>
  );
}

export default AddTodo;
