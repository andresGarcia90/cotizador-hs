import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import PrimaryButton from '../UI/PrimaryButton';
import classes from './MainCard.module.css';
import BorderButton from '../UI/BorderButton';
import MainProperties from './MainProperties';
import AsistenciaList from './AsistenciaList';
import CoberturaList from './CoberturaList';

const MainCard = (props) => {
  const { premio, items, coberturas, asistencias } = props.enlatado;
  const premioPerDay = Math.round((premio * 100) / 30) / 100;
  const [borderText, setBorderText] = useState('¿Qué me cubre?');
  const [showExtra, setShowExtra] = useState(false);
  const borderClickHandler = () => {
    setShowExtra(!showExtra);
    setBorderText(!showExtra ? 'Mostrar menos' : '¿Qué me cubre?');
  };

  return (
    <Row className={classes.card}>
      <Col className={classes['card-header']}>
        <Row>
          <Col className={classes.advise}>Hogar con reintrego</Col>
        </Row>
        <Row className={classes['header']}>
          <Col xs="12" className="">
            <span>Desde</span>
          </Col>
          <Col xs="12" className={classes['price-month']}>
            <span>$</span>
            <span className={classes['price-month-value']}>{premio}</span>
            <span>/ mes</span>
          </Col>
          <Col xs="12">
            <p>
              <span className="fw-bolder">${premioPerDay}</span> / día
            </p>
          </Col>
        </Row>
        <Row>
          <Col className={classes.subheader}>
            <p style={{margin: '10px'}}>
              Protección básica para tu hogar <br />
              <strong>Ideal alquiler</strong>
            </p>
          </Col>
        </Row>
      </Col>

      <Col xs={12} className={classes['card-body']}>
        <Row>
          <Col xs={12}>
            <MainProperties properties={items} />
          </Col>
          {showExtra && <CoberturaList coberturas={coberturas} />}
          {showExtra && <AsistenciaList asistencias={asistencias} />}
          <Col xs={12}>
            <Row>
              <Col xs={12} className="my-2">
                <BorderButton
                  clickHandler={borderClickHandler}
                  text={borderText}
                />
              </Col>
              <Col xs={12} className="my-2">
                <PrimaryButton />
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainCard;
