import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const MenuBar = () => (
  <header>
    <AppBar position='static'>
      <Toolbar>
        <Typography variant='h6'>
          <Link to='/'>Home</Link>
        </Typography>
        <Typography variant='h6'>
          <Link to='/form'>Form</Link>
        </Typography>
        <Typography variant='h6'>
          <Link to='view'>View</Link>
        </Typography>
      </Toolbar>
    </AppBar>
  </header>
);

export default MenuBar;
