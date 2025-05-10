import "./Slide.css";
import Carousel from "react-bootstrap/Carousel";
import slide1 from "../../../assets/images/slides/events-slider-1.png";
import slide2 from "../../../assets/images/slides/events-slider-2.png";
import slide3 from "../../../assets/images/slides/events-slider-3.png";
import { Col, Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
function Slide() {
  return (
    <section className="slide-section">
      <Fade cascade duration={1000} direction="up" triggerOnce>
        <Container className="slide-container">
          <Carousel className="slide-carousel">
            <Carousel.Item>
              <div className="d-flex flex-wrap align-items-center">
                {/* Image (Left Side) */}
                <Col md={12} lg={6}>
                  <img src={slide1} className="img-fluid rounded shadow" />
                </Col>

                {/* Caption (Right Side) */}
                <Col md={12} lg={6} className="text-white p-4 slide-desc">
                  <h3 className="fw-bold fs-2">Birthday Parties</h3>
                  <small className="fs-5 d-block mb-3 small-border">$189</small>

                  <p className="slide-desc-p-1 fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <ul className="slide-list list-unstyled">
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                  </ul>

                  <p className="slide-desc-p-2 mt-3">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Col>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-wrap align-items-center">
                {/* Image (Left Side) */}
                <Col md={12} lg={6}>
                  <img src={slide2} className="img-fluid rounded shadow" />
                </Col>

                {/* Caption (Right Side) */}
                <Col md={12} lg={6} className="text-white p-4 slide-desc">
                  <h3 className="fw-bold fs-2">Private Parties</h3>
                  <small className="fs-5 d-block mb-3 small-border">$290</small>

                  <p className="slide-desc-p-1 fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <ul className="slide-list list-unstyled">
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                  </ul>

                  <p className="slide-desc-p-2 mt-3">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Col>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="d-flex flex-wrap align-items-center">
                {/* Image (Left Side) */}
                <Col md={12} lg={6}>
                  <img src={slide3} className="img-fluid rounded shadow" />
                </Col>

                {/* Caption (Right Side) */}
                <Col md={12} lg={6} className="text-white p-4 slide-desc">
                  <h3 className="fw-bold fs-2">Custom Parties</h3>
                  <small className="fs-5 d-block mb-3 small-border">$99</small>

                  <p className="slide-desc-p-1 fst-italic">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>

                  <ul className="slide-list list-unstyled">
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Duis aute irure dolor in reprehenderit in voluptate velit.
                    </li>
                    <li>
                      <i className="bi bi-check2-circle me-2 text-warning"></i>{" "}
                      Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </li>
                  </ul>

                  <p className="slide-desc-p-2 mt-3">
                    Ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur.
                  </p>
                </Col>
              </div>
            </Carousel.Item>
          </Carousel>
        </Container>
      </Fade>
    </section>
  );
}

export default Slide;
