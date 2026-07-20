import React from "react";
import { Container, Row, Col, Card, Badge } from "react-bootstrap";
import "./Features.css";

const features = [
  {
    title: "Team Creation",
    description:
      "Set up a team in minutes with a name, project details, and the skills you're looking for.",
  },
  {
    title: "Team Discovery",
    description:
      "Browse and filter active teams that match your interests and availability.",
  },
  {
    title: "Skill Matching",
    description:
      "Get matched to teams based on the skills and experience on your profile.",
  },
  {
    title: "Project Collaboration",
    description:
      "Keep project details, members, and progress organized in a single workspace.",
  },
  {
    title: "Role Management",
    description:
      "Assign Team Leader and Contributor roles so everyone knows their responsibilities.",
  },
  {
    title: "Secure Authentication",
    description:
      "Sign in safely with email or Google, keeping your account and team data protected.",
  },
];

function Features() {
  return (
    <section className="features-section">
      <Container>

        <div className="text-center mb-5">

          <Badge bg="info" className="px-3 py-2 rounded-pill text-uppercase">
            FEATURES
          </Badge>

          <h2 className="feature-title mt-3">
            Everything you need to team up
          </h2>

          <p className="feature-subtitle">
            Purpose-built tools for forming and running project teams.
          </p>

        </div>

        <Row className="g-4">
          {features.map((feature, index) => (
            <Col lg={4} md={6} key={index}>
              <Card className="feature-card h-100">

                <div className="icon-box"></div>

                <Card.Body className="px-0 pb-0">

                  <Card.Title className="card-heading">
                    {feature.title}
                  </Card.Title>

                  <Card.Text className="card-text">
                    {feature.description}
                  </Card.Text>

                </Card.Body>

              </Card>
            </Col>
          ))}
        </Row>

      </Container>
    </section>
  );
}

export default Features;