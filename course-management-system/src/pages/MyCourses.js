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
import { Link, useLocation } from "react-router-dom";

function MyCourses() {
  const location = useLocation();
  console.log(location.state);
  const courses = location.state;
  console.log(courses);
  // const [courses, setCourses] = useState([]);

  // useEffect(() => {
  //   fetch("/courses")
  //     .then((res) => res.json())
  //     .then((info) => {
  //       setCourses(info);
  //       console.log("hello");
  //     });
  // }, []);

  // fetch("/courses")
  //     .then((res) => res.json())
  //     .then((info) => {
  //       setCourses(info);
  //       console.log("hello");
  //     }
  // );

  return (
    <Container fluid style={{ background: "#C3EAFB", height: "100vh" }}>
      <h1
        style={{
          color: "#FF99D7",
          paddingTop: "4%",
          textAlign: "center",
          marginBottom: "4%",
        }}
      >
        My Courses
      </h1>
      <Row style={{}}>
        <Col style={{ paddingBottom: "4%" }}>
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
              <h3 style={{ fontWeight: "bold" }}>{courses.courseDetails[0]}</h3>
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
              <h3 style={{ fontWeight: "bold" }}>{courses.courseDetails[1]}</h3>
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
              <h3 style={{ fontWeight: "bold" }}>{courses.courseDetails[2]}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{}}>
        <Col style={{ paddingBottom: "4%" }}>
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
              <h3 style={{ fontWeight: "bold" }}>{courses.courseDetails[3]}</h3>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default MyCourses;
