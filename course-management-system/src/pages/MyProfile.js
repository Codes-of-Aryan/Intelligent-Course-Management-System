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
import userDetails from "../assets/userdetails.png";
import coursedetails from "../assets/coursedetails.png";
import { Link } from "react-router-dom";

function MyProfile() {
  const [student, setStudent] = useState([]);
  const [course, setCourses] = useState([]);

  useEffect(() => {
    fetch("/student-details")
      .then((res) => res.json())
      .then((student) => {
        setStudent(student);
        console.log(student);
      });
  }, []);

  useEffect(() => {
    fetch("/courses")
      .then((res) => res.json())
      .then((course) => {
        setCourses(course);
        console.log(course);
      });
  }, []);

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
        My Profile
      </h1>
      <Row>
        <Col className="col-5" style={{ paddingTop: "2.5%" }}>
          <Card
            style={{
              alignItems: "center",
              textAlign: "center",
              marginLeft: "10%",
            }}
          >
            <Card.Body>
              <img src={profilePhoto}></img>
              <h3 style={{ marginTop: "4%" }}>
                <b>{student.f_name + " " + student.l_name}</b>
              </h3>
              <h5>The University of Hong Kong</h5>
              <h5>Bachelor of Engineering</h5>
            </Card.Body>
          </Card>
        </Col>
        <Col className="col-7">
          <div style={{ display: "flex", flexDirection: "row" }}>
            <img src={userDetails} style={{height: '40px', width: '30px', marginRight: '2%'}}></img>
            <h4 style={{color: '#D6CD06'}}>User Details</h4>
          </div>
          <Card style={{ marginRight: "8%" }}>
            <Card.Body>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>Full Name</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.f_name + " " + student.l_name}</h5>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>UID</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.uid}</h5>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>Email</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.email}</h5>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>Year of Study</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.year}</h5>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>Curriculum</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>Bachelor of Engineering</h5>
                </Col>
              </Row>
              <Row style={{ marginBottom: "5px" }}>
                <Col className="col-4">
                  <h5>
                    <b>Major</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.major}</h5>
                </Col>
              </Row>
              <Row>
                <Col className="col-4">
                  <h5>
                    <b>Minor</b>
                  </h5>
                </Col>
                <Col className="col-8">
                  <h5>{student.minor}</h5>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row style={{ alignItems: "center", textAlign: "center" }}>
        <h3 style={{ marginTop: "2%" }}>Navigation</h3>
        <Card style={{ width: "90%", margin: "auto" }}>
          <Card.Body>
            <h5 style={{ marginBottom: "1%" }}>
              COMP3278 Introduction to database management systems [Section 1A,
              2022]
            </h5>
            <h5 style={{ marginBottom: "1%" }}>
              COMP3278 Introduction to database management systems [Section 1A,
              2022]
            </h5>
            <h5 style={{ marginBottom: "1%" }}>
              COMP3278 Introduction to database management systems [Section 1A,
              2022]
            </h5>
            <h5 style={{ marginBottom: "1%" }}>
              COMP3278 Introduction to database management systems [Section 1A,
              2022]
            </h5>
            <h5>
              COMP3278 Introduction to database management systems [Section 1A,
              2022]
            </h5>
          </Card.Body>
        </Card>
      </Row>
    </Container>
  );
}

export default MyProfile;
