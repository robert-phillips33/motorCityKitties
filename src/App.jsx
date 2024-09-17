import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TeamViewMain from './components/TeamViewMain.jsx';
import ScheduleView from './components/ScheduleView.jsx';
import Nav from './components/Nav.jsx';

function App() {
  const [pitcherOrHitterView, setPitcherOrHitterView] = useState('P');
  return (
    <>
      <div>
        <Nav
          pitcherOrHitterView={pitcherOrHitterView}
          setPitcherOrHitterView={setPitcherOrHitterView}
        />
        <Routes>
          <Route path="/" element={<TeamViewMain
            pitcherOrHitterView={pitcherOrHitterView} />} />
          <Route path="/schedule" element={<ScheduleView />} />
        </Routes>
      </div>
    </>
  )
};

export default App
