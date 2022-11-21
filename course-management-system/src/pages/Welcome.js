import React from "react";
import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/headerlogo.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Home() {

  const navigate = useNavigate()
  const [loginStatus, setLoginStatus] = useState(false)

  const loginRedirect = (data) => {
    console.log(data["login"])
    if (data["login"] === "Success") {
      navigate("/home")
      return;
    }
    alert("Face not recognised")
    setLoginStatus(false)
    return;
  }

  const login = () => {
    fetch("/login")
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
      })
      .then((data) => loginRedirect(data))
      .catch((err) => console.log(err));
  };


  return (
    <Container>
      <Row style={{ height: "100vh" }}>
        <Col>
          <Row style={{ height: "50vh", textAlign: "center" }}>
            <img
              src={logo}
              alt="Avatar"
              style={{
                borderRadius: "15%",
                margin: "auto",
              }}
            />
          </Row>
          <Row style={{ textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>Intelligent Course Management System</h1>
            <h6 style={{ fontWeight: "bold" }}><em>Developed by Group 33 (COMP3278A[2022] - Semester 1)</em></h6>
          </Row>
        </Col>
        <Col>
          {/* <Link to="/home" style={{ textDecoration: "none" }}> */}
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
            onClick={() => login()}
          >
            Login
          </Button>
          {/* </Link> */}
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
