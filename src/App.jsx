import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Import useLocation to track the current route
import './App.css';
import TeamViewMain from './components/TeamViewMain';
import WildCard from './components/WildCard';
import Nav from './components/Nav';

function App() {
  const [pitcherOrHitterView, setPitcherOrHitterView] = useState('P');
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/' && (
        <Nav pitcherOrHitterView={pitcherOrHitterView} setPitcherOrHitterView={setPitcherOrHitterView} />
      )}
      <Routes>
        <Route path="/" element={<TeamViewMain pitcherOrHitterView={pitcherOrHitterView} />} />
        <Route path="/wildcard" element={<WildCard />} />
      </Routes>
    </div>
  );
}

export default App;