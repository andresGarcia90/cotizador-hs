import React, { useEffect, useRef, useState } from 'react';
import { Button, Col, Row, Tooltip } from 'react-bootstrap';
import { FiInfo } from 'react-icons/fi';
import classes from './Cobertura.module.css';
import Overlay from 'react-bootstrap/Overlay';

const Cobertura = (props) => {
  const target = useRef();
  useEffect(() => {
    console.log(target.current);
    // return () => {
    // }
  }, [target]);

  const [show, setShow] = useState(false);

  const clickHandler = () => {
    setShow(!show);
  };

  console.log(target);

  const { title, info, price } = props;
  return (
    <Row>
      <Col xs={8} className={classes['cobertura-item-title']}>
        {title}{' '}
        <Button ref={target} onClick={clickHandler}  variant="light">
        <FiInfo target={target}/>
        </Button>
        <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <Tooltip id="overlay-example" {...props}>
            {info}
          </Tooltip>
        )}
      </Overlay>
        {/* <FiInfo target={target}  onClick={clickHandler}/> */}
      </Col>
      <Col xs={4} className={classes['cobertura-item-price']}>
        ${price}
      </Col>
    </Row>
  );
};

export default Cobertura;
