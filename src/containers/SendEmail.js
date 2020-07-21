import React from 'react'
import ReCAPTCHA from 'react-google-recaptcha'

import StatefulComponent from "../hoc/StatefulComponent"

import classes from "./SendEmail.css"

class SendEmail extends React.Component {

   render() {

      const onChange(value) {
         consolde.log("Captcha value:", value);
      }

      return (
         <StatefulComponent>
            <ReCAPTCHA>
               sitekey=
               onChange={onChange}
            </ReCAPTCHA>
            <input className={classes.InputName}></input>
            <input className={classes.InputEmail}></input>
            <input className={classes.InputMessage}></input>
            <button className={classes.SubmitButton}>Submit</button>
         </StatefulComponent>
      )

   }


}

export default SendEmail