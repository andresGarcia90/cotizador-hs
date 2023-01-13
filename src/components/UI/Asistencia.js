import React, { useContext } from 'react';
import { Col, Row } from 'react-bootstrap';
import classes from './Asistencia.module.css';
import FormatearNumero from './../../utils/numberUtils';
import DescuentoContext from '../../context/DescuentoContext';


const Asistencia = (props) => {
  const { title, price, description } = props;
  const ctxDescuento = useContext(DescuentoContext);
  const priceUpdated = price === 0 ? 'SIN TOPE' : `$${FormatearNumero(price, ctxDescuento.aplicarDescuento)}`;
  return (
    <Col xs={12}>
      <Row>
        <Col xs={8} className={classes['asistencia-item-title']}>
          {title}
        </Col>
        <Col xs={4} className={classes['asistencia-item-price']}>
          {priceUpdated}
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
