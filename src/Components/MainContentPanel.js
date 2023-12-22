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
                <p>
                    Nearly 20 years ago, I was just a kid hacking Pokémon games and taking my first steps into the digital world. 
                    This enduring fascination has propelled me through a career punctuated by involvement in incredible, cutting-edge products.
                    Today, I am eager to leverage my technical acumen to craft unique narratives, blending innovation and imagination, for others to enjoy and be inspired by.
                    My professional voyage is not just about coding and development; it's about creating experiences that resonate and redefine what's possible.
                </p>
                <p>
                    As a current student in <a className="external-link" href="https://www.vertexschool.com/game-development-program">Vertex School's Game Development Program</a>,
                    I am honing my skills in Unreal Engine 5 and gearing up for a transition into the gaming industry. 
                    Challenging problems excite me, if you have one, <a className="external-link" href="mailto:evansnyder16@gmail.com">let's get in touch</a>!
                </p>
                <p>Outside of work, I like to brew my own beer, gaze out at the universe through my telescope, 
                    and play boardgames with my fiancée.</p>
            </div>
            {panels.map((panel, index) => (
                <div className="portfolio-section" key={index} style={{ animationDelay: `${0.3 + (0.15 * index)}s` }}>
                    {panel}
                </div>
            ))}
            <div className="main-content-footer">
                <p>
                    This page was inspired by <a className="external-link" href="https://brittanychiang.com">Brittany Chiang's Website</a>. It was developed using <a className="external-link" href="https://react.dev/">ReactJS</a>.
                </p>
            </div>
        </div>
    )
}