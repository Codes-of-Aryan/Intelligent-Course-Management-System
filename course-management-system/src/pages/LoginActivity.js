import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import home from "../assets/home.png";
import { Link } from "react-router-dom";

function LoginActivity() {
  return (
    <Container fluid style={{ background: "#E1FFEE" }}>
      <Row style={{ height: "100vh", textAlign: "center" }}>
        <Col>
          <h1 style={{ color: "#FF99D7", marginTop: "4%" }}>Login Activity</h1>
          <Card style={{ marginTop: "3.5%", width: "75%", margin: "auto" }}>
            <Card.Body>
              <Container>
                <Row>
                  <Col className="col-3">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Login Date</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-3">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Login Time</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-3">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Logout Time</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-3">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Total Time Spent</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>dummy course</h6>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
          <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <Card
              style={{
                height: "200px",
                width: "200px",
                margin: "auto",
                marginTop: "5%",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              }}
            >
              <Card.Body
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  textAlign: "right",
                }}
              >
                <img
                  src={home}
                  alt="Avatar"
                  style={{
                    marginTop: "8%",
                  }}
                ></img>
                <h3 style={{ fontWeight: "bold" }}>Back Home</h3>
              </Card.Body>
            </Card>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginActivity;
