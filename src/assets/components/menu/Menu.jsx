import "./Menu.css";
import { Fade } from "react-awesome-reveal";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import MenuItem from "./MenuItem";
import Food1 from "../../../assets/images/foods/lobster-bisque.png";
import Food2 from "../../../assets/images/foods/caesar.png";
import Food3 from "../../../assets/images/foods/bread-barrel.png";
import Food4 from "../../../assets/images/foods/greek-salad.png";
import Food5 from "../../../assets/images/foods/lobster-roll.png";
import Food6 from "../../../assets/images/foods/mozzarella.png";
import Food7 from "../../../assets/images/foods/spinach-salad.png";
import Food8 from "../../../assets/images/foods/tuscan-grilled.png";
import Food9 from "../../../assets/images/foods/cake.png";

function Menu() {
  const menuItems = [
    {
      id: 1,
      image: Food1,
      title: "Lobster Bisque",
      price: "5.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 2,
      image: Food2,
      title: "Caesar Salad",
      price: "10.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 3,
      image: Food3,
      title: "Bread Barrel",
      price: "6.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 4,
      image: Food4,
      title: "Greek Salad",
      price: "11.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 5,
      image: Food5,
      title: "Lobster Roll",
      price: "12.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 6,
      image: Food6,
      title: "Mozzarella",
      price: "13.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 7,
      image: Food7,
      title: "Spinach Salad",
      price: "8.55$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 8,
      image: Food8,
      title: "Tuscan Grilled",
      price: "4.25$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
    {
      id: 9,
      image: Food9,
      title: "Cake",
      price: "9.95$",
      description: "Lorem, deren, trataro, filede, nerada",
    },
  ];
  return (
    <section className="menu-section">
      <Fade cascade direction="up" duration={1000} triggerOnce>
        <Container>
          <div className="menu-section-header">
            <small className="menu-section-small">MENU</small>
            <h1>Check Our Tasty Menu</h1>
          </div>
        </Container>
      </Fade>
      <Fade cascade direction="up" duration={1000} triggerOnce>
        <Container className="menu-container">
          <ul className="menu-tabs">
            <li className="menu-tab-item">All</li>
            <li className="menu-tab-item">Starters</li>
            <li className="menu-tab-item">Salads</li>
            <li className="menu-tab-item">Specially</li>
          </ul>
        </Container>
      </Fade>
      <Fade cascade direction="down" duration={1000} triggerOnce>
        <Container>
          <Row>
            {menuItems.map((menu) => (
              <MenuItem key={menu.id} {...menu} />
            ))}
          </Row>
        </Container>
      </Fade>
    </section>
  );
}
export default Menu;
