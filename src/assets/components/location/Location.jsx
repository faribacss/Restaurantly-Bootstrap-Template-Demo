import "./Location.css";
import { Container, Row, Col } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import LocationInfo from "./LocationInfo";


function Location() {
  const locationInfo = [
    {
      id: 1,
      icon: "bi bi-geo-alt",
      title: "Location",
      desc: "123 Main St, Anytown, USA",
    },
    {
      id: 2,
      icon: "bi bi-telephone",
      title: "Call Us",
      desc: "+1 5589 55488 55",
    },
    {
      id: 3,
      icon: "bi bi-telephone",
      title: "Open Hours",
      desc: "Monday-Saturday: <br /> 11:00 AM - 2300 PM",
    },
    
    {
      id: 4,
      icon: "bi bi-envelope",
      title: "Email",
      desc: "info@example.com",
    }
  ];
  return (
    <section className="location-section">
      <Fade cascade direction="up" duration={1000} triggerOnce>
        <Container className="location-header">
          <h3 className="location-title">CONTACT</h3>
          <h1 className="location-desc">Contact Us</h1>
        </Container>
      </Fade>
      <Fade cascade direction="up" duration={1000} delay={800} triggerOnce>
        <div className="location-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.9676946991!2d2.264634032484527!3d48.8588255423822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis!5e0!3m2!1sen!2sfr!4v1746690314835!5m2!1sen!2sfr"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Fade>
      <Fade cascade direction="up" duration={1000} delay={1000} triggerOnce>
        <Row className="location-info">
          <Col lg={5} md={12} className="loc-item">
            <div className="locat-items">
              {locationInfo.map(item => (
                <LocationInfo key={item.id} {...item} />
              ))}
            </div>
          </Col>
          <Col lg={7} md={12}>
          <form>
            <div className="form-info row gy-4">
              <div className="col-md-6">
                <input type="text" placeholder="Your Name" />
              </div>
              <div className="col-md-6">
                <input type="email" placeholder="Your Email" />
              </div>
              <div className="col-md-12">
                <input type="text" placeholder="Subject" />
              </div>
              <div className="col-md-12">
                <textarea name="" id="" placeholder="Message"></textarea>
              </div>
              <div className="col-md-12 text-center">
                <button className="submit-btn" type="submit">Send Message</button>
              </div>
            </div>
          </form>
          </Col>
        </Row>
      </Fade>
    </section>
  );
}
export default Location;

