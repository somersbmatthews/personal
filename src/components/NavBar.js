import React from 'react'
import StatelessComponent from "../higher_order_components/StatelessComponent"
import NavBarItem from './NavBarItem'




const NavBar = (props) => {
   const NavBarItemsList = [
      "Home",
      "Projects",
      "Blog",
      "Contact"
   ]

   let JSXListOfNavBarItems =
      NavBarItemsList.map((item, index) => {
         return(
            <span key={index}>{item}</span>
         )
      })
      
   console.log("THIS IS JSXListOfNavBarItems", JSXListOfNavBarItems)
   return (
      <StatelessComponent>
         {JSXListOfNavBarItems}
      </StatelessComponent>
   )
}

export default NavBar;