import React from "react";
import TodoProvider from "./contexts/TodoContext";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

import { Container, Typography, Card, CardContent } from "@material-ui/core";
import NavBar from "./components/NavBar";
import "./App.css";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  header: {
    marginBottom: "20px",
  },
  listStyle: {
    marginBottom: "20px",
  },
  cardStyle: {},
});

function App() {
  const classes = useStyles();

  return (
    <>
      <NavBar />
      <br />
      <Container maxWidth="md">
        <Card className={classes.cardStyle}>
          <CardContent>
            <Typography className={classes.header} variant="h3">
              Lista de Atividades
            </Typography>
            <TodoProvider>
              <TodoList />
              <div className={classes.listStyle}></div>
              <AddTodo />
            </TodoProvider>
          </CardContent>
        </Card>
      </Container>
    </>
  );
}

export default App;
