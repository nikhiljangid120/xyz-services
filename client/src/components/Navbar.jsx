import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon, Link as LinkIcon } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [theme, setTheme] = useState('light');
    const location = useLocation();

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => prev === 'light' ? 'dark' : 'light');
    };

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav style={{
            position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
            height: 'var(--nav-height)',
            background: scrolled ? 'var(--nav-bg)' : 'transparent',
            borderBottom: scrolled ? '1px solid var(--card-border)' : 'none',
            backdropFilter: scrolled ? 'blur(8px)' : 'none',
            transition: 'all 0.3s ease',
            color: 'var(--nav-text)'
        }}>
            <div className="container" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Link to="/" style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--nav-text)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    XYZ<span style={{ color: 'var(--accent-primary)' }}>Tech</span>
                </Link>

                <div className="desktop-nav" style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.name} to={link.path}
                            style={{
                                color: location.pathname === link.path ? 'var(--accent-primary)' : 'var(--nav-text)',
                                fontWeight: 500,
                                fontSize: '0.95rem'
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <button onClick={toggleTheme} style={{ color: 'var(--nav-text)', padding: '8px', borderRadius: '50%', border: '1px solid var(--card-border)' }}>
                        {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
                    </button>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '8px 20px', fontSize: '0.9rem' }}>Get Started</Link>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }} className="mobile-controls">
                    <button onClick={toggleTheme} style={{ color: 'var(--nav-text)', padding: '8px' }}>
                        {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
                    </button>
                    <button onClick={() => setIsOpen(!isOpen)} style={{ color: 'var(--nav-text)' }}>
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {isOpen && (
                <div style={{
                    position: 'absolute', top: '70px', left: 0, right: 0,
                    background: 'var(--bg-primary)', padding: '20px',
                    display: 'flex', flexDirection: 'column', gap: '15px',
                    borderBottom: '1px solid var(--card-border)',
                    boxShadow: 'var(--shadow-md)'
                }}>
                    {navLinks.map((link) => (
                        <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={{ fontSize: '1.1rem', color: 'var(--text-primary)', padding: '10px 0', borderBottom: '1px solid var(--card-border)' }}>
                            {link.name}
                        </Link>
                    ))}
                    <Link to="/contact" className="btn btn-primary" onClick={() => setIsOpen(false)} style={{ justifyContent: 'center' }}>Get Started</Link>
                </div>
            )}
            <style>{`
        .mobile-controls { display: none !important; }
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-controls { display: flex !important; }
        }
      `}</style>
        </nav>
    );
};
export default Navbar;
