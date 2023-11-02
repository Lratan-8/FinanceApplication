import { Card, Switch } from "antd";
import React, { useState } from "react";
import logoDarkBackgroundLess from "../../assets/logoDarkBackgroundLess.png";
import analytics from '../../assets/analytics.gif'
import LoginForm from "./LoginForm";
import darktheme from "../../themes/darktheme";
import SignupForm from "./SignupForm";

export default function Authentication(props) {

  const [loginSignup, setloginSignup] = useState('login')

  const onclick = () => {
    if(loginSignup === 'login'){
      setloginSignup('signup')
    }else{
      setloginSignup('login')
    }
  }

  return (
    <div
      style={{ backgroundColor: "black", marginTop: "100px", display: "flex" }}
    >
      <img src={logoDarkBackgroundLess} style={{width: '50%'}}></img>
      <Card
        bordered={false}
        style={{
          width: 800,
          background: "#121212",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div style={{display: 'flex', width: '100%', alignItems: 'center', justifyContent: 'center'}}>
          <h3 style={{color: props.theme.textColor}}>Login</h3>
          <Switch onClick={onclick}/>
          <h3 style={{color: props.theme.textColor}}>Sign Up</h3>
        </div>
        {loginSignup === 'login' ? 
         <LoginForm theme={props.theme}/> : <SignupForm theme={props.theme}/>}
        
      </Card>
    </div>
  );
}
