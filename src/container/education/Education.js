import React from "react";
import "./Education.css";
import EducationCard from "../../components/educationCard/EducationCard";

export default function Education() {
  const educationInfo = {
    schools: [
      {
        schoolName: "McGill University",
        logo: require("../../assets/images/mcgill.png"),
        subHeader: "Master of Science in Computer Science",
        duration: "January 2023 - May 2023",
        desc: "Exchange Computer Science student for winter semester",
        descBullets: [
          "Relevant coursework: Problem Solving and Programming, Data Structures, Software Design, Operating System, and Database System",
        ],
      },
      {
        schoolName: "City University of Hong Kong",
        logo: require("../../assets/images/cityu.jpeg"),
        subHeader: "Bachelor of Science in Computer Science",
        duration: "August 2021 - May 2025",
        desc: "Top 10% in College of Engineering for three semesters in a row.",
        descBullets: [
          "Full Tuition Scholarship of HK$140,000/year",
          "Dean’s List of the College of Engineering in Semester B 20220/2021",  
          "Intended Stream: Artificial Intelligence and Machine Learning",
          "Research Interest: Data Science, Machine Learning, and Software Engineering",
          "Relevant coursework: Python, Web Development, C++, Computer Organization, Discrete Math"
        ],
      },
    ],
  };
  return (
    <div className="education-section" id="education">
      <h1 className="education-heading">Education</h1>
      <div className="education-card-container">
        {educationInfo.schools.map((school, index) => (
          <EducationCard key={index} school={school} />
        ))}
      </div>
    </div>
  );
}
