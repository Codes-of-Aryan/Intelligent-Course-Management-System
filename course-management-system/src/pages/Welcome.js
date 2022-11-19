import React, {useState} from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import logo from "../assets/logo.png";
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
                width: "200px",
                height: "170px",
                borderRadius: "15%",
                margin: "auto",
              }}
            />
          </Row>
          <Row style={{ height: "50vh", textAlign: "center" }}>
            <h1 style={{ fontWeight: "bold" }}>Web App Name</h1>
          </Row>
        </Col>
        <Col>
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
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
