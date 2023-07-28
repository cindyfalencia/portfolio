import React from "react";
import "./Progress.css";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

const techStack = {
    experience: [
      {
        Stack: "Frontend/Design", 
        progressPercentage: "90%" 
      },
      {
        Stack: "Backend",
        progressPercentage: "70%"
      },
      {
        Stack: "Programming",
        progressPercentage: "70%"
      }
    ],
    displayCodersrank: false 
  };

export default function StackProgress(){
    return(
        <div className="skills-container">
            <div className="skills-bar">
                <h1 className="skills-heading">Proficiency</h1>
                {techStack.experience.map((exp, i) => {
              const progressStyle = {
                width: exp.progressPercentage
              };
              return (
                <div key={i} className="skill">
                  <p>{exp.Stack}</p>
                  <div className="meter">
                    <span style={progressStyle}></span>
                  </div>
                </div>
              );
            })}
            </div>
            <div className="skills-image">
                <DisplayLottie animationData={Build}/>
            </div>
        </div>
    )
}