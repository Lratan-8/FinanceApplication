import React, { useState } from "react";
import "./topbarhomepage.css";
import { Switch } from "antd";
import { BsSun, BsMoonStarsFill } from "react-icons/bs";
import logoDarkBackgroundLess from '../../assets/logoDarkBackgroundLess.png'

export default function TopbarHomePage(props) {

  return (
    <div className="topbarhomepage" style={{backgroundColor: props.theme.themeDark}}>
    <div style={{width: '24.5%'}}>
        <img src={logoDarkBackgroundLess}></img>
    </div>
    <div style={{width: "65%"}}>

    </div>
      <div>
        <BsMoonStarsFill color={props.theme.textColor}/>
        <Switch onClick={props.changeTheme} />
        <BsSun color={props.theme.textColor}/>
      </div>
    </div>
  );
}
