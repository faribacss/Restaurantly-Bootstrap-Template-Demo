import Col from "react-bootstrap/Col";
function MenuItem({ image, title, price, description }) {
  return (
    <Col xs={12} lg={6} className="menu-items">
      <img className="img-food" src={image} alt="" />
      <div className="menu-contents">
        <div className="m-content">
          <h5>{title}</h5>
          <p>{price}</p>
        </div>
        <div className="m-desc">
          <small>{description}</small>
        </div>
      </div>
    </Col>
  );
}

export default MenuItem;
