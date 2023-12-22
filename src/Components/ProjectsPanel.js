import InfoCard from "./InfoCard";

export default function ProjectsPanel() {
    return (
        <div id='section-projects'>
            <h2 className="section-header">Things I do in my free time:</h2>
            <InfoCard
                header="Bad Tower Defense"
                subheader=""
                content="A Rogue-like, procedural Tower Defense Game! Setup defenses between each round and attempt to survive increasingly difficult waves of enemies."
                chips={["Unreal Engine 5", "C++", "Blueprints", "Game Design"]}
                href="https://github.com/FriendlyGeekStudios/Bad-Tower-Defense"/>
        </div>
    )
}