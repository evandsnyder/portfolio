import React from 'react'
import '../Styles/NavigationPanel.css'

export default function NavigationPanel(){
    const menuItems = ['Games', 'Experience', 'Education', 'Contact', 'Resume'];

    return (
        <div className="navigation-bar">
            {menuItems.map((item, index) => (
                <div key={index} className="hexagon-button"
                    style={{animationDelay: `${0.6 + (0.15 * index)}s` }}
                >
                    <span className="hexagon-button-text">{item}</span>
                </div>
            ))}
        </div>
    )
}