import React, { useState, useEffect } from "react";
import { Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Document, Page } from "react-pdf";

function Resume() {
  const [width, setWidth] = useState(1200);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <div>
      <Container fluid className="resume-section">
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            target="_blank"
            style={{ maxWidth: "250px" }}
          >
            &nbsp;Download CV
          </Button>
        </Row>

        <Row className="resume">
          <Document className="d-flex justify-content-center">
            <Page pageNumber={1} scale={width > 786 ? 1.7 : 0.6} />
          </Document>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button
            variant="primary"
            //href={pdf}
            target="_blank"
            style={{ maxWidth: "250px" }}
          >

          </Button>
        </Row>
      </Container>
    </div>
  );
}

export default Resume;