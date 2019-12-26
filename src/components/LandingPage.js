import React from 'react'

import StatelessComponent from '../hoc/StatelessComponent'

import classes from "./LandingPage.css"

import NavBar from "./NavBar"

const LandingPage = () => {
   return (
      <StatelessComponent>
         <NavBar />
         <div className={classes.LandingPageText}>Blog</div>
         <div className={classes.LandingPageText}>Contact</div>
         <div className={classes.LandingPageText}>Projects</div>
         <div className={classes.LandingPageText}>GitHub</div>
      </StatelessComponent>
   )

}

export default LandingPage