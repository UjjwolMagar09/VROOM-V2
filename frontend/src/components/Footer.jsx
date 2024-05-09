import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faDotCircle } from '@fortawesome/free-regular-svg-icons';
import '../assets/styles/footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__left">
        <a href="#" className="footer-link help-link">HELP</a>
        <a href="#" className="footer-link contact-us-link">Contact Us</a>
        <a href="#" className="footer-link about-us-link">About Us</a>
        <a href="#" className="footer-link faqs-link">FAQs</a>
        <a href="#" className="footer-link privacy-policy-link">Privacy Policy</a>
        <a href="#" className="footer-link terms-and-conditions-link">Terms and Conditions</a>
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
  );
};

export default Footer;
