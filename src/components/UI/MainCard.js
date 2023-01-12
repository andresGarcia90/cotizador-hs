import React from 'react';
import { Col, Row } from 'react-bootstrap';
// import cancelIcon from './../../img/cancel.svg';
import PrimaryButton from './PrimaryButton'
import successIcon from "./../../img/success.svg";
import classes from './MainCard.module.css';
import BorderButton from './BorderButton';
const MainCard = (props) => {
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
          <Col ><img src={successIcon} alt='success' className={classes.imagen}/><span>Cámara de monitoreo</span></Col>
        </Row>
      </Col>
      <Col xs={12}>
        <Row>
          <Col xs={12} className='my-2'>
            <BorderButton/>
          </Col>
          <Col xs={12} className='my-2'>
            <PrimaryButton/>
          </Col>
        </Row>
      </Col>
     
    </Row>
  );
};

export default MainCard;
