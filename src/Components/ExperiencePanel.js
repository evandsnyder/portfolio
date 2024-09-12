import React from 'react';
import InfoCard from './InfoCard';
import '../Styles/InfoCard.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from '@fortawesome/free-solid-svg-icons'

export default function ExperiencePanel() {
    return (
        <div id='section-experience'>
            
            <h2 className="section-header">Experience</h2>
            <hr style={{marginLeft: '10px', width: '650px', color: 'var(--accent-one)'}}/>
            <InfoCard
                prefix={<p>August 2024 - Present</p>}
                header="Game Development Instructor"
                subheader="Vertex School"
                content="Design comprehensive course content to teach C++ programming and game 
                development using Unreal Engine. Mentors aspiring game developers, providing 
                guidance and support throughout their learning journey. Delivers hands-on instruction 
                in Unreal Engine, helping students build a solid foundation in 
                programming and game design principles.
                "
                chips={["Unreal Engine 5", "C++", "Blueprints", "Game Design"]}
                href="https://www.vertexschool.com/"
                />
            <InfoCard
                prefix={<p>March 2022 - September 2024</p>}
                header="Senior Software Engineer"
                subheader="Tomorrow.io"
                content="Lead a small team developing performance critical software that runs in space! 
                Engaged with stakeholders to determine requirements, designed software solutions, and
                oversaw the software development lifecycle. Provided technical leadership through 
                software architecture, and enabled team growth through monthly educational sessions.
                "
                chips={["C++", "Qt", "Multithreading", "Software Architecture", "Python", "React", "OOP"]}
                href="https://www.tomorrow.io"
                />
            <InfoCard
                prefix={<p>June 2019 - March 2022</p>}
                header="Cyber Security Software Engineer"   
                subheader="The MITRE Corporation"
                content="Conducted research across a variety of cybersecurity domains. Recognized for 
                excellence in the development of novel code diversity techniques through the use of Genetic AI algorithms.
                Developed a custom LLVM-based compiler designed to make applications secure at compile time.
                Mentored a group of 13 interns to introduce them to software engineering, reverse engineering, and binary analysis.
                "
                chips={["C/C++", "Python", "Linux", "Machine Learning", "LLVM", "Compilers", "Reverse Engineering", "AI"]}
                href="https://www.mitre.org/"
                />
            <InfoCard
                prefix={<p>August 2014 - May 2019</p>}
                header="U.S. Army"
                subheader="Cryptologic Network Warfare Specialist"
                content="Executed Computer Network Operations while stationed at Fort Meade, MD."
                chips={["C/C++", "Linux", "Computer Networking"]}
                href="https://www.goarmy.com/"
                />
            <p className="section-footer">Check out my full <a className="download-link" href="/files/Resume_EvanSnyder.pdf" download='Resume_EvanSnyder.pdf' target='_blank'>Resume <FontAwesomeIcon icon={faDownload} /></a></p>
        </div>
    )
}