import React, { useState } from "react";
import Locale from "../Locale";
import Heading from "./Heading";
import { Accordion, Card, Button } from "react-bootstrap";
import IconUp from "../images/icon-arrow.svg";
import { Fade } from "react-awesome-reveal";

const FAQ = () => {
  const [toggle, setToggle] = useState(false);

  const toggleAccordion = (e) => {
    const event = e.target.dataset.event;
    setToggle(toggle === Number(event) ? null : Number(event));
  };

  const questions = [
    {
      id: 1,
      text: "What is Bookmark?",
    },
    {
      id: 2,
      text: "How can I request a new browser?",
    },
    {
      id: 3,
      text: "Is there a mobile app?",
    },
    {
      id: 4,
      text: "What about other Chromium browsers?",
    },
  ];
  return (
    <>
      <Heading title="Frequently Asked Questions" description={Locale.faq} />
      <div className="w-50 mx-auto faq">
        <Accordion defaultActiveKey="1">
          {questions.map((question) => {
            return (
              <div key={question.id} className="faq-card">
                <Accordion.Toggle
                  as={Button}
                  variant="link"
                  eventKey={question.id}
                  className="faq-title"
                >
                  <div
                    onClick={(e) => toggleAccordion(e)}
                    data-event={question.id}
                    className="d-flex justify-content-between"
                  >
                    {question.text}
                    <div>
                      <img
                        src={IconUp}
                        alt="icon-up"
                        className={toggle === question.id ? "toggle-up" : null}
                      />
                    </div>
                  </div>
                </Accordion.Toggle>
                <Accordion.Collapse eventKey={question.id}>
                  <Fade>
                    <Card.Body className="faq-body">{Locale.lorem}</Card.Body>
                  </Fade>
                </Accordion.Collapse>
              </div>
            );
          })}
        </Accordion>
        <div className="more-info-btn mx-auto my-3">More Info</div>
      </div>
    </>
  );
};

export default FAQ;
