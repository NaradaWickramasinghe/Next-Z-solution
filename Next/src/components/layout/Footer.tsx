import { PHONE_DISPLAY, EMAIL, WA_LINK } from '../../data/content';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <a href="#home" className="brand" aria-label="Next Z Solutions home">
            <span className="brand-name">Next <span className="z">Z</span></span>
            <span className="brand-sub">Solutions</span>
          </a>
          <p>Innovate &bull; Automate &bull; Grow</p>
        </div>
        <ul className="footer-links">
          <li><a href="#services">Services</a></li>
          <li><a href="#why-us">Why Us</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className="footer-contact">
          <a href={`tel:+${WA_LINK.split('/').pop()}`}>{PHONE_DISPLAY}</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </div>
      </div>
      <div className="container footer-bottom">
        <p>&copy; {new Date().getFullYear()} Next Z Solutions. All rights reserved.</p>
        <p>Your vision, our solution.</p>
      </div>
    </footer>
  );
}

