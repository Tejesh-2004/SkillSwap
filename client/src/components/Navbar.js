import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaUserPlus, FaSignInAlt, FaBars, FaTimes } from 'react-icons/fa';

const navItems = [
  { label: 'Home', icon: <FaHome />, to: '/' },
  { label: 'How It Works', icon: <FaInfoCircle />, to: '/how-it-works' },
  { label: 'Sign Up', icon: <FaUserPlus />, to: '/signup' },
  { label: 'Login', icon: <FaSignInAlt />, to: '/login' }, // future login
];


const styles = {
  nav: {
    background: '#388e3c',
    padding: '0.7rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    fontFamily: "'Poppins', Arial, sans-serif",
  },
  navLinks: (open) => ({
    display: open ? 'flex' : 'none',
    flexDirection: 'column',
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    background: '#388e3c',
    zIndex: 10,
    boxShadow: '0 4px 16px rgba(56,142,60,0.1)',
    transition: 'all 0.25s',
  }),
  navLinksDesktop: {
    display: 'flex',
    gap: '1.5rem',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  navLink: (hovered, focused) => ({
    color: hovered || focused ? '#ffd600' : 'white',
    background: hovered || focused ? 'rgba(46,125,50,0.15)' : 'transparent',
    textDecoration: 'none',
    margin: '0 1.2rem',
    fontWeight: 500,
    fontSize: '1.3rem',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    borderRadius: 8,
    padding: '0.4rem 1rem',
    transition: 'color 0.2s, background 0.2s, transform 0.2s',
    cursor: 'pointer',
    outline: focused ? '2px solid #ffd600' : 'none',
    transform: hovered || focused ? 'scale(1.07)' : 'scale(1)',
  }),
  hamburger: {
    display: 'none',
    color: 'white',
    fontSize: '2rem',
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    position: 'absolute',
    right: '1.5rem',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 20,
  },
};

function useResponsive() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth <= 800);
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 800);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  return isMobile;
}

const Navbar = ({ bgColor = '#388e3c' }) => {
  const [hoveredIdx, setHoveredIdx] = useState(null);
  const [focusedIdx, setFocusedIdx] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const isMobile = useResponsive();
  // const location = useLocation(); // Not needed anymore

  return (
    <nav style={{ ...styles.nav, background: bgColor }}>
      {/* Hamburger for mobile */}
      <button
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        style={{ ...styles.hamburger, ...(isMobile ? { display: 'block' } : { display: 'none' }) }}
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Navigation Links */}
      <div
        style={
          isMobile
            ? styles.navLinks(menuOpen)
            : styles.navLinksDesktop
        }
        role="navigation"
      >
        {navItems.map((item, idx) => (
          item.to === '#' ? (
            <a
              key={item.label}
              href={item.to}
              style={styles.navLink(hoveredIdx === idx, focusedIdx === idx)}
              tabIndex={0}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setFocusedIdx(idx)}
              onBlur={() => setFocusedIdx(null)}
              onTouchStart={() => setHoveredIdx(idx)}
              onTouchEnd={() => setHoveredIdx(null)}
            >
              {item.icon}
              {item.label}
            </a>
          ) : (
            <Link
              key={item.label}
              to={item.to}
              style={styles.navLink(hoveredIdx === idx, focusedIdx === idx)}
              tabIndex={0}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              onFocus={() => setFocusedIdx(idx)}
              onBlur={() => setFocusedIdx(null)}
              onTouchStart={() => setHoveredIdx(idx)}
              onTouchEnd={() => setHoveredIdx(null)}
            >
              {item.icon}
              {item.label}
            </Link>
          )
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
