import React from 'react';
import '../Styles/InfoCard.css';
import Chip from './Chip';

export default function InfoCard({ prefix, header, subheader, content, chips = [], href }) {
    return (
        <div className="info-card" onClick={() => { if(href) window.open(href, '_blank').focus(); }}>
            <div className="info-card-content">
                <h3>{header}</h3>
                <div className="info-card-subheader">
                    <h5>{subheader}</h5>
                    {prefix}
                </div>
                <p className="info-card-description">{content}</p>
                <div className="chips">
                    {chips.map((label, index) => (
                        <Chip label={label} key={index} />
                    ))}
                </div>
            </div>
        </div>
    )
}