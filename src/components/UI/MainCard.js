import React from 'react';
import { Col, Row, Image, Container } from 'react-bootstrap';
import cancelIcon from './../../img/cancel.svg';
import PrimaryButton from './PrimaryButton'
// import successIcon from "./../../img/success.svg";
import classes from './MainCard.module.css';
import BorderButton from './BorderButton';
const MainCard = (props) => {
  return (
    <div className={classes.card}>
      <div className={classes.advise}>
        <p>Hogar con reintrego</p>
      </div>
      <div className={classes.header}>
        <span>Desde</span>
        <div className={classes['price-month']}>$ 1.141 / mes</div>
        <div className={classes['price-day']}>$38,04 / día</div>
      </div>
      <div className={classes.subheader}>
        Te devolvemos el 25% <br /> en un voucher de Frávega
      </div>
      <div className={classes.body}>
        <div>
          <Image src={cancelIcon} alt="cancel"></Image>
          <p>Cámara de monitoreo</p>
        </div>
      </div>
      <div className={classes.footer}>
        <BorderButton></BorderButton>
        <PrimaryButton></PrimaryButton>
      </div>
    </div>
  );
};

export default MainCard;
