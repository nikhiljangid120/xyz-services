import React from 'react';
import { Target, Users, Zap } from 'lucide-react';

const About = () => {
    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ background: 'var(--bg-accent)', padding: '120px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>About XYZ Tech</h1>
                    <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--text-secondary)' }}>
                        We are a team of dedicated developers and designers building the next generation of web applications.
                    </p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '80px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1fr', gap: '80px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ marginBottom: '25px', fontSize: '2.5rem' }}>Our Story</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px', fontSize: '1.1rem' }}>
                            Founded in 2024, XYZ Tech has grown from a small consultancy to a full-service digital agency. We focus on quality, speed, and transparency.
                        </p>
                        <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem' }}>
                            Our mission is to make enterprise-grade technology accessible to businesses of all sizes, bridging the gap between complex code and user-friendly experiences.
                        </p>
                    </div>

                    {/* Replaced Image with a Styled "Mission Card" */}
                    <div className="clean-card" style={{ padding: '60px', background: 'linear-gradient(135deg, var(--bg-secondary), var(--bg-primary))', position: 'relative', overflow: 'hidden' }}>
                        {/* Decorative Background Icon */}
                        <Target size={300} style={{ position: 'absolute', bottom: '-50px', right: '-50px', opacity: 0.05, color: 'var(--text-primary)' }} />

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--accent-primary)', color: 'var(--button-text)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Target size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Vision</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>To be the world's leading catalyst for digital transformation.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-primary)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Users size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Culture</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Built on collaboration, curiosity, and relentless innovation.</p>
                                </div>
                            </div>

                            <div style={{ display: 'flex', gap: '20px' }}>
                                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: 'var(--bg-primary)', border: '1px solid var(--card-border)', color: 'var(--text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <Zap size={24} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Impact</h3>
                                    <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>Delivering measurable results that drive real business growth.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={{ marginTop: '100px' }}>
                <h2 style={{ textAlign: 'center', marginBottom: '60px', fontSize: '2.5rem' }}>Meet the Team</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '40px' }}>
                    {[
                        { name: 'Gulshan Jangid', role: 'Full Stack Developer', img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Yash Kumar Saini', role: 'Backend Specialist', img: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Sachin Gurjar', role: 'Frontend Architect', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' }
                    ].map((member, i) => (
                        <div key={i} className="clean-card" style={{ padding: '0', overflow: 'hidden', textAlign: 'center', border: 'none', background: 'transparent' }}>
                            <div style={{ width: '100%', aspectRatio: '1/1', borderRadius: '50%', overflow: 'hidden', marginBottom: '25px', border: '4px solid var(--bg-accent)', margin: '0 auto 25px' }}>
                                <img src={member.img} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '8px' }}>{member.name}</h3>
                            <p style={{ color: 'var(--accent-primary)', fontSize: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
