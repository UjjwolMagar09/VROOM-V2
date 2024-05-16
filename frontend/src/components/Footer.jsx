import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import '../assets/styles/footer.css'; 
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="footer__left">
      <Link to="" className="footer-link">HELP</Link>
        <Link to="/contact" className="footer-link">Contact Us</Link>
        <Link to="" className="footer-link">About Us</Link>
        <Link to="/FAQ" className="footer-link">FAQ</Link>
        <Link to="/privacypolicy" className="footer-link">Privacy Policy</Link>
        <Link to="/termsandconditions" className="footer-link">Terms and Conditions</Link>
      </div>
      <div className="footer__middle">
        <p className="footer__follow">FOLLOW US</p>
        <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebookF} className="svg-inline--fa" /></a>
        <a href="#"><FontAwesomeIcon icon={faInstagram} className="svg-inline--fa" /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} className="svg-inline--fa" /></a>
        </div>
      </div>
      <div className="footer__right">
        <h3 className="footer__getintouch">GET IN TOUCH</h3>
        <div className="contact-details">
        <div className="contact-item">
  <FontAwesomeIcon icon={faMapMarkerAlt} className="svg-inline--fa" />
  <span className="contact-info-placeholder">Naxal, Kathmandu</span>
</div>
<div className="contact-item">
  <FontAwesomeIcon icon={faEnvelope} className="svg-inline--fa fa-envelope" />
  <span className="contact-info-placeholder">VroomCarRental@gmail.com</span>
</div>
<div className="contact-item">
  <FontAwesomeIcon icon={faPhone} className="svg-inline--fa fa-phone" />
  <span className="contact-info-placeholder">9818681423</span>
</div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
