import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

function LandingPageBanner() {
  return (
    <Container fluid className="w-100 m-0 p-0 d-flex">
      <Row className="m-0 p-0">
        <Col className="m-0 p-0">
          <Image
            className="d-flex"
            src="https://cdn.shopify.com/s/files/1/0535/9093/files/sensorybanner_1600x.jpg?v=1602455199"
            fluid
          />
        </Col>
      </Row>
    </Container>
  );
}

export default LandingPageBanner;
