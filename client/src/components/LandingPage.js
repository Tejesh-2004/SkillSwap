import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUsers, FaMedal, FaShieldAlt } from 'react-icons/fa';

const featureData = [
  {
    title: 'Hyperlocal Matching',
    icon: FaUsers,
    text: 'Find people near you who want to learn or teach skills—no long commutes, just local connections.',
  },
  {
    title: 'Gamified Learning',
    icon: FaMedal,
    text: 'Earn badges and tokens as you teach, learn, and participate in the community.',
  },
  {
    title: 'Safe & Trusted',
    icon: FaShieldAlt,
    text: 'Profiles, ratings, and verified meetups help you connect with confidence.',
  },
];

const styles = {
  mainBg: {
    background: "url('/bg2.png') no-repeat center center",
    backgroundSize: 'cover',
    minHeight: 'calc(100vh - 180px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingTop: '2.5rem',
    paddingBottom: '2.5rem',
  },
  overlay: {
    background: 'rgba(255,255,255,0.85)',
    borderRadius: 12,
    maxWidth: 900,
    margin: '0 auto',
    boxShadow: '0 2px 16px rgba(0,0,0,0.07)',
    padding: '2.5rem',
  },
  welcome: {
    fontFamily: "'Poppins', Arial, sans-serif",
    fontSize: '2.2rem',
    fontWeight: 700,
    marginBottom: '1.2rem',
    color: '#185a9d',
    letterSpacing: '0.02em',
  },
  paragraph: {
    fontFamily: "'Quicksand', Arial, sans-serif",
    fontSize: '1.3rem',
    marginBottom: '1.5rem',
    color: '#222',
  },
  cta: {
    background: '#43cea2',
    color: 'white',
    padding: '1.2rem 2.5rem',
    border: 'none',
    borderRadius: 7,
    fontSize: '1.4rem',
    cursor: 'pointer',
    marginTop: '1.2rem',
    fontWeight: 600,
    transition: 'background 0.2s, transform 0.2s',
    fontFamily: "'Poppins', Arial, sans-serif",
  },
  features: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '2.5rem',
    marginTop: '2.5rem',
  },
  feature: (hovered) => ({
    flex: '1 1 250px',
    background: '#f1f8e9',
    padding: '2rem 1.5rem',
    borderRadius: 10,
    boxShadow: hovered
      ? '0 4px 20px rgba(67,206,162,0.18)'
      : '0 1px 6px rgba(0,0,0,0.03)',
    textAlign: 'center',
    transition: 'box-shadow 0.2s, transform 0.2s',
    transform: hovered ? 'translateY(-6px) scale(1.03)' : 'none',
    cursor: 'pointer',
  }),
  featureIcon: (hovered) => ({
    fontSize: '2.5rem',
    color: hovered ? '#43cea2' : '#2e7d32',
    marginBottom: '0.7rem',
    transition: 'color 0.2s, transform 0.2s',
    transform: hovered ? 'scale(1.18)' : 'scale(1)',
  }),
  featureTitle: {
    fontFamily: "'Poppins', Arial, sans-serif",
    fontSize: '1.4rem',
    fontWeight: 600,
    marginBottom: '0.5rem',
    color: '#185a9d',
  },
  featureText: {
    fontFamily: "'Quicksand', Arial, sans-serif",
    fontSize: '1.1rem',
    color: '#333',
  },
  footer: {
    textAlign: 'center',
    color: '#888',
    padding: '2rem 0 1rem 0',
    fontSize: '1.1rem',
    fontFamily: "'Quicksand', Arial, sans-serif",
  },
};

const LandingPage = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const [ctaHover, setCtaHover] = useState(false);
 const navigate = useNavigate();
  return (
    <div style={styles.mainBg}>
      <div style={styles.overlay}>
        <div style={styles.welcome}>Welcome to SkillSwap+</div>
        <p style={styles.paragraph}>
          SkillSwap+ is your local community’s platform for learning and sharing skills. Whether you want to teach guitar, learn gardening, or join a group event, SkillSwap+ makes it easy, safe, and fun.
        </p>
        <button
          style={{
            ...styles.cta,
            background: ctaHover ? '#185a9d' : '#43cea2',
            transform: ctaHover ? 'scale(1.05)' : 'scale(1)',
          }}
          onMouseEnter={() => setCtaHover(true)}
          onMouseLeave={() => setCtaHover(false)}
          onClick={() => navigate('/signup')}
        >
          Get Started
        </button>
        <div style={styles.features}>
          {featureData.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                style={styles.feature(hoveredFeature === idx)}
                onMouseEnter={() => setHoveredFeature(idx)}
                onMouseLeave={() => setHoveredFeature(null)}
                onFocus={() => setHoveredFeature(idx)}
                onBlur={() => setHoveredFeature(null)}
                tabIndex={0}
              >
                <Icon style={styles.featureIcon(hoveredFeature === idx)} />
                <div style={styles.featureTitle}>{feature.title}</div>
                <div style={styles.featureText}>{feature.text}</div>
              </div>
            );
          })}
        </div>
        <footer style={styles.footer}>
          &copy; 2025 SkillSwap+. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
