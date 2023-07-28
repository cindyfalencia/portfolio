import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import Greeting from "./greeting/Greeting";
import Skills from "./skills/Skills";
import Experience from "../container/experience/Experience";
import Education from "./education/Education";
import Achievement from "./achievement/Achievement";
import Contact from "./contact/Contact";
import ScrollToTopButton from "./topbutton/Top";
import SplashScreen from "./splash/SplashScreen";
import splashAnimation from "../assets/lottie/splashAnimation.json";
import { useLocalStorage } from "../container/hooks/useLocalStorage";
import { StyleProvider } from "../contexts/StyleContext";
import "./Main.css";

const Main = () => {
  const darkPref = window.matchMedia("(prefers-color-scheme: dark)");
  const [isDark, setIsDark] = useLocalStorage("isDark", darkPref.matches);
  const splashScreen = {
    enabled: true,
    animation: splashAnimation,
    duration: 2000,
  };

  const [isShowingSplashAnimation, setIsShowingSplashAnimation] =
    useState(true);

  useEffect(() => {
    if (splashScreen.enabled) {
      const splashTimer = setTimeout(
        () => setIsShowingSplashAnimation(false),
        splashScreen.duration
      );
      return () => {
        clearTimeout(splashTimer);
      };
    }
  }, []);

  const changeTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <div className={isDark ? "dark-mode" : null}>
      <StyleProvider value={{ isDark: isDark, changeTheme: changeTheme }}>
        {isShowingSplashAnimation && splashScreen.enabled ? (
          <SplashScreen />
        ) : (
          <>
            <Header />
            <Greeting />
            <Skills />
            <Experience />
            <Education />
            <Achievement />
            <Contact />
            <ScrollToTopButton />
          </>
        )}
      </StyleProvider>
    </div>
  );
};

export default Main;
