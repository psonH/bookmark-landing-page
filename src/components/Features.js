import React from "react";
import Locale from "../Locale";
import Heading from "./Heading";
import { Tabs, Tab, Row, Col } from "react-bootstrap";
import TabImageOne from "../images/illustration-features-tab-1.svg";
import TabImageTwo from "../images/illustration-features-tab-2.svg";
import TabImageThree from "../images/illustration-features-tab-3.svg";
import { Zoom, Flip } from "react-awesome-reveal";

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Simple Bookmarking",
      contentTitle: "Bookmark in one click",
      contentBody: Locale.featureSimpleBookmarking,
      tabImage: TabImageOne,
    },
    {
      id: 2,
      title: "Speady Searching",
      contentTitle: "Intelligent Search",
      contentBody: Locale.featureSpeedySearching,
      tabImage: TabImageTwo,
    },
    {
      id: 3,
      title: "Easy Sharing",
      contentTitle: "Share your bookmarks",
      contentBody: Locale.featureEasySharing,
      tabImage: TabImageThree,
    },
  ];
  return (
    <>
      <Heading
        title="Features"
        description={Locale.featureHeadingDescription}
      />
      <div className="w-75 mx-auto m-5 features">
        <Tabs className="feature-tabs" defaultActiveKey="1">
          {features.map((feature) => {
            return (
              <Tab key={feature.id} eventKey={feature.id} title={feature.title}>
                <Row className="mt-5">
                  <Col sm={12} lg={6}>
                    <Zoom>
                      <img
                        className="feature-tab-img"
                        src={feature.tabImage}
                        alt={feature.title}
                      />
                    </Zoom>
                  </Col>
                  <Col
                    sm={12}
                    lg={6}
                    className="d-flex flex-column justify-content-center features-tab-content"
                  >
                    <Flip direction="vertical">
                      <div className="feature-title">
                        {feature.contentTitle}
                      </div>
                      <div className="feature-body">{feature.contentBody}</div>
                      <div className="more-info-btn">More Info</div>
                    </Flip>
                  </Col>
                </Row>
              </Tab>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default Features;
