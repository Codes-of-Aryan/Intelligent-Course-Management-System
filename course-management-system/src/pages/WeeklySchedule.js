import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Calendar from "../components/Calendar";
import home from "../assets/home.png";
import Header from "../components/Header";

function Home() {
  return (
    <>
    <Header />
    <Container fluid style={{ background: "#C3EAFB" }}>
      <h1
        style={{
          color: "#6C82C9",
          paddingTop: "4%",
          textAlign: "center",
          marginBottom: "2%",
        }}
      >
        Weekly Schedule
      </h1>
      <Row style={{ height: "100vh" }}>
        <Calendar />
      </Row>
      <Link to="/home" style={{ textDecoration: "none", color: "black" }}>
            <Card
              style={{
                height: "200px",
                width: "200px",
                margin: "auto",
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
    </Container>
    </>
  );
}

export default Home;
