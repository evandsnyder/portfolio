import React, { forwardRef, useState, useImperativeHandle } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import '../Styles/LeftPanel.css';

const LeftPanel = forwardRef((props, ref) => {
    const [activeSection, setActiveSection] = useState('section-about-me');

    useImperativeHandle(ref, () => ({
        updateActiveSection(newSection) {
            setActiveSection(newSection);
        }
    }));

    function scrollToElement(elementId) {
        console.log(`Scrolling to ${elementId}`);
        if (!elementId) return;
        let element = document.getElementById(elementId);
        if (!element) {
            console.log(`Could not find the expected element ${element}`);
            return;
        }

        setActiveSection(elementId)
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    return (
        <div className="left-panel">
            <div className='left-panel-wrapper'>
                <div className="left-panel-header">
                    <h1>Hi, I'm Evan</h1>
                    <p>
                        I develop interactive experiences and write high quality software. <br />
                    </p>
                    <p className="link-resume">View my full <a className="download-link" href="/files/Resume_EvanSnyder.pdf" download='Resume_EvanSnyder.pdf' target='_blank'>Resume <FontAwesomeIcon icon={faDownload} /></a> </p>
                </div>
                <nav className="nav-indicator">
                    <ul>
                        <li onClick={() => { scrollToElement('section-about-me') }}>
                            <div className={activeSection === 'section-about-me' ? 'active' : ''}> About</div>
                        </li>
                        <li onClick={() => { scrollToElement('section-experience') }}>
                            <div className={activeSection === 'section-experience' ? 'active' : ''}>
                                Experience
                            </div>

                        </li>
                        <li onClick={() => { scrollToElement('section-projects') }}>
                            <div className={activeSection === 'section-projects' ? 'active' : ''}>
                                Projects
                            </div>
                        </li>
                        <li onClick={() => { scrollToElement('section-education') }} >
                            <div className={activeSection === 'section-education' ? 'active' : ''}> Education</div>
                        </li>
                    </ul>
                </nav>
                <div className="links">
                    <a href="https://www.github.com/evandsnyder"><FontAwesomeIcon icon={faGithub} size="2x" /></a>
                    <a href="https://www.linkedin.com/in/evansnyder16"><FontAwesomeIcon icon={faLinkedin} size="2x" /></a>
                </div>
            </div>
        </div>
    );
});

export default LeftPanel;