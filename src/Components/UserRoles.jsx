import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./UserRoles.css";

const steps = [
  {
    number: "1",
    title: "Create an Account",
    description: "Sign up with your email or Google account in seconds.",
  },
  {
    number: "2",
    title: "Select Your Role",
    description: "Choose to join as a Team Leader or a Contributor.",
  },
  {
    number: "3",
    title: "Join or Create a Team",
    description: "Start your own team or apply to join one that fits your skills.",
  },
  {
    number: "4",
    title: "Collaborate on Projects",
    description: "Work together, track progress, and bring your project to life.",
  },
];

function UserRoles() {
  return (
    <>
      {/* HOW IT WORKS */}

      <section className="steps-section">
        <Container>

          <div className="text-center mb-5">

           <Badge bg="info" className="px-3 py-2 rounded-pill text-uppercase">
              HOW IT WORKS
            </Badge>

            <h2 className="section-title mt-3">
              Get started in four simple steps
            </h2>

          </div>

          <Row className="text-center">

            {steps.map((step, index) => (

              <Col lg={3} md={6} className="mb-4" key={index}>

                <div className="step-circle">
                  {step.number}
                </div>

                <h5 className="step-title">
                  {step.title}
                </h5>

                <p className="step-description">
                  {step.description}
                </p>

              </Col>

            ))}

          </Row>

        </Container>
      </section>

      {/* USER ROLES */}

      <section className="roles-section">

        <Container>

          <div className="text-center mb-5">

            <Badge bg="info" className="px-3 py-2 rounded-pill text-uppercase">
              USER ROLES
            </Badge>

            <h2 className="section-title mt-3">
              Built for how teams actually work
            </h2>

          </div>

          <Row className="justify-content-center g-4">

            <Col lg={5}>

              <Card className="leader-card">

                <Card.Body>

                  <h3>Team Leader</h3>

                  <ul>
                    <li>✔ Create Teams</li>
                    <li>✔ Manage Members</li>
                    <li>✔ Assign Tasks</li>
                    <li>✔ Track Progress</li>
                  </ul>

                </Card.Body>

              </Card>

            </Col>

            <Col lg={5}>

              <Card className="contributor-card">

                <Card.Body>

                  <h3>Contributor</h3>

                  <ul>
                    <li>✔ Join Teams</li>
                    <li>✔ Collaborate on Projects</li>
                    <li>✔ Showcase Skills</li>
                  </ul>

                </Card.Body>

              </Card>

            </Col>

          </Row>

        </Container>

      </section>
    </>
  );
}

export default UserRoles;