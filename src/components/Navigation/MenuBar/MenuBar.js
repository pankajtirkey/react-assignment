import React from 'react';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

import styles from './MenuBar.module.css';

const routes = [
  { path: '/', label: 'Home' },
  { path: '/form', label: 'Form' },
  { path: '/view', label: 'View' }
];

const MenuBar = () => (
  <header>
    <AppBar position='static'>
      <Toolbar style={{ display: 'flex' }}>
        {routes.map((route) => (
          <Typography variant='h6' key={route.path} style={{ margin: 'auto' }}>
            <Link to={route.path} className={styles.Link}>
              {route.label}
            </Link>
          </Typography>
        ))}
      </Toolbar>
    </AppBar>
  </header>
);

export default MenuBar;
