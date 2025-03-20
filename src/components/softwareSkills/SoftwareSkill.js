import React from "react";
import "./SoftwareSkill.scss";
import {skillsSection} from "../../portfolio";
import { FaGolang } from "react-icons/fa6";
import { SiKubernetes } from "react-icons/si";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { GrHadoop } from "react-icons/gr";

const customIcons = {
  golang: <FaGolang className="custom-icon" />,
  kubernetes: <SiKubernetes className="custom-icon" />, 
  nextjs: <RiNextjsFill className="custom-icon" />,
  typescript: <SiTypescript className="custom-icon" />,
  hadoop: <GrHadoop className="custom-icon" />,
};

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        {Object.entries(skillsSection.softwareSkills).map(([category, skills]) => (
          <div key={category} className="software-skill-category">
            <h3 className="software-skill-category-title">{category}</h3>
            <ul className="dev-icons">
              {skills.map((skill, i) => (
                <li
                  key={i}
                  className="software-skill-inline"
                  name={skill.skillName}
                >
                  {customIcons[skill.skillName] || (
                    <i className={skill.fontAwesomeClassname}></i>
                  )}
                  <p>{skill.skillName}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
