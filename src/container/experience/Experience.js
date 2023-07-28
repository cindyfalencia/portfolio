import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "./Experience.css";

export default function Experience() {
  return (
    <div id="experience">
        <h1 className="work-title">My work experience</h1>
        <VerticalTimeline>
            <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#55198b", color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  #55198b' }}
                    date="September, 2023 - present"
                    iconStyle={{ background: "#55198b", color: '#fff' }}
                >
                    <h3 className="vertical-timeline-element-title"> Programmer Intern, Wall Street English</h3>
                    <h4 className="vertical-timeline-element-subtitle">Hong Kong</h4>
                    <p>
                    ● Worked on redesigning O2EZ’s website with React.js, HTML, CSS, and Typescript <br/>
                    </p>
                </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#55198b", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #55198b' }}
                date="June, 2023 - August, 2023"
                iconStyle={{ background: "#55198b", color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title"> Software Engineer, O2EZ</h3>
                <h4 className="vertical-timeline-element-subtitle">Hong Kong</h4>
                <p>
                ● Worked on redesigning O2EZ’s website with React.js, HTML, CSS, and Typescript <br/>
                ● Develop O2EZ’s UI that is visually appealing, responsive, and easy to use by using Figma. <br/>
                ● Building server-side logic and APIs to handle requests from the front-end and user with EditorX and AWS Lambda. <br/>
                ● Deploying applications to production serves and manages continuous integration and deployment processes. <br/>
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#55198b", color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #55198b' }}
                date="August, 2022 - December, 2022"
                iconStyle={{ background: "#55198b", color: '#fff' }}
            >
                <h3 className="vertical-timeline-element-title">PALSI Leader, City University of Hong Kong    </h3>
                <h4 className="vertical-timeline-element-subtitle">Hong Kong</h4>
                <p>
                ● Explained complex mathematical concepts in a clear and understandable manner, using a variety of teaching strategies. <br/>
                ● Monitored student progress and provided regular feedback to help them identify areas for improvement.
                </p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  );
}