import React from 'react';
import { Container, Row, Col } from "reactstrap";

import "./services.css";

import cartIcon from "../assets/images/1.png";

const Services = () => {
  return (
    <section className="services">
        <Container>
            <Row>
                <Col lg="3" md="4">
                     <div className="service__item" >
                        <span><img src={cartIcon} alt="" /></span>
                        <div>
                            <h3> Starters </h3>
                            <p> Lorem ipsum dolor sit amet.</p>
                        </div>
                     </div>
                </Col>
            </Row>
        </Container>
    </section>
  );
};

export default Services;
