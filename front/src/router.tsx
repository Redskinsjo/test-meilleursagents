import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from './App';

const router = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="realtors/101" />} />
        <Route path="realtors/:realtorId" element={<App />} />
        <Route path="realtors/:realtorId/messages/:messageId" element={<App />} />
      </Routes>
    </Router>
  );
};

export default router;
