import React, { useState } from 'react';
import axios from 'axios';
import { FaUserCircle } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const styles = {
  bgWrap: {
    minHeight: '100vh',
    width: '100vw',
    position: 'fixed',
    top: 0, left: 0,
    zIndex: -1,
    overflow: 'hidden'
  },
  background: {
    width: '100vw',
    height: '100vh',
    background: "url('/login-bg2.png') no-repeat center center fixed",
    backgroundSize: 'cover',
    filter: 'blur(10px) brightness(0.7)',
    position: 'absolute',
    top: 0, left: 0,
    right: 0, bottom: 0
  },
  overlay: {
    minHeight: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative'
  },
  loginContent: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '1rem',
    background: 'transparent', // No white/other background here
    width: 'min(350px, 90vw)'
  },
  icon: {
    fontSize: '3.5rem',
    color: '#388e3c',
    marginBottom: '0.5rem'
  },
  title: {
    marginBottom: '0.5rem',
    color: '#ffffff',
    fontWeight: 700,
    fontSize: '1.6rem'
  },
  input: {
    width: '100%',
    padding: '0.8rem 1.2rem',
    marginBottom: '0.5rem',
    borderRadius: 6,
    border: '1px solid rgba(255,255,255,0.85)',
    background: 'rgba(255,255,255,0.18)',
    color: '#fff',
    backdropFilter: 'blur(3px)',
    fontSize: '1rem',
    outline: 'none'
  },
  button: {
    width: '100%',
    background: '#43cea2',
    color: '#fff',
    border: 'none',
    borderRadius: 6,
    fontSize: '1.17rem',
    marginTop: '0.5rem',
    padding: '0.85rem 0',
    fontWeight: 600,
    cursor: 'pointer'
  },
  error: {
    color: '#fff',
    background: 'rgba(241, 70, 104, 0.85)',
    margin: '0.6rem 0',
    padding: '0.5rem',
    borderRadius: 5,
    width: '100%'
  }
};

function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError('');
  };

const handleSubmit = async e => {
  e.preventDefault();
  try {
    const res = await axios.post('http://localhost:5000/api/auth/login', form);
    if (res.data.token) {
      localStorage.setItem('token', res.data.token); // store token
      navigate('/profile'); // redirect to profile page
    } else {
      setError('Unexpected server response');
    }
  } catch (err) {
    setError('Wrong password or username');
  }
};


  return (
    <div>
      <div style={styles.bgWrap}>
        <div style={styles.background}></div>
      </div>
      <div style={styles.overlay}>
        <div style={styles.loginContent}>
          <FaUserCircle style={styles.icon} />
          <h2 style={styles.title}>Login</h2>
          {error && <div style={styles.error}>{error}</div>}
          <input
            style={styles.input}
            name="email"
            type="text"
            placeholder="Email or Username"
            value={form.email}
            onChange={handleChange}
            required
          />
          <input
            style={styles.input}
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <button type="submit" style={styles.button} onClick={handleSubmit}>
            Log In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
