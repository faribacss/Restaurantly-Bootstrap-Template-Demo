import Col from "react-bootstrap/Col";
function BodyItem({number, title, description}) {
  return (
    <>
      <Col xs={12} md={12} lg={4} className="body-section-item">
        <div className="item-body">
          <h1 className="number">{number}</h1>
          <h1 className="title">{title}</h1>
          <p className="description">{description}</p>
        </div>
      </Col>
    </>
  );
}
export default BodyItem;
