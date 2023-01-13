import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Cobertura from '../UI/Cobertura';
import classes from './AsistenciaList.module.css';
const CoberturaList = (props) => {
  const coberturas = props.coberturas;
  return (
    <Col xs={12}>
      <Row>
        <Col xs={12} className={classes.hasta}>
          hasta
        </Col>
        <Col xs={12}>
          {coberturas.map((cobertura) => {
            return (
              <Cobertura
                key={cobertura.idCobertura}
                title={cobertura.tituloCobertura}
                price={cobertura.montoCobertura}
                info={cobertura.infoCobertura}
              />
            );
          })}
        </Col>
      </Row>
    </Col>
  );
};

export default CoberturaList;
