import React from 'react';
import InfoCard from './InfoCard';

export default function EducationPanel() {
    return (
        <div id='section-education'>
            <h2 className="section-header">Education</h2>
            <hr style={{marginLeft: '10px', width: '650px', color: 'var(--accent-one)'}}/>
            <InfoCard
                prefix={<p>September 2023 - March 2024</p>}
                header="Game Development Program"
                subheader="Vertex School"
                content="Focusing on Game Development using Unreal Engine 5"
                chips={["Unreal Engine 5", "C++", "Blueprints", "Game Design"]}
                href="https://www.vertexschool.com/game-development-program"
                />
            <InfoCard
                prefix={<p>May 2022</p>}
                header="Master of Science in Software Engineering"
                subheader="Regis University"
                content="Specialized in Computation Research, Software Architecture, Quality Assurance, DevOps Engineering, and Software Sustainability"
                href="https://www.regis.edu/"/>
            <InfoCard
                prefix={<p>May 2021</p>}
                header="Bachelor of Science in Computer Science"
                subheader="Regis University"
                content="Studies focused on Data Structures & Algorithms, Computational Theory, Artificial Intelligence, and Computer Architecture"
                href="https://www.regis.edu/"/>
        </div>
    )
}