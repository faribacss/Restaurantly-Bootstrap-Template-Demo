import "./About.css";
import { Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import about from "../../../assets/images/about.jpg";

function About() {
  return (
    <section className="about-section">
      <Fade cascade duration={1000} direction="up">
        <Container className="about-container">
          <Row>
            <Col className="about-left" lg={6} xs={12}>
              <h3>Voluptatem dignissimos provident</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                doeiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <ul className="about-list">
                <li>
                  <i className="bi bi-check-all check-list"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
                <li>
                  <i className="bi bi-check-all check-list"></i>
                  Duis aute irure dolor in reprehenderit in voluptate velit.
                </li>
                <li>
                  <i className="bi bi-check-all check-list"></i>
                  Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </li>
              </ul>
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
                aute irure dolor in reprehenderit in voluptate velit esse cillum
                dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident
              </p>
            </Col>
            <Col className="about-right" lg={6} xs={12}>
              <img className="img-fluid" src={about} alt="about" />
            </Col>
          </Row>
        </Container>
      </Fade>
    </section>
  );
}

export default About;
