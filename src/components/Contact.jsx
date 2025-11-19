import React from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" style={{ padding: '6rem 0' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass"
                    style={{ padding: '3rem' }}
                >
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', textAlign: 'center' }}>Get In <span className="gradient-text">Touch</span></h2>
                    <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem' }}>
                        Have a project in mind or just want to say hi? I'd love to hear from you.
                    </p>

                    <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="Name"
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--surface-border)',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                style={{
                                    padding: '1rem',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid var(--surface-border)',
                                    borderRadius: '0.5rem',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                        <input
                            type="text"
                            placeholder="Subject"
                            style={{
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--surface-border)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                        <textarea
                            placeholder="Message"
                            rows="5"
                            style={{
                                padding: '1rem',
                                background: 'rgba(255,255,255,0.05)',
                                border: '1px solid var(--surface-border)',
                                borderRadius: '0.5rem',
                                color: 'white',
                                outline: 'none',
                                resize: 'vertical'
                            }}
                        ></textarea>
                        <button
                            type="submit"
                            style={{
                                padding: '1rem',
                                background: 'var(--gradient-main)',
                                color: 'white',
                                border: 'none',
                                borderRadius: '0.5rem',
                                fontWeight: 'bold',
                                fontSize: '1.1rem',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                marginTop: '1rem'
                            }}
                        >
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    );
};

export default Contact;
