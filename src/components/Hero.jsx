import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section style={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            position: 'relative',
            overflow: 'hidden',
            paddingTop: '80px'
        }}>
            {/* Background Elements */}
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: -1 }}>
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 90, 0],
                        opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        top: '-20%',
                        left: '-10%',
                        width: '50vw',
                        height: '50vw',
                        background: 'radial-gradient(circle, var(--primary-color) 0%, transparent 70%)',
                        filter: 'blur(100px)',
                        borderRadius: '50%'
                    }}
                />
                <motion.div
                    animate={{
                        scale: [1, 1.5, 1],
                        rotate: [0, -90, 0],
                        opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    style={{
                        position: 'absolute',
                        bottom: '-20%',
                        right: '-10%',
                        width: '60vw',
                        height: '60vw',
                        background: 'radial-gradient(circle, var(--secondary-color) 0%, transparent 70%)',
                        filter: 'blur(120px)',
                        borderRadius: '50%'
                    }}
                />
            </div>

            <div className="container" style={{ textAlign: 'center', zIndex: 1 }}>
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}
                >
                    Crafting Digital <br />
                    <span className="gradient-text">Experiences</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    style={{ fontSize: 'clamp(1.2rem, 2vw, 1.5rem)', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem' }}
                >
                    I build modern, accessible, and performant web applications that leave a lasting impression.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                >
                    <a href="#projects" style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        background: 'var(--primary-color)',
                        color: 'white',
                        padding: '1rem 2rem',
                        borderRadius: '2rem',
                        fontWeight: '600',
                        fontSize: '1.1rem'
                    }}>
                        View Work <ArrowRight size={20} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
