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

function MyProfile() {
  return (
    <Container fluid style={{ background: "#E1FFEE" }}>
      <Row style={{ height: "100vh", marginLeft: "10%", marginRight: "10%" }}>
        <h1 style={{ color: "#FF99D7", marginTop: "4%" }}>My Profile</h1>
        <Col>
          <Card
            style={{
              height: "200px",
              width: "200px",
              margin: "auto",
              marginTop: "25%",
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
              <h3 style={{ fontWeight: "bold" }}>My Courses</h3>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Link
            to="/weekly-schedule"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card
              style={{
                height: "200px",
                width: "200px",
                margin: "auto",
                marginTop: "25%",
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
                  src={weeklySchedule}
                  alt="Avatar"
                  style={{
                    marginTop: "8%",
                  }}
                ></img>
                <h3 style={{ fontWeight: "bold" }}>Weekly Schedule</h3>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Link
            to="/login-activity"
            style={{ textDecoration: "none", color: "black" }}
          >
            <Card
              style={{
                height: "200px",
                width: "200px",
                margin: "auto",
                marginTop: "25%",
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
                  src={loginActivity}
                  alt="Avatar"
                  style={{
                    marginTop: "8%",
                  }}
                ></img>
                <h3 style={{ fontWeight: "bold" }}>Login Activity</h3>
              </Card.Body>
            </Card>
          </Link>
        </Col>
        <Col>
          <Card
            style={{
              height: "200px",
              width: "200px",
              margin: "auto",
              marginTop: "25%",
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
                src={myProfile}
                alt="Avatar"
                style={{
                  marginTop: "8%",
                }}
              ></img>
              <h3 style={{ fontWeight: "bold" }}>My Profile</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyProfile;
