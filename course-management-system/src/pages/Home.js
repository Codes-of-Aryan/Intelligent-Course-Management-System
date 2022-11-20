import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button, Card, Form } from "react-bootstrap";
import profilePhoto from "../assets/user.png";
import loginActivity from "../assets/loginactivity.png";
import logout from "../assets/logout.png";
import myCourses from "../assets/mycourses.png";
import myProfile from "../assets/myprofile.png";
import weeklySchedule from "../assets/weeklyschedule.png";
import arrows from "../assets/arrows.png";
import zoom from "../assets/zoom.png";
import { Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Header from "../components/Header";

function Home() {
  const [name, setName] = useState([]);
  const [course, setCourse] = useState([]);
  const [tutorial, setTutorial] = useState([]);
  const [courseList, setCourseList] = useState([]);
  const [loginDetail, setLoginDetail] = useState([]);

  useEffect(() => {
    fetch("/student-details")
      .then((res) => res.json())
      .then((name) => {
        setName(name);
        console.log(name);
      });
  }, []);

  useEffect(() => {
    fetch("/one-hour-course")
      .then((res) => res.json())
      .then((course) => {
        setCourse(course);
        console.log(course);
      });
  }, []);

  useEffect(() => {
    fetch("/one-hour-tutorial")
      .then((res) => res.json())
      .then((tutorial) => {
        setTutorial(tutorial);
        console.log(tutorial);
      });
  }, []);

  fetch("/courses")
    .then((res) => res.json())
    .then((info) => {
      setCourseList(info);
      // console.log(courseList);
    });

  fetch("/login-details")
    .then((res) => res.json())
    .then((info) => {
      setLoginDetail(info);
      // console.log(courseList);
    });

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_av48ilq",
        "template_g0d1df8",
        e.target,
        "O_SDXFxXZ7q-0HL37"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Email sent successfully!");
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <>
      <Header />
      <Container fluid style={{ background: "#C3EAFB" }}>
        <Row style={{ textAlign: "center", backgroundColor: "#FFFCB2" }}>
          <h1 style={{ paddingTop: "2%", paddingBottom: "2%" }}>
            Intelligent Course Management System
          </h1>
        </Row>
        <Row>
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
              {", " + name.f_name + " " + name.l_name + "!"}
            </h1>
            <p
              style={{
                color: "#748DA6",
                fontWeight: "bold",
                paddingLeft: "5px",
              }}
            >
              Last login: 2:00pm 19 November 2022
            </p>
          </Col>
        </Row>
        <Row style={{ height: "17vh", width: '90%', margin: 'auto', marginTop: "4%" }}>
          <Col>
            <Card style={{ width: "65%", height: "150px", margin: "auto" }}>
              <Link
                to="/my-courses"
                state={courseList}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Body style={{ textAlign: "center", margin: "auto" }}>
                  <img src={myCourses}></img>
                  <h3 style={{ textAlign: "center" }}>My Courses</h3>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "65%", height: "150px", margin: "auto" }}>
              <Link
                to="/my-profile"
                state={courseList}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Body style={{ textAlign: "center", margin: "auto" }}>
                  <img src={myProfile}></img>
                  <h3 style={{ textAlign: "center" }}>My Profile</h3>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "65%", margin: "auto" }}>
              <Link
                to="/login-activity"
                state={loginDetail}
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Body style={{ textAlign: "center", margin: "auto" }}>
                  <img src={loginActivity}></img>
                  <h3 style={{ textAlign: "center" }}>Login Activity</h3>
                </Card.Body>
              </Link>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: "65%", height: "150px", margin: "auto" }}>
              <Link
                to="/weekly-schedule"
                style={{ textDecoration: "none", color: "black" }}
              >
                <Card.Body style={{ textAlign: "center", margin: "auto" }}>
                  <img src={weeklySchedule}></img>
                  <h3 style={{ textAlign: "center" }}>Weekly Schedule</h3>
                </Card.Body>
              </Link>
            </Card>
          </Col>
        </Row>
        <Row style={{ textAlign: "center", paddingBottom: "10%" }}>
          <Col>
            <h1 style={{ color: "black", marginTop: "5%" }}>
              Upcoming Classes
            </h1>
            <Card
              style={{
                marginTop: "2%",
                backgroundColor: "#A6E4FF",
                boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                width: "90%",
                margin: "auto",
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
                        <h6 style={{ marginTop: "40%" }} name="course_name">
                          {course.CourseID + " " + course.CourseName}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>Time</h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }} name="time">
                          {course.ClassStart}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>Classroom</h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }} name="classroom">
                          {course.Location}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>
                          Lecture/Tutorial Notes
                        </h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "29%" }}>{course.Slides}</h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>
                          Notes from Teacher
                        </h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }} name="message">
                          {course.Message}
                        </h6>
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
                        <a
                          href={"" + course.ZoomLink}
                          target="_blank"
                          name="zoom-link"
                        >
                          <Button
                            style={{
                              background:
                                "linear-gradient(0deg, #006EF4, #006EF4), #FFFFFF",
                              width: "80%",
                              margin: "auto",
                              marginTop: "6%",
                            }}
                          >
                            Open Link
                          </Button>
                        </a>
                        <Form onSubmit={sendEmail}>
                          <input
                            type="hidden"
                            name="to_name"
                            defaultValue={name.f_name + " " + name.l_name}
                          ></input>
                          <input
                            type="hidden"
                            name="course_name"
                            defaultValue={
                              course.CourseID + " " + course.CourseName
                            }
                          ></input>
                          <input
                            type="hidden"
                            name="time"
                            defaultValue={course.ClassStart}
                          ></input>
                          <input
                            type="hidden"
                            name="classroom"
                            defaultValue={course.Location}
                          ></input>
                          <input
                            type="hidden"
                            name="message"
                            defaultValue={course.Message}
                          ></input>
                          <input
                            type="hidden"
                            name="zoom-link"
                            defaultValue={"" + course.ZoomLink}
                          ></input>
                          <input
                            type="hidden"
                            name="to_email"
                            defaultValue={name.email}
                          ></input>
                          <Button
                            style={{
                              background:
                                "linear-gradient(0deg, #F47500, #F47500), #FFFFFF",
                              width: "80%",
                              margin: "auto",
                              marginTop: "6%",
                            }}
                            type="submit"
                          >
                            Send to Email
                          </Button>
                        </Form>
                      </Row>
                    </Col>
                  </Row>
                </Container>
                <Container>
                  <Row style={{ marginTop: "4%" }}>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>Tutorial</h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }}>
                          {tutorial.CourseID + " " + tutorial.CourseName}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>Time</h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }}>
                          {tutorial.ClassStart}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>Classroom</h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }}>
                          {tutorial.Location}
                        </h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>
                          Lecture/Tutorial Notes
                        </h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "29%" }}>{tutorial.Slides}</h6>
                      </Row>
                    </Col>
                    <Col className="col-2">
                      <Row>
                        <h5 style={{ fontWeight: "bold" }}>
                          Notes from Teacher
                        </h5>
                      </Row>
                      <Row>
                        <h6 style={{ marginTop: "40%" }}>{tutorial.Message}</h6>
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
                        {/* <h6 style={{ marginTop: '6%' }}>dummy tutorial</h6> */}
                        <a href={"" + tutorial.ZoomLink} target="_blank">
                          <Button
                            style={{
                              background:
                                "linear-gradient(0deg, #006EF4, #006EF4), #FFFFFF",
                              width: "80%",
                              margin: "auto",
                              marginTop: "6%",
                            }}
                          >
                            Open Link
                          </Button>
                        </a>
                        <Form onSubmit={sendEmail}>
                          <input
                            type="hidden"
                            name="to_name"
                            defaultValue={name.f_name + " " + name.l_name}
                          ></input>
                          <input
                            type="hidden"
                            name="course_name"
                            defaultValue={
                              tutorial.CourseID + " " + tutorial.CourseName
                            }
                          ></input>
                          <input
                            type="hidden"
                            name="time"
                            defaultValue={tutorial.ClassStart}
                          ></input>
                          <input
                            type="hidden"
                            name="classroom"
                            defaultValue={tutorial.Location}
                          ></input>
                          <input
                            type="hidden"
                            name="message"
                            defaultValue={tutorial.Message}
                          ></input>
                          <input
                            type="hidden"
                            name="zoom-link"
                            defaultValue={"" + tutorial.ZoomLink}
                          ></input>
                          <input
                            type="hidden"
                            name="to_email"
                            defaultValue={name.email}
                          ></input>
                          <Button
                            style={{
                              background:
                                "linear-gradient(0deg, #F47500, #F47500), #FFFFFF",
                              width: "80%",
                              margin: "auto",
                              marginTop: "6%",
                            }}
                            type="submit"
                          >
                            Send to Email
                          </Button>
                        </Form>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
