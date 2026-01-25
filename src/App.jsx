import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import DemoPage from './pages/DemoPage';
import MockupCapture from './pages/MockupCapture';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/demo" element={<DemoPage />} />
        <Route path="/capture" element={<MockupCapture />} />
        <Route path="/capture/:mockupId" element={<MockupCapture />} />
      </Routes>
    </Router>
  );
}

export default App;
