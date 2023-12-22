import React from 'react';
import '../Styles/HexButton.css';
import '../Styles/NavigationPanel.css'

export default function HexButton({onClick, label}) {

    return (
        <div onClick={onClick} class="navigation-link">
            <span style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
                {label}
            </span>
        </div>
    )
}