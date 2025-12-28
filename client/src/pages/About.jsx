import React from 'react';
import { Section, PageHeader } from '../components/Shared';

const About = () => {
    return (
        <div>
            <PageHeader
                title="About Us"
                subtitle="Driven by innovation, united by excellence."
            />

            {/* 1. Story & Vision */}
            <Section bg="var(--bg-secondary)">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '50px', alignItems: 'center' }}>
                    <div>
                        <h2 style={{ marginBottom: '20px' }}>Our Mission</h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            At XYZ Technologies, our mission is to empower organizations to navigate the complexities of the digital age. We believe in technology as a catalyst for positive change.
                        </p>
                        <p style={{ color: 'var(--text-secondary)' }}>
                            Data-driven strategies and human-centric design are at the core of everything we do.
                        </p>
                    </div>
                    <div className="glass-card" style={{ height: '300px', background: 'url(https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80) center/cover', opacity: 0.6 }}></div>
                </div>
            </Section>

            {/* 2. Team & Culture */}
            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '50px' }}>Our Leadership</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px' }}>
                    {[
                        { name: 'Sarah Johnson', role: 'CEO', img: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&q=80' },
                        { name: 'David Lee', role: 'CTO', img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80' },
                        { name: 'Emily Chen', role: 'Head of Design', img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80' }
                    ].map((member, i) => (
                        <div key={i} className="glass-card" style={{ overflow: 'hidden', textAlign: 'center', paddingBottom: '20px' }}>
                            <div style={{ height: '250px', background: `url(${member.img}) center/cover`, marginBottom: '20px' }}></div>
                            <h3>{member.name}</h3>
                            <p style={{ color: 'var(--accent-primary)' }}>{member.role}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default About;
