import React, { useState } from 'react';
import { Send, MapPin, Mail, Phone } from 'lucide-react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [status, setStatus] = useState('');

    const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('submitting');
        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });
            if (res.ok) setStatus('success');
            else setStatus('error');
        } catch { setStatus('error'); }
    };

    return (
        <div style={{ paddingBottom: '80px' }}>
            <div style={{ background: 'var(--bg-accent)', padding: '120px 0 80px', textAlign: 'center' }}>
                <div className="container">
                    <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Contact Us</h1>
                    <p style={{ color: 'var(--text-secondary)' }}>Get in touch with our team today.</p>
                </div>
            </div>

            <div className="container" style={{ marginTop: '80px', display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '60px' }}>
                <div>
                    <h3 style={{ marginBottom: '30px' }}>Get in Touch</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'flex-start', color: 'var(--text-secondary)' }}>
                            <MapPin size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '1.1rem' }}>123 Innovation Tower,<br />Cyber City, Gurugram<br />Haryana, India 122002</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <Mail size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '1.1rem' }}>contact@xyztech.in</span>
                        </div>
                        <div style={{ display: 'flex', gap: '15px', alignItems: 'center', color: 'var(--text-secondary)' }}>
                            <Phone size={24} style={{ color: 'var(--accent-primary)' }} />
                            <span style={{ fontSize: '1.1rem' }}>+91 98765 43210</span>
                        </div>
                    </div>
                </div>

                <div className="clean-card">
                    {status === 'success' ? (
                        <div style={{ textAlign: 'center', padding: '40px' }}>
                            <h3 style={{ color: '#16a34a' }}>Message Sent!</h3>
                            <p style={{ marginTop: '10px' }}>We'll get back to you shortly.</p>
                            <button onClick={() => setStatus('idle')} className="btn btn-outline" style={{ marginTop: '20px' }}>Send Another</button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Name</label>
                                    <input type="text" name="name" required value={formData.name} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px' }} />
                                </div>
                                <div>
                                    <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Email</label>
                                    <input type="email" name="email" required value={formData.email} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px' }} />
                                </div>
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Subject</label>
                                <input type="text" name="subject" value={formData.subject} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px' }} />
                            </div>
                            <div>
                                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', fontWeight: '500' }}>Message</label>
                                <textarea name="message" rows="5" required value={formData.message} onChange={handleChange} style={{ width: '100%', padding: '12px', borderRadius: '8px', resize: 'vertical' }} />
                            </div>
                            <button type="submit" className="btn btn-primary" disabled={status === 'submitting'}>
                                {status === 'submitting' ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
