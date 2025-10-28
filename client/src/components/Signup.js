import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const styles = {
  bgWrap: {
    minHeight: '100vh',
    width: '100vw',
    backgroundImage: "url('/subg.png')",  // Adjust the filename if necessary
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    maxWidth: 600,
    margin: '3rem auto',
    padding: '2rem',
    backgroundColor: 'rgba(255,255,255,0.93)', // semi-transparent for better look on bg
    borderRadius: 10,
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    fontFamily: "'Quicksand', sans-serif",
  },
  title: {
    fontSize: '2rem',
    marginBottom: '1.5rem',
    color: '#388e3c',
    fontFamily: "'Poppins', sans-serif",
    textAlign: 'center',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: '1rem',
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    marginBottom: '1rem',
    borderRadius: 6,
    border: '1px solid #ccc',
    fontSize: '1rem',
    minHeight: '100px',
  },
  button: {
    backgroundColor: '#43cea2',
    color: 'white',
    border: 'none',
    padding: '0.8rem 1.5rem',
    fontSize: '1.1rem',
    borderRadius: 6,
    cursor: 'pointer',
    width: '100%',
    fontWeight: 600,
    transition: '0.3s ease',
  },
  loginButton: {
    backgroundColor: '#388e3c',
    marginTop: '1rem',
  },
  preview: {
    width: 100,
    height: 100,
    borderRadius: '50%',
    objectFit: 'cover',
    display: 'block',
    marginBottom: '1rem',
    border: '2px solid #388e3c',
  },
  error: {
    color: 'red',
    fontWeight: 500,
    textAlign: 'center',
  },
  success: {
    color: 'green',
    fontWeight: 500,
    textAlign: 'center',
  },
  loginLink: {
    display: 'block',
    textAlign: 'center',
    marginTop: '1rem',
    fontFamily: "'Quicksand', sans-serif",
    color: '#388e3c',
    fontWeight: 600,
    textDecoration: 'none',
  }
};

function Signup() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    skills: '',
    workExperience: '',
    bio: '',
    profilePhoto: null,
  });
  const [preview, setPreview] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = e => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setForm(prev => ({ ...prev, profilePhoto: file }));
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      formData.append(key, value);
    });
    try {
      const res = await axios.post('http://localhost:5000/api/auth/signup', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(res.data.message || 'Signup successful!');
      setForm({
        name: '', email: '', password: '', skills: '',
        workExperience: '', bio: '', profilePhoto: null
      });
      setPreview(null);
    } catch (err) {
      setMessage(err.response?.data?.message || 'Signup failed');
    }
  };

  return (
    <div style={styles.bgWrap}>
      <div style={styles.container}>
        <h2 style={styles.title}>Create Your SkillSwap+ Profile</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} style={styles.input} required />
          <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} style={styles.input} required />
          <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} style={styles.input} required />
          <input type="text" name="skills" placeholder="Skills (comma separated)" value={form.skills} onChange={handleChange} style={styles.input} required />
          <input type="text" name="workExperience" placeholder="Work Experience" value={form.workExperience} onChange={handleChange} style={styles.input} />
          <textarea name="bio" placeholder="Short Bio" value={form.bio} onChange={handleChange} style={styles.textarea} />
          <label>Upload Profile Photo:</label>
          <input type="file" accept="image/*" onChange={handleFileChange} style={{ marginBottom: '1rem' }} />
          {preview && <img src={preview} alt="Preview" style={styles.preview} />}
          <button type="submit" style={styles.button}>Sign Up</button>
          <div style={message.includes('success') ? styles.success : styles.error}>{message}</div>
          <div style={{ marginTop: '1rem', textAlign: 'center' }}>
            Already have an account? <Link to="/login" style={{ color: '#388e3c', fontWeight: 600 }}>Login</Link>
          </div>
          {message.toLowerCase().includes('success') && (
            <button
              type="button"
              style={{ ...styles.button, ...styles.loginButton }}
              onClick={() => navigate('/login')}
            >
              Log In
            </button>
          )}
        </form>
      </div>
    </div>
  );
}

export default Signup;
