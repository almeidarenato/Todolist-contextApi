import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
// import { Container } from './styles';

function NavBar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">Todo List</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
