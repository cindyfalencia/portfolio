import React, {useContext} from "react";
import "./Achievement.css";
import AchievementCard from "../../components/achievementCard/AchievementCard";
import StyleContext from "../../contexts/StyleContext";

export default function Achievement() {
  const {isDark} = useContext(StyleContext);
  
  const achievementSection = {
    title: ("Achievements And Certifications 🏆 "),
    subtitle:
      "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

    achievementsCards: [
      {
        title: "1st Runner up Innovative Thinking Workshop & Idea Pitching",
        subtitle:
          "Proposed a solution to reduce the carbon footprints of the fashion industry in efforts to achieve carbon net zero issued by Hong Kong Science and Technology Parks Corporation",
        image: require("../../assets/images/HKSTP.png"),
        imageAlt: "HKSTP Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://drive.google.com/file/d/1gJ-UKISQW0yY-vrulE9rTgqdkspX00R9/view?usp=sharing",
          },
        ],
      },
      {
        title: "JavaScript Algorithm and Data Structure",
        subtitle:
          "Learn the fundamentals of JavaScript, Object Oriented Programming (OOP), and Functional Programming (FP) issued by freeCodeCamp",
        image: require("../../assets/images/freecodecamp.jpeg"),
        imageAlt: "freeCodeCamp Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.freecodecamp.org/certification/cindyFalencia/javascript-algorithms-and-data-structures",
          },
        ],
      },

      {
        title: "C for Everyone: Programming Fundamentals",
        subtitle:
          "Learn the basic of C authorized by University of California, Santa Cruz and offered through Coursera",
        image: require("../../assets/images/coursera.png"),
        imageAlt: "coursera Logo",
        footerLink: [
          {
            name: "Certification",
            url: "https://www.coursera.org/account/accomplishments/certificate/9KSH3XE2VJDN",
          },
        ],
      },
    ],
  };
  return (
    <div className="main" id="achievements">
      <div className="achievement-main-div">
        <div className="achievement-header">
          <h1 className={
                isDark
                  ? "dark-mode heading achievement-heading"
                  : "heading achievement-heading"
              }>
            {achievementSection.title}
          </h1>
          <p className={
                isDark
                  ? "dark-mode subTitle achievement-subtitle"
                  : "subTitle achievement-subtitle"
              }>
            {achievementSection.subtitle}
          </p>
        </div>
        <div className="achievement-cards-div">
          {achievementSection.achievementsCards.map((card, i) => {
            return (
              <AchievementCard
                key={i}
                isDark={isDark}
                cardInfo={{
                  title: card.title,
                  description: card.subtitle,
                  image: card.image,
                  imageAlt: card.imageAlt,
                  footer: card.footerLink,
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}
