import { Fade } from 'react-awesome-reveal';
import './Body.css';
import BodyItem from './BodyItem';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


function Body() {
  const bodyItems = [
    {
      id: 1,
      number: "01",
      title: "Best Quality",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 2,
      number: "02",
      title: "Repellat Nihil",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    },
    {
      id: 3,
      number: "03",
      title: "Ad ad velit qui",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    }
  ];
    return (
      <section className="body-section">
        <Fade cascade direction="up" duration={1000} triggerOnce>
          <Container>
            <div className="body-section-header">
              <small className="body-section-small">WHY US</small>
              <h1>Why Choose Our Restaurant</h1>
            </div>
          </Container>
        </Fade>
        <Fade cascade direction="up" duration={1000} triggerOnce>
          <Container className="body-section-container">
            <Row className="body-section-row">
              {bodyItems.map((item) => (
                <BodyItem key={item.id} {...item} />
              ))}
            </Row>
          </Container>
        </Fade>
      </section>
    );
}
export default Body;