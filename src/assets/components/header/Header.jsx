import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Fade } from "react-awesome-reveal";

function Header() {
  const videoHandler = () => {
    window.open("https://youtu.be/Y7f98aduVJ8", "_blank");
  };
  return (
    <>
      <div className="header-container">
        <div className="header">
          <div className="left-header">
            <i className="bi bi-envelope"></i> contact@example.com
            <i className="bi bi-phone"></i> +123 456 7890
          </div>
          <div className="right-header">
            <p>EN</p>
            <p>/</p>
            <p>FA</p>
          </div>
        </div>

        <Fade cascade duration={1000} direction="up" triggerOnce>
          <Container className="body-text">
            <Row className="body-text-row">
              <Col xs={12} md={8} className="body-text-left">
                <p className="welcome-text">
                  Welcome to <span>Resturant</span>
                </p>
                <p className="info">
                  Delivering great food for more than 18 years!
                </p>
                <button type="button" className="wel-btn">
                  Book a Table
                </button>
                <button type="button" className="wel-btn">
                  OUR MENU
                </button>
              </Col>
              <Col xs={12} md={4} className="body-text-right">
                <div className="play" onClick={videoHandler}>
                  <i className="bi bi-play-fill play-icon"></i>
                </div>
              </Col>
            </Row>
          </Container>
        </Fade>
      </div>
    </>
  );
}

export default Header;
