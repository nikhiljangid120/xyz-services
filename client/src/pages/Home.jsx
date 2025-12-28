import React from 'react';
import { motion } from 'framer-motion';
import { replace, ArrowRight, Shield, Zap, Globe, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ children, bg = 'transparent', delay = 0 }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, delay }}
        className="section"
        style={{ background: bg }}
    >
        <div className="container">{children}</div>
    </motion.section>
);

const Home = () => {
    return (
        <div className="home-page">
            {/* 1. Hero Section */}
            <section style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden' }}>
                <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: '50vw', height: '50vw', background: 'var(--accent-primary)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%' }} />
                <div style={{ position: 'absolute', bottom: '-20%', left: '-10%', width: '40vw', height: '40vw', background: 'var(--accent-secondary)', filter: 'blur(150px)', opacity: '0.2', borderRadius: '50%' }} />

                <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', marginBottom: '20px', lineHeight: '1.1' }}
                    >
                        Building the <br /> <span className="text-gradient">Digital Future</span>
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', marginBottom: '40px' }}
                    >
                        XYZ Technologies delivers enterprise-grade software solutions with cutting-edge innovation and premium design.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link to="/contact" className="btn btn-primary">Start Project <ArrowRight size={20} style={{ marginLeft: '10px' }} /></Link>
                    </motion.div>
                </div>
            </section>

            {/* 2. Company Overview */}
            <Section bg="var(--bg-secondary)">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Who We Are</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            Founded in 2024, XYZ Technologies has rapidly evolved into a global leader in IT consulting and digital transformation. We blend technical expertise with creative strategy to solve complex business challenges.
                        </p>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <div>
                                <h3 className="text-gradient" style={{ fontSize: '2rem' }}>50+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Projects Delivered</p>
                            </div>
                            <div>
                                <h3 className="text-gradient" style={{ fontSize: '2rem' }}>98%</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>Client Satisfaction</p>
                            </div>
                        </div>
                    </div>
                    <div className="glass-card" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Globe size={100} color="var(--accent-primary)" style={{ opacity: 0.8 }} />
                    </div>
                </div>
            </Section>

            {/* 3. Services Preview */}
            <Section>
                <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '10px' }}>Our Services</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Comprehensive solutions for forward-thinking companies.</p>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[
                        { icon: <Zap />, title: 'Digital Transformation', desc: 'Modernize your legacy systems with cloud-native architectures.' },
                        { icon: <Shield />, title: 'Cybersecurity', desc: 'Enterprise-grade protection for your data and infrastructure.' },
                        { icon: <Users />, title: 'IT Consulting', desc: 'Strategic guidance to align technology with business goals.' }
                    ].map((s, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-card"
                            style={{ padding: '30px' }}
                        >
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>{s.icon}</div>
                            <h3 style={{ marginBottom: '10px' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                        </motion.div>
                    ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <Link to="/services" className="btn btn-outline">View All Services</Link>
                </div>
            </Section>

            {/* 4. Value Proposition */}
            <Section bg="var(--bg-secondary)">
                <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Why Choose XYZ?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px' }}>
                        {[
                            { title: 'Speed', desc: 'Rapid deployment cycles.' },
                            { title: 'Quality', desc: 'Zero-compromise code standards.' },
                            { title: 'Innovation', desc: 'Always using latest tech.' }
                        ].map((v, i) => (
                            <div key={i}>
                                <h3 className="text-gradient" style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{v.title}</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>{v.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 5. Call to Action */}
            <Section>
                <div className="glass-card" style={{ padding: '60px', textAlign: 'center', overflow: 'hidden', position: 'relative' }}>
                    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(45deg, transparent, rgba(56, 189, 248, 0.1), transparent)' }} />
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Ready to Scale?</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '30px', fontSize: '1.2rem' }}>Let's build something extraordinary together.</p>
                    <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
                </div>
            </Section>
        </div>
    );
};

export default Home;
