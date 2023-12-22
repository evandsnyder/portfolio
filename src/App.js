import { useRef } from 'react';

import './App.css';
import LeftPanel from './Components/LeftPanel';
import MainContentPanel from './Components/MainContentPanel';

function App() {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  // function toggleDarkTheme() {
  //   setTheme(theme === 'light' ? 'dark' : 'light');
  // }

  const rightPanelRef = useRef(null);
  const leftPanelRef = useRef(null);

  function handleScrollEvent(event) {
    const scrollDelta = event.deltaY;
    let scroll = 0;
    if (rightPanelRef.current) {
      rightPanelRef.current.scrollTop += scrollDelta;
      scroll = rightPanelRef.current.scrollTop;
      console.log(rightPanelRef.current);
    }

    const sections = document.querySelectorAll("div[id^='section']");

    // TODO: Can get the one taking up the most screen space
    // Should be considerate of the top and bottom elements which may take up the least amount of space
    let visibleSection = null;
    for (const section of sections) {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0) {
        visibleSection = section;
        break;
      }
    }

    if (leftPanelRef.current && visibleSection) {
      leftPanelRef.current.updateActiveSection(visibleSection.id);
    }
  }

  return (
    <div className='app' data-theme="dark" onWheel={handleScrollEvent}>
      <LeftPanel ref={leftPanelRef} />
      <MainContentPanel innerRef={rightPanelRef} />
    </div>
  );
}

export default App;
