import React from 'react';

import StatelessComponent from '../higher_order_components/StatelessComponent'

import styles from "./NavBarItem.css"
const NavBarItem = (props) => {
   return (
      <StatelessComponent>
         <span className={styles.NavBarItem}></span>
      </StatelessComponent>
   )
}