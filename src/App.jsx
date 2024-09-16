import { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route, Router } from 'react-router-dom';
import TeamViewMain from './components/TeamViewMain.jsx';
// import ScheduleView from './components/ScheduleView.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<TeamViewMain />} />
        {/* <Route path="/schedule" element={<ScheduleView />} /> */}
      </Routes>
    </>
  )
};

export default App
