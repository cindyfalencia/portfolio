import React, {useContext} from "react";
import "./SplashScreen.css";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import splashAnimation from "../../assets/lottie/splashAnimation.json"; // Rename to your file name for custom animation

export default function SplashScreen() {
  const {isDark} = useContext(StyleContext);
  const splashScreen = {
    enabled: true, // set false to disable splash screen
    animation: splashAnimation,
    duration: 2000 // Set animation duration as per your animation
  };
  return (
    <div className={isDark ? "dark-mode splash-container" : "splash-container"}>
      <div className="splash-animation-container">
        <DisplayLottie animationData={splashScreen.animation} />
      </div>
      <div className="splash-title-container">
        <span className="grey-color"> &lt;</span>
        <span className="splash-title">Cindy Falencia Irawan</span>
        <span className="grey-color">/&gt;</span>
      </div>
    </div>
  );
}
 