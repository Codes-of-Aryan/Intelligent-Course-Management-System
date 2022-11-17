import React from "react";
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

function MyCourses() {
  return (
    <Container fluid style={{ background: "#E1FFEE", height:'100vh' }}>
    <h1 style={{ color: "#FF99D7", paddingTop: "4%", textAlign: 'center', marginBottom: '4%' }}>My Courses</h1>
      <Row style={{  }}>
        <Col style={{paddingBottom:'4%'}}>
          <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>1</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>2</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>3</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{  }}>
        <Col style={{paddingBottom:'4%'}}>
          <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>4</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>5</h3>
            </Card.Body>
          </Card>
        </Col>


        <Col>
          <Card
            style={{
              height: "200px",
              width: "400px",
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
                src={myCourses}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>6</h3>
            </Card.Body>
          </Card>
        </Col>

      </Row>
    </Container>
  );
}

export default MyCourses;
