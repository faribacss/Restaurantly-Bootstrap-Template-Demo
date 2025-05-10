function LocationInfo({icon, title, desc}) {
  return (
    <div className="location-icon-1 d-flex col-12">
      <i className={icon}></i>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

export default LocationInfo;