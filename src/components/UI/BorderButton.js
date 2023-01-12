import React from 'react';
import classes from './BorderButton.module.css';

function BorderButton(props) {
  
  console.log(props);
  const text = props.text && props.text.length > 0 ? props.text : '¿Qué me cubre?';


  return (
    <button className={classes.button} onClick={props.clickHandler}>{text}</button>
  )
}

export default BorderButton