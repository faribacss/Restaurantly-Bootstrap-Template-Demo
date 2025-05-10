import { Container } from 'react-bootstrap'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Fade } from 'react-awesome-reveal'
import './Special.css'
import special from '../../../assets/images/specials-1.png'


function Special(){
    return (
      <section className="section-special">
        <Fade cascade direction="up" duration={1000} triggerOnce>
          <Container className="special-header">
            <h2 className="sp-text">SPECIALS</h2>
            <p className="sp-desc">Check Our Specials</p>
          </Container>
        </Fade>
        <Fade cascade direction="up" duration={1000} triggerOnce>
          <Container className="special-container">
              <Col className="special-col-1 cols" lg={3}>
                <a href="" className="nav-links">
                  Modi sit est
                </a>
                <a href="" className="nav-links">
                  Quisquam quos quisquam cupiditate
                </a>
                <a href="" className="nav-links">
                  Nobis qui impedit
                </a>
                <a href="" className="nav-links">
                  Ipsum quia dolor sit amet
                </a>
              </Col>
              <Col className="special-col-2 cols" lg={6}>
                <h3>Architecto ut aperiam autem id</h3>
                <p className="ital">
                  Qui laudantium consequatur laborum sit qui ad sapiente dila
                  parde sonata raqer a videna mareta paulona marka
                </p>
                <p>
                  Et nobis maiores eius. Voluptatibus ut enim blanditiis atque
                  harum sint. Laborum eos ipsum ipsa odit magni. Incidunt hic ut
                  molestiae aut qui. Est repellat minima eveniet eius et quis
                  magni nihil. Consequatur dolorem quaerat quos qui similique
                  accusamus nostrum rem vero
                </p>
              </Col>
              <Col className="special-col-3 cols" lg={3}>
                <img src={special} className='special-img' alt="" />
              </Col>
          </Container>
        </Fade>
      </section>
    );
}
export default Special