import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

const HowItWorks = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>How It Works</h2>
    <p>Information about how SkillSwap+ works.</p>
  </div>
);

const SignUp = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Sign Up</h2>
    <p>Sign up form will go here.</p>
  </div>
);

const Login = () => (
  <div style={{ padding: '2rem', textAlign: 'center' }}>
    <h2>Login</h2>
    <p>Login form will go here.</p>
  </div>
);

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/how-it-works' element={<HowItWorks />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </Router>
  );
}

export default App;
