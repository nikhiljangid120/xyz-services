import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Zap, Shield, BarChart, Globe, Server, Cpu, Wifi } from 'lucide-react';
import { Link } from 'react-router-dom';

const Section = ({ children, bg = 'transparent' }) => (
    <section className="section" style={{ background: bg }}>
        <div className="container">{children}</div>
    </section>
);

const Home = () => {
    return (
        <div className="home-page">
            <section style={{ paddingTop: '140px', paddingBottom: '100px', background: 'linear-gradient(to bottom, var(--bg-accent), var(--bg-primary))' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ fontWeight: '600', color: 'var(--accent-primary)', marginBottom: '15px', textTransform: 'uppercase', fontSize: '0.85rem', letterSpacing: '1px' }}>
                            Digital Innovation
                        </div>
                        <h1 style={{ fontSize: '3.5rem', marginBottom: '25px', color: 'var(--text-primary)', letterSpacing: '-1px' }}>
                            Building the future <br /> of <span style={{ color: 'var(--accent-primary)' }}>connectivity.</span>
                        </h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '35px', maxWidth: '540px' }}>
                            We deliver enterprise-grade software solutions that drive growth. Simple, scalable, and secure.
                        </p>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <Link to="/contact" className="btn btn-primary">Start Project</Link>
                            <Link to="/services" className="btn btn-outline">Our Services</Link>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        style={{ position: 'relative', height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <div style={{ position: 'absolute', width: '300px', height: '300px', borderRadius: '50%', border: '1px dashed var(--card-border)' }} />
                        <div style={{ position: 'absolute', width: '450px', height: '450px', borderRadius: '50%', border: '1px solid var(--bg-accent)' }} />

                        <div className="clean-card" style={{ zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', boxShadow: 'var(--shadow-lg)' }}>
                            <Globe size={48} color="var(--accent-primary)" />
                            <span style={{ fontWeight: 'bold' }}>Global Core</span>
                        </div>

                        <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '20%', left: '10%' }} className="clean-card">
                            <Server size={24} color="var(--text-secondary)" />
                        </motion.div>

                        <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }} style={{ position: 'absolute', bottom: '20%', right: '10%' }} className="clean-card">
                            <Cpu size={24} color="var(--accent-primary)" />
                        </motion.div>

                        <motion.div animate={{ x: [0, 15, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} style={{ position: 'absolute', top: '50%', right: '0%' }} className="clean-card">
                            <Wifi size={24} color="#10b981" />
                        </motion.div>

                        <motion.div animate={{ x: [0, -15, 0] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} style={{ position: 'absolute', top: '10%', right: '30%' }} className="clean-card">
                            <Shield size={24} color="#f59e0b" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <Section>
                <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 60px' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '15px' }}>Tailored Solutions</h2>
                    <p style={{ color: 'var(--text-secondary)' }}>Everything you need to scale your business in the modern digital landscape.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {[
                        { icon: <Zap size={24} />, title: 'Digital Transformation', desc: 'Modernize workflows with cloud-native tech.' },
                        { icon: <Shield size={24} />, title: 'Cyber Security', desc: 'Enterprise-grade protection for your data.' },
                        { icon: <BarChart size={24} />, title: 'Data Analytics', desc: 'Actionable insights derived from your metrics.' }
                    ].map((s, i) => (
                        <div key={i} className="clean-card">
                            <div style={{ width: '50px', height: '50px', background: 'var(--bg-accent)', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-primary)', marginBottom: '20px' }}>
                                {s.icon}
                            </div>
                            <h3 style={{ fontSize: '1.25rem', marginBottom: '10px' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Home;
