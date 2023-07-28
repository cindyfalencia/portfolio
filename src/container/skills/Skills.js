import React from "react";
import codingPerson from "../../assets/lottie/codingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import "./Skills.css";

export default function Skills(){
    return (
        <div className="main" id="skills">
            <div className="skills-main-div">
                <div className="skills-image-div">
                    <DisplayLottie animationData={codingPerson}/>
                </div>
                <div className="skills-text-div">
                    <h1 className="skills-heading">What I do?</h1>
                    <p className="subTitle skills-text-subtitle">exploring and mastering diverse technology stacks, continuously seeking new challenges and opportunities for growth.</p>
                    <SoftwareSkill/>
                    <div className="subTitle skills-text"> 
                        <p>⚡ Develop interactive Front end for web and mobile applications with HTML, CSS, TypeScript, and ReactJS</p>
                        <p>⚡ Build server-side logic and databases for web applications by using Node.js, Java, APIs, and Python</p>
                        <p>⚡ Create visually appealing and user-friendly web and mobile applications with Figma</p>
                    </div>
                </div>
            </div>
        </div>
    )
}