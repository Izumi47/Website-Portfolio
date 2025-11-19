import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, padding: '1rem 2rem', margin: '1rem', marginTop: '1rem' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-display)' }}>
          <span className="gradient-text">Portfolio.</span>
        </Link>
        <ul style={{ display: 'flex', gap: '2rem' }}>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

const Footer = () => {
  return (
    <footer style={{ padding: '4rem 0', textAlign: 'center', borderTop: '1px solid var(--surface-border)', marginTop: '4rem' }}>
      <div className="container">
        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', marginBottom: '2rem' }}>
          <a href="#" className="hover-scale"><Github /></a>
          <a href="#" className="hover-scale"><Linkedin /></a>
          <a href="#" className="hover-scale"><Twitter /></a>
          <a href="#" className="hover-scale"><Mail /></a>
        </div>
        <p style={{ color: 'var(--text-secondary)' }}>© {new Date().getFullYear()} Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
};

const Layout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1, paddingTop: '80px' }}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
