import React from "react";
import { Row, Col } from "react-bootstrap";
import HeroBanner from "../images/illustration-hero.svg";
import { Slide } from "react-awesome-reveal";
import Locale from "../Locale";

const Banner = () => {
  return (
    <Row className="banner">
      <Col
        sm={12}
        lg={6}
        className="d-flex flex-column justify-content-center order-2 order-lg-1 banner-left"
      >
        <Slide direction="left">
          <div className="banner-title">{Locale.bannerTitle}</div>
          <p className="banner-copy">{Locale.bannerCopy}</p>
          <div className="d-flex">
            <div className="btn-get-chrome">{Locale.getChrome}</div>
            <div className="btn-get-firefox">{Locale.getFirefox}</div>
          </div>
        </Slide>
      </Col>

      <Col
        sm={12}
        lg={6}
        className="d-flex justify-content-center order-1 order-lg-2"
      >
        <Slide direction="right">
          <img className="hero-banner" src={HeroBanner} alt="hero-banner" />
          {/*<div className="blue-bg-pattern"></div>*/}
        </Slide>
      </Col>
    </Row>
  );
};

export default Banner;
