import React, { useContext } from "react";
import "./Contact.css";
import Img from "../../assets/images/profile.jpg";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  return (
    <div className="main contact-margin-top" id="contact">
      <div className="contact-div-main">
        <div className="contact-header">
          <h2 className="heading contact-title">Contact Me ☎️</h2>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            Discuss a project or just want to say hi? Feel free to contact me.
          </p>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            <div className={isDark? "dark-mode-contact-detail-phone" : "contact-detail-phone"}>
              📞 <a href={"tel:" + "+85253365941"}>+852-53365941</a>
            </div>
            <div className={isDark? "dark-mode-contact-detail-email" :"contact-detail-email"}>
              ✉️{" "}
              <a href="mailto:cindyfalenciai@gmail.com">
                cindyfalenciai@gmail.com
              </a>
            </div>
            <div className="contact-detail-loc">
              <p className="contact-detail-loc">
                📍 Hong Kong / Jakarta, Indonesia
              </p>
            </div>
          </div>
        </div>
        <div className="contact-image-div">
          <div className="bg-contact"></div>
          <img src={Img} alt="my picture" />
        </div>
      </div>
    </div>
  );
}
