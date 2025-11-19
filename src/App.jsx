import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Layout>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </Layout>
    </Router>
  );
}

export default App;
