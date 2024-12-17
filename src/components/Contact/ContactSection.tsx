import emailIcon from '../../assets/email-icon.svg';
import './styles.scss';

const ContactSection = () => (
  <div id="contact" className="contact-container">
    <header>
      <h2>Contact</h2>
      <p>Ready to get started on your project? </p>
      <p>Contact me now for a Free consultation.</p>
    </header>
    <div className="contact-btn">
      <a href="mailto:sachit.shetty@gmail.com"><img src={emailIcon} alt="Email" /></a>
    </div>
  </div>
);

export default ContactSection;
