import React from "react";
import { Fade } from "react-awesome-reveal";

const Heading = ({ title, description }) => {
  return (
    <Fade duration={2000}>
      <div className="d-flex flex-column mx-auto text-center heading">
        <div className="heading-title">{title}</div>
        <div className="heading-body">{description}</div>
      </div>
    </Fade>
  );
};

export default Heading;
