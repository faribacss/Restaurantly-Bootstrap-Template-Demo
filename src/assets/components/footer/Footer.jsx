import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-row row gy-4">
          <div className="col-lg-4 col-md-6 footer-about">
            <a href="" className="d-flex align-items-center">
              <span className="siteName">Restaurantly</span>
            </a>
            <div className="footer-content pt-3">
              <p>A108 Adam Street</p>
              <p>New York, NY 535022</p>
              <p className="mt-3">
                <strong>Phone: </strong>
                <span>+1 5589 55488 55</span>
              </p>
              <p>
                <strong>Email: </strong>
                <span>info@example.com</span>
              </p>
            </div>
            <div className="footer-social mt-3">
              <i className="bi bi-twitter-x"></i>
              <i className="bi bi-facebook"></i>
              <i className="bi bi-instagram"></i>
              <i className="bi bi-linkedin"></i>
            </div>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Services</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-3 footer-links">
            <h4>Our Services</h4>
            <ul>
              <li>Web design</li>
              <li>Web Development</li>
              <li>Product Management</li>
              <li>Marketing</li>
              <li>Graphic Design</li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-12 footer-newsletter">
            <h4>Our Newsletter</h4>
            <p>
              Subscribe to our newsletter and receive the latest news about our
              products and services!
            </p>
            <form action="" method="post" className="email-form">
              <div className="newsLetter-form">
                <input type="email" name="email" />
                <button type="submit" value="Subscribe">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="footer-bottom text-center">
        <p>
          © Copyright <strong className="text-white">Restaurant</strong> All
          Rights Reserved
        </p>
        <div className="credits">
          <p>
            Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;