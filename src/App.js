import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Login from './components/login.js';
import Home from './components/home.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/home.js" element={<Home />} />
        </Routes>
      </div>
    </Router>
    );
}

export default App;
