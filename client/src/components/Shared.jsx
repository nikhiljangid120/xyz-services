import React from 'react';
import { motion } from 'framer-motion';

export const Section = ({ children, bg = 'transparent', delay = 0, className = '' }) => (
    <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, delay }}
        className={`section ${className}`}
        style={{ background: bg }}
    >
        <div className="container">{children}</div>
    </motion.section>
);

export const PageHeader = ({ title, subtitle }) => (
    <div style={{ paddingTop: '150px', paddingBottom: '80px', textAlign: 'center' }}>
        <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
            {title}
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}
        >
            {subtitle}
        </motion.p>
    </div>
);
