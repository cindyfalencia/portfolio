import React from "react";
import "./SoftwareSkill.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact, faNode, faNpm, faAws, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

const softwareSkills = [
  {
    skillName: "HTML5",
    fontAwesomeIcon: faHtml5
  },
  {
    skillName: "CSS3",
    fontAwesomeIcon: faCss3Alt
  },
  {
    skillName: "Sass",
    fontAwesomeIcon: faSass
  },
  {
    skillName: "JavaScript",
    fontAwesomeIcon: faJs
  },
  {
    skillName: "ReactJS",
    fontAwesomeIcon: faReact
  },
  {
    skillName: "Node.js",
    fontAwesomeIcon: faNode
  },
  {
    skillName: "npm",
    fontAwesomeIcon: faNpm
  },
  {
    skillName: "SQL database",
    fontAwesomeIcon: faDatabase
  },
  {
    skillName: "AWS",
    fontAwesomeIcon: faAws
  },
  {
    skillName: "Python",
    fontAwesomeIcon: faPython
  },
  {
    skillName: "Java",
    fontAwesomeIcon: faJava
  }
];

export default function SoftwareSkill() {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {softwareSkills.map((skill, i) => {
            return (
              <li
                key={i}
                className="software-skill-inline"
                name={skill.skillName}
              >
                <FontAwesomeIcon icon={skill.fontAwesomeIcon} />
                <p>{skill.skillName}</p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
