import React from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './Asistencia.module.css';

const Asistencia = (props) => {
  const { title, price, description } = props;
  return (
    <Col xs={12}>
      <Row>
        <Col xs={8} className={classes['asistencia-item-title']}>
          {title}
        </Col>
        <Col xs={4} className={classes['asistencia-item-price']}>
          ${price}
        </Col>
      </Row>
      <Row>
        <Col xs={8} className={classes['asistencia-item-description']}>
          <p>{description}</p>
        </Col>
      </Row>
    </Col>
  );
};

export default Asistencia;
