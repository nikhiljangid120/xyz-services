import React from 'react';
import { Section, PageHeader } from '../components/Shared';
import { Database, Cloud, Lock, Code, Server, LineChart } from 'lucide-react';

const Services = () => {
    const services = [
        { icon: <Cloud size={40} />, title: 'Cloud Solutions', desc: 'Scalable cloud architectures on AWS, Azure, and GCP.' },
        { icon: <Code size={40} />, title: 'Custom Development', desc: 'Tailor-made software tailored to your specific business needs.' },
        { icon: <Lock size={40} />, title: 'Security Audits', desc: 'Comprehensive vulnerability assessments and penetration testing.' },
        { icon: <Database size={40} />, title: 'Big Data', desc: 'Unlock insights with powerful data pipelines and analytics.' },
        { icon: <Server size={40} />, title: 'DevOps', desc: 'Streamline your deployment pipeline with CI/CD automation.' },
        { icon: <LineChart size={40} />, title: 'IT Strategy', desc: 'Roadmapping and consulting for digital transformation.' },
    ];

    return (
        <div>
            <PageHeader
                title="Our Expertise"
                subtitle="End-to-end technology services designed to accelerate your growth."
            />

            {/* 1. Services Grid */}
            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {services.map((s, i) => (
                        <div key={i} className="glass-card hover-lift" style={{ padding: '40px' }}>
                            <div style={{ color: 'var(--accent-primary)', marginBottom: '20px' }}>{s.icon}</div>
                            <h3 style={{ marginBottom: '15px' }}>{s.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{s.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 2. Process / Workflow */}
            <Section bg="var(--bg-secondary)">
                <h2 style={{ textAlign: 'center', marginBottom: '60px' }}>Our Workflow</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
                    {[
                        { step: '01', title: 'Discover', desc: 'We analyze your requirements and business goals.' },
                        { step: '02', title: 'Design', desc: 'We create intuitive and scalable architectures.' },
                        { step: '03', title: 'Develop', desc: 'Agile development with frequent updates.' },
                        { step: '04', title: 'Deploy', desc: 'Seamless launch and ongoing support.' },
                    ].map((w, i) => (
                        <div key={i} style={{ textAlign: 'center' }}>
                            <div style={{ fontSize: '4rem', fontWeight: 'bold', color: 'var(--bg-primary)', textShadow: '-1px -1px 0 var(--accent-secondary), 1px -1px 0 var(--accent-secondary), -1px 1px 0 var(--accent-secondary), 1px 1px 0 var(--accent-secondary)', marginBottom: '20px' }}>{w.step}</div>
                            <h3 style={{ marginBottom: '10px' }}>{w.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{w.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* 3. Tech Stack */}
            <Section>
                <h2 style={{ textAlign: 'center', marginBottom: '40px' }}>Technologies We Use</h2>
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px' }}>
                    {['React', 'Node.js', 'Python', 'Go', 'AWS', 'Docker', 'Kubernetes', 'TensorFlow'].map((tech) => (
                        <div key={tech} style={{ padding: '10px 20px', border: '1px solid var(--text-secondary)', borderRadius: '30px', color: 'var(--text-secondary)' }}>
                            {tech}
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};

export default Services;
