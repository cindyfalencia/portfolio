import React,{ useEffect, useContext }from "react";
import SocialMedia from "../../components/socialMedia/SocialMedia"
import Button from "../../components/button/Button";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import landingPerson from "../../assets/lottie/landingPerson.json";
import StyleContext from "../../contexts/StyleContext";
import Type from "../type/Type";
import "./Greeting.css";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);
    useEffect(() => {
      const greetingText = document.querySelector(".greeting-text-div");
  
      // Apply fade-in animation
      greetingText.classList.add("fade-in");
  
      return () => {
        greetingText.classList.remove("fade-in");
      };
    }, []);
  
    return (
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className={isDark ? "dark-mode-greeting-text" : "greeting-text"}>
                Hi all, I'm Cindy!
                <span className="wave-emoji">&#x1F44B;</span>
              </h1>
              <div className={isDark ? "dark-mode-type" : "type"}>
                <Type/>
              </div>
              <p className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }>
                A passionate Full Stack Developer{" "}
                <span role="img" aria-label="Rocket">
                    🚀
                </span>{" "}
                experienced in JavaScript/React.js/Node.js.
                Always eager to learn and take on new challenges.
              </p>
              <SocialMedia/>
              <div className="button-greeting-div">
                <Button text="Contact me" href="#contact" />
                <Button
                  text="See my resume"
                  newTab={true}
                  href="https://drive.google.com/file/d/1gBt37t9l5k5drzyH7nNkqLZXQiA0mye6/view?usp=sharing"
                />
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            <DisplayLottie animationData={landingPerson} />
            </div>
        </div>
      </div>
    );
  }
