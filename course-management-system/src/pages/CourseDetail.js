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
import userDetails from "../assets/userdetails.png";
import coursedetails from "../assets/coursedetails.png";
import { Link, useLocation } from "react-router-dom";
import Header from "../components/Header";

function CourseDetail() {
  const location = useLocation();
  console.log(location.state);
  const courseDetail = location.state;
  console.log(courseDetail);

  return (
    <>
      <Header />
      <Container fluid style={{ background: "#C3EAFB", height: "100vh" }}>
        <h1
          style={{
            color: "#FF99D7",
            paddingTop: "2%",
            textAlign: "center",
          }}
        >
          Course Details
        </h1>
        <Row style={{ textAlign: "center" }}>
          <h2 style={{ paddingTop: "2%" }}>
            {courseDetail.CourseID + " " + courseDetail.CourseName}
          </h2>
        </Row>
        <Row>
          <Card style={{ width: "80%", margin: "auto" }}>
            <h5
              style={{ marginLeft: "5%", marginRight: "5%", marginTop: "3%" }}
            >
              {courseDetail.Message}
            </h5>
            <Card.Body>
              <Row>
                <Col>
                  <Card style={{ backgroundColor: "#F1DEDE" }}>
                    <Row style={{ textAlign: "center", paddingTop: "4%" }}>
                      <h2>Professor</h2>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Name:</h6>
                      </Col>
                      <Col>
                        <h6>
                          {courseDetail.ProfessorFirstName +
                            " " +
                            courseDetail.ProfessorLastName}
                        </h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Email:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.ProfessorEmail}</h6>
                      </Col>
                    </Row>
                    <Row style={{ paddingBottom: "4%" }}>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Department:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.ProfessorDepartment}</h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ backgroundColor: "#F1DEDE" }}>
                    <Row style={{ textAlign: "center", paddingTop: "4%" }}>
                      <h2>Lectures</h2>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Day:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.LectureDay}</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Time:</h6>
                      </Col>
                      <Col>
                        <h6>
                          {courseDetail.LectureStartTime +
                            " - " +
                            courseDetail.LectureEndTime}
                        </h6>
                      </Col>
                    </Row>
                    <Row style={{ paddingBottom: "4%" }}>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Location:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.LectureLocation}</h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ backgroundColor: "#F1DEDE" }}>
                    <Row style={{ textAlign: "center", paddingTop: "4%" }}>
                      <h3>Tutorials</h3>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Day:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.TutorialDay}</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Time:</h6>
                      </Col>
                      <Col>
                        <h6>
                          {" "}
                          {courseDetail.TutorialStartTime +
                            " - " +
                            courseDetail.TutorialEndTime}
                        </h6>
                      </Col>
                    </Row>
                    <Row style={{ paddingBottom: "4%" }}>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Location:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.TutorialLocation}</h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
                <Col>
                  <Card style={{ backgroundColor: "#F1DEDE" }}>
                    <Row style={{ textAlign: "center", paddingTop: "4%" }}>
                      <h3>Consultation Hours</h3>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Day:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.ConsultationDay}</h6>
                      </Col>
                    </Row>
                    <Row>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Time:</h6>
                      </Col>
                      <Col>
                        <h6> {courseDetail.ConsultationTime}</h6>
                      </Col>
                    </Row>
                    <Row style={{ paddingBottom: "4%" }}>
                      <Col style={{ textAlign: "center" }}>
                        <h6>Location:</h6>
                      </Col>
                      <Col>
                        <h6>{courseDetail.ConsultationLocation}</h6>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
              <Row
                style={{
                  display: "block",
                  textAlign: "center",
                  paddingTop: "3%",
                }}
              >
                <span>
                  <b>Join Zoom Meeting: </b>
                </span>
                <a href={"" + courseDetail.ZoomLink} target="_blank">
                  <Button
                    style={{
                      background:
                        "linear-gradient(0deg, #006EF4, #006EF4), #FFFFFF",
                      width: "20%",
                    }}
                  >
                    Open Zoom Link
                  </Button>
                </a>
              </Row>
              <Row style={{ paddingTop: "4%" }}>
                <Col>
                  <Card
                    style={{
                      backgroundColor: "#E1FFEE",
                      width: "75%",
                      margin: "auto",
                    }}
                  >
                    <Row style={{ textAlign: "center", paddingTop: "4%", marginBottom: '2%' }}>
                      <h1>Course Materials</h1>
                    </Row>
                    <Row style={{marginBottom: '2%'}}>
                      <Col className="col-6" style={{ textAlign: "center" }}>
                        <h3>Lecture Slides:</h3>
                      </Col>
                      <Col className="col-6">
                        <a
                          href={"" + courseDetail.LectureSlides}
                          target="_blank"
                        >
                          <Button style={{backgroundColor: '#D2001A'}}>Open Link to Lecture Slides</Button>
                        </a>
                      </Col>
                    </Row>
                    <Row style={{marginBottom: '4%'}}>
                      <Col className="col-6" style={{ textAlign: "center" }}>
                        <h3>Tutorial Slides:</h3>
                      </Col>
                      <Col className="col-6">
                        <a
                          href={"" + courseDetail.TutorialSlides}
                          target="_blank"
                        >
                          <Button style={{backgroundColor: '#FD841F'}}>Open Link to Tutorial Slides</Button>
                        </a>
                      </Col>
                    </Row>
                  </Card>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Row>
      </Container>
    </>
  );
}

export default CourseDetail;
