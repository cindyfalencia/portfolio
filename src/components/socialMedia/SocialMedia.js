import React, {useContext} from "react";
import "./SocialMedia.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin, faInstagram } from '@fortawesome/free-brands-svg-icons';
import StyleContext from "../../contexts/StyleContext";

export default function SocialMedia() {
  const displaySocialMediaLinks = true;
  const { isDark } = useContext(StyleContext);

  if (!displaySocialMediaLinks) {
    return null;
  }

  return (
    <div className="social-media-div">
      <div className="github">
        <a
          href="https://github.com/cindyfalencia"
          className="icon-button github"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <FontAwesomeIcon icon={faGithub} className={isDark? "dark-mode-fa-github":"light-fa-github"}/>
          <span></span>
        </a>
      </div>
      <div className="linkedin">
        <a
          href="https://www.linkedin.com/in/cindy-falencia-irawan-03aa65217/"
          className="icon-button linkedin"
          target="_blank"
          rel="noopener noreferrer"
        > 
          <FontAwesomeIcon icon={faLinkedin} className={isDark? "dark-mode-fa-linkedin":"light-fa-linkedin"}/>
          <span></span>
        </a>
      </div>
      <div className="gmail">
        <a
          href={`mailto:cindyfalenciai@gmail.com`}
          className="icon-button google"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faEnvelope} className={isDark? "dark-mode-fa-envelope":"light-fa-envelope"}/>
          <span></span>
        </a>
      </div>
      <div className="instagram">
        <a
          href="https://www.instagram.com/cindyfalencia/"
          className="icon-button instagram"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className={isDark? "dark-mode-fa-instagram":"light-fa-instagram"}/>
          <span></span>
        </a>
      </div>
    </div>
  );
}
