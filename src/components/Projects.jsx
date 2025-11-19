import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce solution with real-time inventory management and secure payments.',
        tags: ['React', 'Node.js', 'MongoDB'],
        image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'Task Management App',
        description: 'Collaborative task manager with drag-and-drop interface and team features.',
        tags: ['Vue.js', 'Firebase', 'Tailwind'],
        image: 'https://images.unsplash.com/photo-1540350394557-8d14678e7f91?w=800&q=80',
        link: '#',
        github: '#'
    },
    {
        title: 'AI Content Generator',
        description: 'SaaS application leveraging OpenAI API to generate marketing copy and blog posts.',
        tags: ['Next.js', 'OpenAI', 'Stripe'],
        image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80',
        link: '#',
        github: '#'
    }
];

const ProjectCard = ({ project, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass"
            style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}
        >
            <div style={{ height: '200px', overflow: 'hidden' }}>
                <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
            </div>
            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem', flex: 1 }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                    {project.tags.map(tag => (
                        <span key={tag} style={{
                            fontSize: '0.8rem',
                            padding: '0.2rem 0.8rem',
                            borderRadius: '1rem',
                            background: 'rgba(255,255,255,0.1)',
                            color: 'var(--accent-color)'
                        }}>
                            {tag}
                        </span>
                    ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.github} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem' }} className="hover-text">
                        <Github size={16} /> Code
                    </a>
                    <a href={project.link} style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', fontSize: '0.9rem', color: 'var(--primary-color)' }}>
                        <ExternalLink size={16} /> Live Demo
                    </a>
                </div>
            </div>
        </motion.div>
    );
};

const Projects = () => {
    return (
        <section id="projects" style={{ padding: '6rem 0' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    style={{ fontSize: '3rem', marginBottom: '3rem', textAlign: 'center' }}
                >
                    Featured <span className="gradient-text">Projects</span>
                </motion.h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {projects.map((project, index) => (
                        <ProjectCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
