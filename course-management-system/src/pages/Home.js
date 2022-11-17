import React, {useState, useEffect} from "react";
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

  const [name, setName] = useState([]);

  useEffect( () => {
    fetch("/welcome").then(
      res => res.json()
    ).then(
      name=>{
        setName(name)
        console.log(name)
      }
    )
  }, [])

  return (
    <Container fluid style={{ background: "#E1FFEE" }}>
      <Row style={{ height: "30vh" }}>
        <Col className="col-5">
          <img
            src={profilePhoto}
            alt="Avatar"
            style={{
              width: "200px",
              height: "200px",
              borderRadius: "50%",
              marginLeft: "50%",
              marginTop: "8%",
            }}
          />
        </Col>
        <Col className="col-7">
          <h1 style={{ marginTop: "13%" }}>
            <span style={{ color: "#7978FF" }}>Welcome </span>{", " + name[0]+ " "+name[1]}
          </h1>
          <p
            style={{ color: "#748DA6", fontWeight: "bold", paddingLeft: "5px" }}
          >
            Last login: 9:30am 31 October 2022
          </p>
        </Col>
      </Row>
      <Row style={{ height: "50vh", marginLeft: "10%", marginRight: "10%" }}>
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
      <Row style={{ height: "20vh" }}>
        <Col className="col-2">
          <Card
            style={{
              height: "30px",
              width: "120px",
              margin: "auto",
              marginTop: "25%",
              boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
            }}
          >
            <Card.Body
              style={{
                display: "flex",
                flexDirection: "row",
                textAlign: "right",
                paddingLeft: "20px",
                paddingTop: "5px",
              }}
            >
              <img
                src={logout}
                alt="Avatar"
                style={{
                  height: "20px",
                  width: "20px",
                }}
              ></img>
              <h6 style={{ fontWeight: "bold" }}>Logout</h6>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-10" style={{ paddingLeft: "25%" }}>
          <h3>&#10071; Upcoming Classes &#10071;</h3>
          <img
            src={arrows}
            alt="Avatar"
            style={{
              marginLeft: "15%",
            }}
          ></img>
        </Col>
      </Row>
      <Row style={{ height: "100vh", textAlign: "center" }}>
        <Col>
          <h1 style={{ color: "#C47AFF", marginTop: "4%" }}>
            Upcoming Classes
          </h1>
          <Card style={{ marginTop: "2%" }}>
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
                      <img
                        src={zoom}
                        style={{ height: "50px", width: "75px" }}
                      ></img>
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
