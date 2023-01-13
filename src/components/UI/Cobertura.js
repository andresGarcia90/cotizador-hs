import React from 'react';
import { Col, OverlayTrigger, Row, Tooltip } from 'react-bootstrap';
import { FiInfo } from 'react-icons/fi';
import classes from './Cobertura.module.css';

const Cobertura = (props) => {
  const { title, info, price } = props;

  const renderTooltip = (props) => (
    <Tooltip
      id="button-tooltip"
      {...props}
    >
      {info}
    </Tooltip>
  );

  return (
    <Row>
      <Col xs={8} className={classes['cobertura-item-title']}>
        {title}
        <OverlayTrigger
          placement="bottom"
          delay={{ show: 250, hide: 400 }}
          overlay={renderTooltip}
        >
          <span className={classes.icon}>
            <FiInfo />
          </span>
        </OverlayTrigger>
      </Col>
      <Col xs={4} className={classes['cobertura-item-price']}>
        ${price}
      </Col>
    </Row>
  );
};

export default Cobertura;
