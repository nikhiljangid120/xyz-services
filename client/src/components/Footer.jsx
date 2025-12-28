import React from 'react';
import { Link } from 'react-router-dom';
import { Rocket, Github, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{ background: 'var(--bg-secondary)', paddingTop: '60px', paddingBottom: '30px', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', marginBottom: '40px' }}>
                    {/* Brand */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '20px' }}>
                            <Rocket color="var(--accent-primary)" size={24} />
                            <span>XYZ <span className="text-gradient">Tech</span></span>
                        </div>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '20px' }}>
                            Empowering businesses with cutting-edge digital solutions. We build the future, today.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Company</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', color: 'var(--text-secondary)' }}>
                            <Link to="/about">About Us</Link>
                            <Link to="/services">Services</Link>
                            <Link to="/contact">Careers</Link>
                            <Link to="/contact">Contact</Link>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 style={{ marginBottom: '20px' }}>Connect</h4>
                        <div style={{ display: 'flex', gap: '15px' }}>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Github /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Twitter /></a>
                            <a href="#" style={{ color: 'var(--text-secondary)' }}><Linkedin /></a>
                        </div>
                    </div>
                </div>

                <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                    &copy; {new Date().getFullYear()} XYZ Technologies. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
