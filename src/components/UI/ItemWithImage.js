import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './ItemWithImage.module.css';
import successIcon from './../../img/success.svg';
import cancelIcon from './../../img/cancel.svg';

const ItemWithImage = (props) => {
  const icon = props.success ? successIcon : cancelIcon;
  const iconDescription = props.success ? 'Success' : 'Deny';
  return (
    <Row >
      <Col className={classes.item}>
        <img src={icon} alt={iconDescription} className={classes.imagen} />
        <span className={classes['item-desc']}>{props.title}</span>
      </Col>
    </Row>
  );
};

export default ItemWithImage;
