import React from 'react';

import StatelessComponent from '../hoc/StatelessComponent'

import classes from "./NavBarItem.css"
const NavBarItem = (props) => {
   return (
      <StatelessComponent>
         <span className={classes.NavBarItem}></span>
      </StatelessComponent>
   )
}