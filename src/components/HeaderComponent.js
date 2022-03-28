import React from 'react';
import classes from './HeaderComponent.module.css'
const Header=()=>{
    return(
  <React.Fragment>
      <header className={classes.title}>
  <h2 className={classes.trainingtracker}>Training Tracker App</h2>
  </header>
  </React.Fragment>);
};

export default Header;