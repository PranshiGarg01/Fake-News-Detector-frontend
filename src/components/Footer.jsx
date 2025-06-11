import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img 
          src="/images/SIAM_VIT.png"
          alt="Footer Logo" 
          className="footer-logo" 
        />
      </div>

      <div className="footer-right">
        <a href="https://instagram.com/siamvit/?hl=en" target="_blank" rel="noopener noreferrer" className="footer-icon insta">
          <img src="/images/instagram.png" alt="Instagram" />
        </a>
        <a href="https://www.youtube.com/@SIAMVIT" target="_blank" rel="noopener noreferrer" className="footer-icon youtube">
          <img src="/images/youtube.png" alt="YouTube" />
        </a>
        <a href="https://linkedin.com/company/siam-vit" target="_blank" rel="noopener noreferrer" className="footer-icon linkedin">
          <img src="/images/linkedin.png" alt="LinkedIn" />
        </a>
        <a href="https://medium.com/@siam_31894" target="_blank" rel="noopener noreferrer" className="footer-icon medium">
          <img src="/images/medium.png" alt="Twitter" />
        </a>
        <a href="https://github.com/SIAM-VIT" target="_blank" rel="noopener noreferrer" className="footer-icon github">
          <img src="/images/github.png" alt="Github" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
