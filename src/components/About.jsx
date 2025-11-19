import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Layout as LayoutIcon, Server } from 'lucide-react';

const skills = [
    { icon: <LayoutIcon size={24} />, title: 'Frontend', desc: 'React, Vue, Tailwind' },
    { icon: <Server size={24} />, title: 'Backend', desc: 'Node.js, Python, Go' },
    { icon: <Database size={24} />, title: 'Database', desc: 'PostgreSQL, MongoDB' },
    { icon: <Code size={24} />, title: 'Architecture', desc: 'Microservices, AWS' },
];

const About = () => {
    return (
        <section id="about" style={{ padding: '6rem 0', background: 'rgba(255,255,255,0.02)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>About <span className="gradient-text">Me</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>
                            I'm a passionate Full Stack Developer based in San Francisco. With over 5 years of experience, I specialize in building scalable web applications and intuitive user interfaces.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem' }}>
                            When I'm not coding, you can find me exploring new technologies, contributing to open source, or hiking in the mountains.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary-color)' }}>5+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Years Experience</p>
                            </div>
                            <div className="glass" style={{ padding: '1rem', textAlign: 'center' }}>
                                <h3 style={{ fontSize: '2rem', color: 'var(--secondary-color)' }}>50+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects Completed</p>
                            </div>
                        </div>
                    </motion.div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {skills.map((skill, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="glass"
                                style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}
                            >
                                <div style={{ color: 'var(--accent-color)', marginBottom: '1rem' }}>{skill.icon}</div>
                                <h4 style={{ marginBottom: '0.5rem' }}>{skill.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{skill.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
