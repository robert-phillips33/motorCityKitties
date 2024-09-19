import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import TeamViewMain from './components/TeamViewMain';
import ScheduleView from './components/ScheduleView';
import Nav from './components/Nav';

function App() {
  const [pitcherOrHitterView, setPitcherOrHitterView] = useState('P');  // Only manage pitcher/hitter view state here

  return (
    <div>
      <Nav pitcherOrHitterView={pitcherOrHitterView} setPitcherOrHitterView={setPitcherOrHitterView} />
      <Routes>
        <Route path="/" element={<TeamViewMain pitcherOrHitterView={pitcherOrHitterView} />} />
        <Route path="/schedule" element={<ScheduleView />} />
      </Routes>
    </div>
  );
};

export default App;