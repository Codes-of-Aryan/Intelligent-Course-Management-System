import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import profilePhoto from "../assets/user.png";
import loginActivity from "../assets/loginactivity.png";
import logout from "../assets/logout.png";
import myCourses from "../assets/mycourses.png";
import myProfile from "../assets/myprofile.png";
import weeklySchedule from "../assets/weeklyschedule.png";
import arrows from "../assets/arrows.png";
import zoom from "../assets/zoom.png";
import { Link } from "react-router-dom";

function Home() {
  const [name, setName] = useState("");

  useEffect(() => {
    fetch("/test")
      .then((res) => res.json())
      .then((name) => {
        setName(name);
        console.log(name);
      });
  }, []);

  return (
    <Container fluid style={{ background: "#C3EAFB" }}>
      <Row style={{ textAlign: "center", backgroundColor: "#FFFCB2" }}>
        <h1 style={{ paddingTop: "2%", paddingBottom: "2%" }}>
          Intelligent Course Management System
        </h1>
      </Row>
      <Row style={{ height: "17vh" }}>
        <Col className="col-5">
          <img
            src={profilePhoto}
            alt="Avatar"
            style={{
              width: "175px",
              height: "175px",
              borderRadius: "50%",
              marginLeft: "60%",
              marginTop: "4%",
            }}
          />
        </Col>
        <Col className="col-7">
          <h1 style={{ marginTop: "7%" }}>
            <span style={{ color: "#7978FF" }}>Welcome </span>
            { name + "!"}
          </h1>
          <p
            style={{ color: "#748DA6", fontWeight: "bold", paddingLeft: "5px" }}
          >
            Last login: 9:30am 31 October 2022
          </p>
        </Col>
      </Row>
      <Row style={{ textAlign: "center", paddingBottom: "10%" }}>
        <Col>
          <h1 style={{ color: "#C47AFF", marginTop: "4%" }}>
            Upcoming Classes
          </h1>
          <Card
            style={{
              marginTop: "2%",
              backgroundColor: "#A6E4FF",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
              width: "90%",
              margin: 'auto'
            }}
          >
            <Card.Body>
              <Container>
                <Row>
                  <Col className="col-2">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Course</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "40%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-2">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Time</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "40%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-2">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Classroom</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "40%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-2">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>
                        Lecture/Tutorial Notes
                      </h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "29%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-2">
                    <Row>
                      <h5 style={{ fontWeight: "bold" }}>Notes from Teacher</h5>
                    </Row>
                    <Row>
                      <h6 style={{ marginTop: "40%" }}>dummy course</h6>
                    </Row>
                  </Col>
                  <Col className="col-2">
                    <Row
                      style={{
                        display: "flex",
                        flexDirection: "row",
                      }}
                    >
                      <h5 style={{ fontWeight: "bold" }}>
                        Zoom Link/Send to Email
                      </h5>
                    </Row>
                    <Row style={{ display: "flex", flexDirection: "column" }}>
                      {/* <h6 style={{ marginTop: '6%' }}>dummy course</h6> */}
                      <Button
                        style={{
                          background:
                            "linear-gradient(0deg, #006EF4, #006EF4), #FFFFFF",
                          width: "50%",
                          margin: "auto",
                          marginTop: "6%",
                        }}
                      >
                        Open Link
                      </Button>
                      <Button
                        style={{
                          background:
                            "linear-gradient(0deg, #F47500, #F47500), #FFFFFF",
                          width: "50%",
                          margin: "auto",
                          marginTop: "6%",
                        }}
                      >
                        Send to Email
                      </Button>
                    </Row>
                  </Col>
                </Row>
              </Container>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
