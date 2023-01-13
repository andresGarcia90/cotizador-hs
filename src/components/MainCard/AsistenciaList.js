import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Asistencia from '../UI/Asistencia';
import classes from './AsistenciaList.module.css';

const AsistenciaList = (props) => {
  const asistencias = props.asistencias;
  return (
    <>
      <Col xs={12}>
        <Row className={classes['asistencia-wrap']}>
          <Col xs={12} className={classes['asistencia-title']}>
            Asistencias
          </Col>
          <Col xs={12} className={classes.hasta}>
            hasta
          </Col>
        </Row>
      </Col>

      {asistencias.map((asistencia) => {
        return (
          <Asistencia
            key={asistencia.idAsistencia}
            title={asistencia.tituloAsistencia}
            price={asistencia.montoAsistencia}
            description={asistencia.descAsistencia}
          />
        );
      })}
    </>
  );
};

export default AsistenciaList;
