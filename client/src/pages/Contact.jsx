import React, { useState } from 'react';
import { Section, PageHeader } from '../components/Shared';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [status, setStatus] = useState(''); // 'idle', 'submitting', 'success', 'error'

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <div>
            <PageHeader
                title="Contact Us"
                subtitle="We'd love to hear from you. Let's start a conversation."
            />

            <Section>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '60px' }}>
                    {/* Contact Info */}
                    <div>
                        <h2 style={{ marginBottom: '30px' }}>Get in Touch</h2>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ padding: '15px', background: 'var(--bg-secondary)', borderRadius: '50%', color: 'var(--accent-primary)' }}><Mail /></div>
                                <div>
                                    <h4 style={{ color: 'var(--text-secondary)' }}>Email</h4>
                                    <p>hello@xyztech.com</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ padding: '15px', background: 'var(--bg-secondary)', borderRadius: '50%', color: 'var(--accent-primary)' }}><Phone /></div>
                                <div>
                                    <h4 style={{ color: 'var(--text-secondary)' }}>Phone</h4>
                                    <p>+1 (555) 123-4567</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ padding: '15px', background: 'var(--bg-secondary)', borderRadius: '50%', color: 'var(--accent-primary)' }}><MapPin /></div>
                                <div>
                                    <h4 style={{ color: 'var(--text-secondary)' }}>Office</h4>
                                    <p>123 Innovation Dr, Tech City</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="glass-card" style={{ padding: '40px' }}>
                        {status === 'success' ? (
                            <div style={{ textAlign: 'center', padding: '40px 0' }}>
                                <div style={{ fontSize: '3rem', color: '#4ade80', marginBottom: '20px' }}>✓</div>
                                <h3>Message Sent!</h3>
                                <p style={{ color: 'var(--text-secondary)' }}>We'll get back to you shortly.</p>
                                <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '20px' }}>Send Another</button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Name</label>
                                        <input
                                            type="text"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--text-secondary)', borderRadius: '8px', color: 'white' }}
                                        />
                                    </div>
                                    <div>
                                        <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Email</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--text-secondary)', borderRadius: '8px', color: 'white' }}
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--text-secondary)', borderRadius: '8px', color: 'white' }}
                                    />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-secondary)' }}>Message</label>
                                    <textarea
                                        name="message"
                                        rows="5"
                                        required
                                        value={formData.message}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '12px', background: 'var(--bg-secondary)', border: '1px solid var(--text-secondary)', borderRadius: '8px', color: 'white', resize: 'vertical' }}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary" disabled={status === 'submitting'} style={{ marginTop: '10px' }}>
                                    {status === 'submitting' ? 'Sending...' : 'Send Message'}
                                    {!status && <Send size={18} style={{ marginLeft: '10px' }} />}
                                </button>

                                {status === 'error' && <p style={{ color: '#f87171', textAlign: 'center' }}>Something went wrong. Please try again.</p>}
                            </form>
                        )}
                    </div>
                </div>
            </Section>
        </div>
    );
};

export default Contact;
