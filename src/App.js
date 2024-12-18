import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminLogin from './components/AdminLogin';
import RandomHash from './components/RandomHash';
import SqlInjection from './components/SqlInjection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/hash" element={<RandomHash />} />
        <Route path="/sql" element={<SqlInjection />} />
      </Routes>
    </Router>
  );
};

export default App;
