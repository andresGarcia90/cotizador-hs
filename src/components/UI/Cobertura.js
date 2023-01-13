import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiInfo } from 'react-icons/fi';
import classes from './Cobertura.module.css';

const Cobertura = (props) => {
  const { title, info, price } = props;
  return (
    <Row>
      <Col xs={8} className={classes['cobertura-item-title']}>
        {title} <FiInfo />
      </Col>
      <Col xs={4} className={classes['cobertura-item-price']}>
        ${price}
      </Col>
    </Row>
  );
};

export default Cobertura;
