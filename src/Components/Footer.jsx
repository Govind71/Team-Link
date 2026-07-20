import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { BsEnvelopeFill, BsClockFill } from "react-icons/bs";
import "./Footer.css";

function Footer() {
  return (
    <>
      {/* Contact Section */}
      <section className="contact-section">
        <Container>

          <div className="contact-card">
            <Row>
              <Col lg={5}>
                <h2 className="contact-title">Let's talk</h2>

                <p className="contact-text">
                  Have a question about TeamLink or want to share feedback?
                  <br />
                  Send us a message.
                </p>

                <div className="contact-item">
                  <BsEnvelopeFill className="contact-icon" />
                  <span>hello@teamlink.app</span>
                </div>

                <div className="contact-item">
                  <BsClockFill className="contact-icon" />
                  <span>Mon – Fri, 9am – 6pm</span>
                </div>
              </Col>
            </Row>
          </div>

        </Container>
      </section>

      {/* Footer */}
      <footer className="footer-section">
        <Container>

          <Row>

            {/* Logo */}
            <Col lg={3} md={6} className="mb-4">

              <div className="footer-logo">
                <div className="logo-box"></div>
                <h5>TeamLink</h5>
              </div>

              <p className="footer-description">
                A collaboration platform for students,
                developers, designers,
                and freelancers.
              </p>

            </Col>

            {/* Company */}
            <Col lg={2} md={6}>
              <h6>Company</h6>

              <ul className="footer-links">
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
              </ul>
            </Col>

            {/* Product */}
            <Col lg={2} md={6}>
              <h6>Product</h6>

              <ul className="footer-links">
                <li><a href="/">Features</a></li>
                <li><a href="/">Explore Teams</a></li>
              </ul>
            </Col>

            {/* Legal */}
            <Col lg={2} md={6}>
              <h6>Legal</h6>

              <ul className="footer-links">
                <li><a href="/">Privacy Policy</a></li>
                <li><a href="/">Terms & Conditions</a></li>
              </ul>
            </Col>

            {/* Account */}
            <Col lg={2} md={6}>
              <h6>Account</h6>

              <ul className="footer-links">
                <li><a href="/">Login</a></li>
                <li><a href="/">Sign Up</a></li>
              </ul>
            </Col>

          </Row>

        </Container>
      </footer>
    </>
  );
}

export default Footer;