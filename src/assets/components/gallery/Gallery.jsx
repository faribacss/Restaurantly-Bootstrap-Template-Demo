import "./Gallery.css";
import { Container } from "react-bootstrap";
import { Fade } from "react-awesome-reveal";
import { useState, useEffect } from "react";

import gallery1 from "../../../assets/images/gallery/gallery-1.png";
import gallery2 from "../../../assets/images/gallery/gallery-2.png";
import gallery3 from "../../../assets/images/gallery/gallery-3.png";
import gallery4 from "../../../assets/images/gallery/gallery-4.png";
import gallery5 from "../../../assets/images/gallery/gallery-5.png";
import gallery6 from "../../../assets/images/gallery/gallery-6.png";
import gallery7 from "../../../assets/images/gallery/gallery-7.png";
import gallery8 from "../../../assets/images/gallery/gallery-8.png";

const images = [
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
];

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const handleImageClick = (index) => {
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setCurrentIndex(null);
  };

  const showPrev = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : images.length - 1));
  };

  const showNext = () => {
    setCurrentIndex((prev) => (prev < images.length - 1 ? prev + 1 : 0));
  };

  const handleKeyDown = (e) => {
    if (currentIndex !== null) {
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
      if (e.key === "Escape") handleClose();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex]);

  return (
    <section className="gallery-section">
      <Fade cascade direction="up" triggerOnce>
        <Container className="gallery-header">
          <h3 className="gallery-title">GALLERY</h3>
          <h1 className="gallery-desc">Some photos from Our Restaurant</h1>
        </Container>
      </Fade>

      <Fade cascade direction="up" triggerOnce>
        <div className="container-fluid">
          {images.map((img, index) => (
            <div
              key={index}
              className="gallery-item col-md-6 col-sm-12 col-lg-3"
              onClick={() => handleImageClick(index)}
            >
              <img
                src={img}
                className="img-fluid gallery-img"
                alt={`gallery-${index + 1}`}
              />
            </div>
          ))}
        </div>
      </Fade>

      {currentIndex !== null && (
        <div className="overlay" onClick={handleClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <img src={images[currentIndex]} className="popup-img" alt="popup" />
            <div className="navigation">
              <button className="nav-btn left" onClick={showPrev}>
                ←
              </button>
              <button className="nav-btn right" onClick={showNext}>
                →
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Gallery;
