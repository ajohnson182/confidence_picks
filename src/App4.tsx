// import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App3 from './App3';
// import App from './App';


function App4() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App3 />} />
        <Route path="/:league_id" element={<App3 />} />
      </Routes>
    </Router>
  );
}

export default App4;