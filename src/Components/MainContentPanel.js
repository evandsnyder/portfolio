import React from 'react';
import ExperiencePanel from './ExperiencePanel';
import EducationPanel from './EducationPanel';
import ProjectsPanel from './ProjectsPanel';
import '../Styles/InfoCard.css';

export default function MainContentPanel({innerRef}) {
    const panels = [<ExperiencePanel />, <ProjectsPanel />, <EducationPanel />]

    return (
        <div className='main-content' ref={innerRef}>
            <div className="about-me-header" id="section-about-me">
                <p>When I was , I decided I wanted to learn how computer's work; today,</p>
                <p>
                    As a current student in <a href="https://www.vertexschool.com/game-development-program">Vertex School's Game Development Program</a>,
                    I am gearing up for a transition into the gaming industry. Challenging problems excite me, if you have one, <a href="mailto:evansnyder16@gmail.com">let's get in touch</a>!
                </p>
                <p>Outside of work, I like to brew my own beer, peek out at the universe through my telescope, and play boardgames with my fiancée.</p>
            </div>
            {panels.map((panel, index) => (
                <div className="portfolio-section" key={index} style={{ animationDelay: `${0.3 + (0.15 * index)}s` }}>
                    {panel}
                </div>
            ))}
            <div className="main-content-footer">
                <p>
                    This page was inspired by <a href="https://brittanychiang.com">Brittany Chiang's Website</a>. It was developed using <a href="https://react.dev/">ReactJS</a>.
                </p>
            </div>
        </div>
    )
}