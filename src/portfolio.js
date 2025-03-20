import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; 

// Splash Screen

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000 
};

// Summary And Greeting Section

const illustration = {
  animated: true 
};

const greeting = {
  username: "Cindy Falencia Irawan",
  title: "Hi all, I'm Cindy",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 who creates accessible and impactful web solutions, turning ideas into reality." ),
  resumeLink:
    "https://drive.google.com/file/d/1AMRkxqTktn2ec2f-h6BbmVmGqZXBGnbQ/view?usp=sharing", 
  displayGreeting: true 
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/cindyfalencia",
  linkedin: "https://www.linkedin.com/in/cindy-falencia-irawan-03aa65217/",
  gmail: "cindyfalenciai@gmail.com",
  display: true
};

// Skills Section

const skillsSection = {
  title: "What I do",
  softwareSkills: {
    "Frontend Development": [
      {
        skillName: "html-5 & css3",
        fontAwesomeClassname: "fab fa-html5",
      },
      {
        skillName: "sass",
        fontAwesomeClassname: "fab fa-sass",
      },
      {
        skillName: "JavaScript",
        fontAwesomeClassname: "fab fa-js",
      },
      {
        skillName: "reactjs",
        fontAwesomeClassname: "fab fa-react",
      },
      {
        skillName: "vuejs",
        fontAwesomeClassname: "fab fa-vuejs",
      },
      {
        skillName: "nextjs",
        fontAwesomeClassname: "fab fa",
      },
      {
        skillName: "typescript",
        fontAwesomeClassname: "fab fa",
      },
    ],
    "Backend Development": [
      {
        skillName: "nodejs",
        fontAwesomeClassname: "fab fa-node",
      },
      {
        skillName: "java",
        fontAwesomeClassname: "fab fa-java",
      },
      {
        skillName: "python",
        fontAwesomeClassname: "fab fa-python",
      },
      {
        skillName: "golang",
        fontAwesomeClassname: "fas fa-golang",
      },
      {
        skillName: "sql-database",
        fontAwesomeClassname: "fas fa-database",
      },
    ],
    "Cloud/DevOps/Others": [
      {
        skillName: "aws",
        fontAwesomeClassname: "fab fa-aws",
      },
      {
        skillName: "docker",
        fontAwesomeClassname: "fab fa-docker",
      },
      {
        skillName: "kubernetes",
        fontAwesomeClassname: "fab fa-docker",
      },
      {
        skillName: "firebase",
        fontAwesomeClassname: "fas fa-fire",
      },
      {
        skillName: "npm",
        fontAwesomeClassname: "fab fa-npm",
      },
      {
        skillName: "hadoop",
        fontAwesomeClassname: "fab fa",
      },
    ],
  },
  display: true 
};

// Education Section

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "City University of Hong Kong",
      logo: require("./assets/images/cityu.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021 - June 2025",
      desc: "3.53/4.3 CGPA (First-class honours)",
      descBullets: [
        "CityU Full Entrance Scholarship tenable for 4 years",
        "Lee Shau Kau exchange scholarship",
        "Dean’s List of the College of Engineering",
        "Top 10% in College of Engineering for four years in a row (HK Tech Tiger)"
      ]
    },
    {
      schoolName: "McGill University",
      logo: require("./assets/images/mcgill.png"),
      subHeader: "Exchange Computer Science student for winter semester",
      duration: "January 2023 - May 2023",
      desc: "Relevant coursework:",
      descBullets: [
        "Problem Solving and Programming",
        "Data Structures", 
        "Software Design", 
        "Operating System",
        "Database System"
      ]
    }
  ]
};

// Work experience section

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Software Engineer Full Time",
      company: "JP Morgan Chase & Co",
      companylogo: require("./assets/images/jpm.jpg"),
      date: "August 2025 – Present",
      desc: "Asset & Wealth Management Technology",
      descBullets: [
      ]
    },
    {
      role: "Software Engineer Summer Analyst",
      company: "JP Morgan Chase & Co",
      companylogo: require("./assets/images/jpm.jpg"),
      date: "June 2024 – August 2024",
      desc: "Asset & Wealth Management Technology - Portfolio Management",
      descBullets: [
        "Designed, implemented, tested a revamp of an in-house application from Java Servlet to a Next.js frontend connected to a RESTful API backend, increasing maintainability, improving user experience and meeting performance demands via optimized rendering"
      ]
    },
    {
      role: "Software Engineer Placement Intern",
      company: "Wall Street English",
      companylogo: require("./assets/images/wse.png"),
      date: "September 2023 – May 2024",
      descBullets: [
        "Develop and enhance Java code for the web-based systems",
        "Develop API for power users to build their own apps to integrate internal CRM",
        "Design, code, test, and debug software applications using industry-standard programming languages and best practices",
        "Contribute to the design and architecture of software systems to ensure scalability, performance, and security"
      ]
    },
    {
      role: "Software Engineer Summer Intern",
      company: "O2EZ",
      companylogo: require("./assets/images/o2ez.png"),
      date: "June 2023 – August 2023",
      descBullets: [
        "Worked on redesigning O2EZ’s website with React.js, HTML, CSS, and Typescript",
        "Develop O2EZ’s UI that is visually appealing, responsive, and easy to use by using Figma",
        "Building server-side logic and APIs to handle requests from the front-end and user with EditorX and AWS Lambda",
        "Deploying applications to production serves and manages continuous integration and deployment processes",
      ]
    }
  ]
};

const openSource = {
  showGithubProfile: "true", 
  display: true
};

// Achievement Section

const achievementSection = {
  title: emoji("Achievements, Licenses, And Certifications 🏆 "),
  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "Associate (SAA-C03) Cert Prep: 1 Cloud Services Overview",
      footerLink: [
        {
          name: "View Credentials",
          url: ""
        }
      ]
    },
    {
      title: "HKSTP Corporation",
      subtitle:
        "1st Runner up Innovative Thinking Workshop & Idea Pitching",
      footerLink: [
        {
          name: "View Certificate",
          url: ""
        }
      ]
    },

    {
      title: "PwC's Hack A Day 2023 Hackathon",
      subtitle: "Delighted to secure a top-four position in the PwC SecureAI Hackathon in Hong Kong, showcasing expertise in securing Artificial Intelligence and contributing to innovative solutions in cybersecurity",
      footerLink: [
      ]
    },
    {
      title: "J.P. Morgan Code For Good Hong Kong 2023",
      subtitle: "As a team contributed to the development of a full-stack gamified finance education platform for Project M2 by Solomon Learning Group at the J.P. Morgan Code For Good Hong Kong 2023 event.",
      footerLink: [
      ]
    }
  ],
  display: true 
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  display: true 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  email_address: "cindyfalenciai@gmail.com"
};

const isHireable = false; 

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  workExperiences,
  openSource,
  achievementSection,
  contactInfo,
  isHireable,
  resumeSection
};
