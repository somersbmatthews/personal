import React from 'react'

import StatefulComponent from "../hoc/StatefulComponent"

import classes from "./SendEmail.css"

class SendEmail extends React.Component {

   render() {

      return (
         <StatefulComponent>
            <input className={classes.InputName}></input>
            <input className={classes.InputEmail}></input>
            <input className={classes.InputMessage}></input>
            <button className={classes.SubmitButton}>Submit</button>
         </StatefulComponent>
      )

   }


}

export default SendEmail