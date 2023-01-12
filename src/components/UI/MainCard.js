import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import { FiInfo } from 'react-icons/fi';

// import cancelIcon from './../../img/cancel.svg';
import PrimaryButton from './PrimaryButton';
import successIcon from './../../img/success.svg';
import classes from './MainCard.module.css';
import BorderButton from './BorderButton';
const MainCard = (props) => {
  const [borderText, setBorderText] = useState('¿Qué me cubre?');
  const [showExtra, setShowExtra] = useState(false);
  const borderClickHandler = (event) => {
    setShowExtra(!showExtra);
    setBorderText(!showExtra ? 'Mostrar menos' : '¿Qué me cubre?');
    console.log(borderText);
  };

  return (
    <Row>
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
            <span className={classes['price-month-value']}>1.141</span>
            <span>/ mes</span>
          </Col>
          <Col xs="12">
            <p>
              <span className="fw-bolder">$38,04</span> / día
            </p>
          </Col>
        </Row>
        <Row>
          <Col className={classes.subheader}>
            <p>
              Protección básica para tu hogar <br />{' '}
              <strong>Ideal alquiler</strong>
            </p>
          </Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row className={classes.item}>
          <Col>
            <img src={successIcon} alt="success" className={classes.imagen} />
            <span>Cámara de monitoreo</span>
          </Col>
        </Row>
      </Col>

      {showExtra && (
        <Col xs={12}>
          <Row>
            <Col xs={12} className={classes.hasta}>
              hasta
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={8} className={classes['cobertura-item-title']}>
                  Robo/Hurto + Daños <FiInfo />
                </Col>
                <Col xs={4} className={classes['cobertura-item-price']}>
                  $4.000.000
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      )}

      {showExtra && (
        <Col xs={12}>
          <Row className={classes['asistencia-wrap']}>
            <Col xs={12} className={classes['asistencia-title']}>
              Asistencias
            </Col>
            <Col xs={12} className={classes.hasta}>
              hasta
            </Col>
            <Col xs={12}>
              <Row>
                <Col xs={8} className={classes['asistencia-item-title']}>
                  ASISTENCIAS DEL HOGAR
                </Col>
                <Col xs={4} className={classes['asistencia-item-price']}>
                  $37.500
                </Col>
              </Row>
              <Row>
                <Col xs={8} className={classes['asistencia-item-description']}>
                  <p>
                    Servicios de urgencia de cerrajería, electricidad,
                    cristalería, plomería y gas.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      )}
      <Col xs={12}>
        <Row>
          <Col xs={12} className="my-2">
            <BorderButton clickHandler={borderClickHandler} text={borderText} />
          </Col>
          <Col xs={12} className="my-2">
            <PrimaryButton />
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default MainCard;
