// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App3 from './App3';
import Scenario from './Scenario';
import Scenario2 from './Scenario2';
// import Bracket from './Bracket';
// import App from './App';


function App4() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App3 />} />
        <Route path="/ava" element={<App3 />} />
        <Route path="/cnutfxc" element={<App3 />} />
        <Route path="/league/:league_id" element={<App3 />} />
        <Route path="/scenario" element={<Scenario2 />} />
        <Route path="/scenario/:league_id" element={<Scenario2 />} />
        <Route path="/scenario-legacy" element={<Scenario />} />
        <Route path="/scenario-legacy/:league_id" element={<Scenario />} />
        {/*<Route path="/bracket" element={<Bracket />} />*/}
      </Routes>
    </Router>
  );
}

export default App4;