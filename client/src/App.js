import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import HowItWorks from './components/HowItWorks';
import Signup from './components/Signup';
import Login from './components/Login';
import Profile from './components/Profile';

// inside <Routes>


const headerStyles = {
  background: '#388e3c',
  color: 'white',
  padding: '2.5rem 0',
  textAlign: 'center',
  position: 'relative',
  borderRadius: 0,
  margin: 0,
};

const logoStyles = {
  position: 'absolute',
  left: '3rem',
  top: '50%',
  transform: 'translateY(-50%)',
  height: '180px',  
  width: '180px',
  objectFit: 'contain',
};

const headerTitle = {
  fontFamily: "'Pacifico', cursive",
  fontSize: '3rem',
  marginBottom: '0.7rem',
  fontWeight: 700,
};

const headerSubtitle = {
  fontFamily: "'Quicksand', Arial, sans-serif",
  fontSize: '1.3rem',
  color: '#fffde7',
  marginTop: '0.1rem',
  letterSpacing: '0.01em',
};

function App() {
  return (
    <Router>
      <header style={headerStyles}>
        <img src="/logo.png" alt="SkillSwap+ Logo" style={logoStyles} />
        <div style={headerTitle}>SkillSwap+</div>
        <div style={headerSubtitle}>Empower. Connect. Grow Together.</div>
      </header>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />  {/* Move this inside Routes */}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
