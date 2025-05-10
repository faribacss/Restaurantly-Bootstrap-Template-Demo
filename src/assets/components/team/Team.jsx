import './Team.css'
import { Fade } from 'react-awesome-reveal';
import { Container } from 'react-bootstrap';
import team1 from '../../../assets/images/chefs/chefs-1.png'
import team2 from '../../../assets/images/chefs/chefs-2.png'
import team3 from '../../../assets/images/chefs/chefs-3.png'

function Team() {
  return (
    <section className="team-section">
      <Fade cascade direction="up" triggerOnce>
        <Container className="team-header">
          <h3 className="team-title">Team</h3>
          <h1 className="team-desc">Necessitatibus eius consequatur</h1>
        </Container>
      </Fade>

      <Fade cascade direction="up" triggerOnce>
        <div className="team-container">
          <div className="team-item col-md-12 col-sm-12 col-lg-3">
            <img src={team1} className="img-fluid team-img" />
            <div className="team-child">
              <div className="team-item-overlay">
                <h3>Walter White</h3>
                <small>Master Chef</small>
                <ul className="team-social">
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-item col-md-12 col-sm-12 col-lg-3">
            <img src={team2} className="img-fluid team-img" />
            <div className="team-child">
              <div className="team-item-overlay">
                <h3>Sarah Jhonson</h3>
                <small>Patissier</small>
                <ul className="team-social">
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
                </ul>
              </div>
            </div>
          </div>
          <div className="team-item col-md-12 col-sm-12 col-lg-3">
            <img src={team3} className="img-fluid team-img" />
            <div className="team-child">
              <div className="team-item-overlay">
                <h3>William Anderson</h3>
                <small>Cook</small>
                <ul className="team-social">
                  <i className="bi bi-twitter"></i>
                  <i className="bi bi-facebook"></i>
                  <i className="bi bi-instagram"></i>
                  <i className="bi bi-linkedin"></i>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
}

export default Team