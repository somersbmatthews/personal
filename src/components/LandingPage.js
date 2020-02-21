import React from 'react'

import StatelessComponent from '../hoc/StatelessComponent'

import classes from "./LandingPage.css"

import water from "../water.jpg"

import NavBar from "./NavBar"

const LandingPage = () => {
   return (
      <StatelessComponent>
         <div className={classes.lpbackground} src={water}>
            <div className={classes.water}>
               <NavBar />
               Somers Baucum Matthews
               Programmer
               Cell Biologist 
               Pianist
               Swimmer
               <div className={classes.LandingPageText}>Blog</div>
               <div className={classes.LandingPageText}>Contact</div>
               <div className={classes.LandingPageText}>Projects</div>
               <div className={classes.LandingPageText}>GitHub</div>
            </div>
         </div>
      </StatelessComponent>
   )

}

export default LandingPage