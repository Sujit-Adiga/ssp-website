import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Contact from './Contact';
import NotFound from './NotFound';  // Import the NotFound component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/contact" />} /> {/* Redirect to contact */}
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} /> {/* Handles all unknown routes */}
      </Routes>
    </Router>
  );
}

export default App;
