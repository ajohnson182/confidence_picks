// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App3 from './App3';
import Scenario from './Scenario';
// import App from './App';


function App4() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App3 />} />
        <Route path="/ava" element={<App3 />} />
        <Route path="/cnutfxc" element={<App3 />} />
        <Route path="/league/:league_id" element={<App3 />} />
        <Route path="/scenario/" element={<Scenario />} />
        <Route path="/scenario/:league_id" element={<Scenario />} />
      </Routes>
    </Router>
  );
}

export default App4;