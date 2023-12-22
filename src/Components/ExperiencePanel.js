import React from 'react';
import InfoCard from './InfoCard';

export default function ExperiencePanel({header, subheader, content, chips}) {
    return (
        <div id='section-experience'>
            
            <h2 className="section-header">Experience</h2>
            <hr style={{marginLeft: '10px', width: '650px', color: 'var(--accent-one)'}}/>
            <InfoCard
                prefix={<p>March 2022 - Present</p>}
                header="Senior Software Engineer"
                subheader="Tomorrow.io"
                content="Leads a small team developing performance critical software that runs in space! 
                Engages with stakeholders to determine requirements, designs software solutions, and
                oversees the software development lifecycle. Provides technical leadership through 
                software architecture, and enables team growth through monthly educational sessions.
                "
                chips={["C++", "Qt", "Multithreading", "Software Architecture", "Python", "React"]}
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
            <p className="section-footer">Check out my full <a href="">resume</a>!</p>
        </div>
    )
}