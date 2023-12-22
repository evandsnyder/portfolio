import InfoCard from "./InfoCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons'

export default function ProjectsPanel() {
    return (
        <div id='section-projects'>
            <h2 className="section-header">Projects</h2>
            <hr style={{ marginLeft: '10px', width: '650px', color: 'var(--accent-one)' }} />
            <InfoCard
                header="Bad Tower Defense"
                subheader=""
                content="A Rogue-like, procedural Tower Defense Game! Setup defenses between each round and attempt to survive increasingly difficult waves of enemies."
                chips={["Unreal Engine 5", "C++", "Blueprints", "Game Design"]}
                href="https://github.com/FriendlyGeekStudios/Bad-Tower-Defense" />
            <InfoCard
                header="Portfolio Website"
                subheader=""
                content="This website! Just a way for me to share some of the things I've worked on."
                chips={["React", "Web Development"]}
                href="https://github.com/evandsnyder/portfolio" />
                <InfoCard
                header="Lambda Calculator"
                subheader=""
                content="A Lambda Calculus Interprepeter"
                chips={["Java", "Lambda Calculus", "Computational Theory"]}
                href="https://github.com/evandsnyder/Lambda-Calculator" />
            <p className="section-footer">See more on <a className='external-link' href="https://www.github.com/evandsnyder" target="_blank">GitHub <FontAwesomeIcon icon={faUpRightFromSquare} /></a></p>
        </div>
    )
}