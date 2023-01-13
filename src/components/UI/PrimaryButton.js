import React from 'react';
import classes from './PrimaryButton.module.css';

const PrimaryButton = (props) => {
  return (
    <button className={classes.button} onClick={props.clickHandler}>
      50% Off
    </button>
  );
};

export default PrimaryButton;
