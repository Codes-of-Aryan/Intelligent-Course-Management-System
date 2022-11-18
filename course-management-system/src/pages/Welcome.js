import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

function Home() {
  return (
    <Container>
      <Row style={{ height: "100vh" }}>
        <Col>
          <Row style={{ height: "50vh", textAlign: "center" }}>
            <img
              src={logo}
              alt="Avatar"
              style={{
                width: "200px",
                height: "170px",
                borderRadius: "15%",
                margin: "auto",
              }}
            />
          </Row>
          <Row style={{ height: "50vh", textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>Web App Name</h1>
          </Row>
        </Col>
        <Col>
          <Link to="/home" style={{ textDecoration: "none" }}>
            <Button
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                padding: "8px 32px",
                gap: "8px",
                position: "relative",
                background: "#FF8787",
                margin: "auto",
                top: "35%",
                width: "250px",
                fontWeight: "bold",
              }}
            >
              Login
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
