import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import home from "../assets/home.png";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

function LoginActivity() {
  const location = useLocation();
  console.log(location.state);
  const login = location.state;
  console.log(login);

  return (
    <>
    <Header />
    <Container fluid style={{ background: "#C3EAFB" }}>
      <Row style={{ height: "100vh", textAlign: "center" }}>
        <Col>
          <h1 style={{ color: "#FF99D7", marginTop: "4%" }}>Login Activity</h1>
          <Card style={{ marginTop: "3.5%", width: "75%", margin: "auto" }}>
            <Card.Body>
              <Container>
                <Row>
                  <Col className="col-6">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Login Timestamp</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.timeStamp[0]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.timeStamp[1]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.timeStamp[2]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.timeStamp[3]}</h6>
                    </Row>
                  </Col>
                  <Col className="col-6">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Login Duration</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.duration[0]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.duration[1]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.duration[2]}</h6>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "15%" }}>{login.duration[3]}</h6>
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
    </>
  );
}

export default LoginActivity;
