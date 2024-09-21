import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import TeamViewMain from './components/TeamViewMain';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  const [pitcherOrHitterView, setPitcherOrHitterView] = useState('P');
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/TeamViewMain' && (
        <Nav pitcherOrHitterView={pitcherOrHitterView}
          setPitcherOrHitterView={setPitcherOrHitterView} />
      )}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="TeamViewMain" element={<TeamViewMain
          pitcherOrHitterView={pitcherOrHitterView} />} />
      </Routes>
    </div>
  );
}

export default App;