import React from "react";
import Heading from "./Heading";
import Locale from "../Locale";
import ChromeLogo from "../images/logo-chrome.svg";
import FirefoxLogo from "../images/logo-firefox.svg";
import OperaLogo from "../images/logo-opera.svg";
import CardDots from "../images/bg-dots.svg";
import { Card, Col, Row } from "react-bootstrap";
import { Zoom } from "react-awesome-reveal";

const Downloads = () => {
  const extensions = [
    {
      id: 1,
      title: "Add to Chrome",
      version: "Minimum version 62",
      browserLogo: ChromeLogo,
    },
    {
      id: 2,
      title: "Add to Firefox",
      version: "Minimum version 55",
      browserLogo: FirefoxLogo,
    },
    {
      id: 3,
      title: "Add to Opera",
      version: "Minimum version 46",
      browserLogo: OperaLogo,
    },
  ];
  return (
    <>
      <Heading
        title="Download the extension"
        description={Locale.downloadBody}
      />
      <Row className="w-75 mx-auto d-flex my-3 justify-content-center">
        {extensions.map((extension) => {
          return (
            <Col
              key={extension.id}
              sm={12}
              lg={4}
              className="extension-container p-0"
            >
              <Zoom>
                <Card className="extension-card">
                  <img
                    src={extension.browserLogo}
                    alt={extension.title}
                    className="browser-logo"
                  />
                  <Card.Body>
                    <Card.Title className="font-weight-bold">
                      {extension.title}
                    </Card.Title>
                    <Card.Text className="feature-body">
                      {extension.version}
                    </Card.Text>
                  </Card.Body>
                  <img src={CardDots} alt="card-dots" className="mb-4" />
                  <div className="download-btn">Add & Install Extension</div>
                </Card>
              </Zoom>
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Downloads;
