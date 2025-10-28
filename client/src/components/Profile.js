import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: {
    maxWidth: 450,
    margin: '3rem auto',
    padding: '2.2rem',
    background: 'rgba(255,255,255,0.97)',
    borderRadius: 13,
    textAlign: 'center',
    boxShadow: '0 2px 16px rgba(0,0,0,0.09)'
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 1rem auto',
    border: '2.5px solid #43cea2',
    background: '#e0f7fa'
  },
  name: { fontSize: '1.7rem', color: '#185a9d', fontWeight: 700 },
  email: { fontSize: '1.1rem', color: '#333', marginBottom: '1rem' },
  skills: { margin: '1rem 0 0.5rem 0', color: '#333' },
  bio: { color: '#444', marginBottom: '1.5rem', fontStyle: 'italic' },
  button: {
    background: '#43cea2',
    color: 'white',
    border: 'none',
    borderRadius: 7,
    padding: '0.65rem 2.3rem',
    margin: '0 0.7rem',
    fontWeight: 600,
    fontSize: '1.15rem',
    cursor: 'pointer'
  }
};

function Profile() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/login');
        return;
      }
      try {
        const res = await axios.get('http://localhost:5000/api/auth/profile', {
          headers: { Authorization: 'Bearer ' + token }
        });
        setUser(res.data);
      } catch (err) {
        localStorage.removeItem('token');
        navigate('/login');
      }
    };
    fetchProfile();
  }, [navigate]);

  if (!user) return <div style={{ textAlign: 'center', padding: '4rem', fontSize: '1.25rem' }}>Loading...</div>;

  return (
    <div style={styles.container}>
      {user.profilePhoto && (
        <img
          src={`http://localhost:5000/uploads/${user.profilePhoto}`}
          alt="profile"
          style={styles.avatar}
        />
      )}
      <div style={styles.name}>{user.name}</div>
      <div style={styles.email}>{user.email}</div>
      <div style={styles.skills}><strong>Skills:</strong> {user.skills}</div>
      <div style={styles.skills}><strong>Experience:</strong> {user.workExperience}</div>
      <div style={styles.bio}>{user.bio}</div>
      <button style={styles.button} onClick={() => alert('Learn feature coming soon!')}>To Learn</button>
      <button style={styles.button} onClick={() => alert('Teach feature coming soon!')}>To Teach</button>
    </div>
  );
}

export default Profile;
