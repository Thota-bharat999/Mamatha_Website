import React, { useState } from 'react';

const LOGO = '/assets/images/logo.jpg';

export default function Navbar({ t, scrolled, lang, setLanguage }) {
    const [menuOpen, setMenuOpen] = useState(false);

    const navLinks = [
        { href: '#about', label: t.nav_about },
        { href: '#services', label: t.nav_services },
        { href: '#why', label: t.nav_why },
        { href: '#process', label: t.nav_process },
        { href: '#contact', label: t.nav_contact },
    ];

    const handleNavClick = (e, href) => {
        e.preventDefault();
        setMenuOpen(false);
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`} dir="ltr">
                <div className="nav-inner">

                    {/* LEFT: Email + Language Buttons */}
                    <div className="nav-left-group">
                        <a href="mailto:infoqa.mamatha@gmail.com" className="nav-email">
                            ✉️ infoqa.mamatha@gmail.com
                        </a>
                        <div className="lang-toggle-group">
                            <button
                                className={`lang-toggle-btn ${lang === 'en' ? 'active' : ''}`}
                                onClick={() => setLanguage('en')}
                            >
                                English
                            </button>
                            <button
                                className={`lang-toggle-btn ${lang === 'ar' ? 'active' : ''}`}
                                onClick={() => setLanguage('ar')}
                            >
                                Arabic
                            </button>
                        </div>
                    </div>

                    {/* CENTER: Nav Links */}
                    <div className="nav-links">
                        {navLinks.map(link => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                            >
                                {link.label}
                            </a>
                        ))}
                    </div>

                    {/* RIGHT: Real Logo + Brand Text + Phone */}
                    <div className="nav-right-group">
                        <div className="nav-logo-block">
                            <img
                                src={LOGO}
                                alt="Mamatha Cleaning & Contracting Logo"
                                className="nav-logo-img"
                                onError={(e) => {
                                    e.target.style.display = 'none';
                                    e.target.nextSibling.style.display = 'flex';
                                }}
                            />
                            <div className="nav-logo-fallback-small" style={{ display: 'none' }}>
                                🧹
                            </div>
                            <div className="nav-brand-stack">
                                <span className="nav-brand-name">MAMATHA</span>
                                <span className="nav-brand-sub">CLEANING & CONTRACTING</span>
                            </div>
                        </div>
                        <a href="tel:+97472148292" className="nav-phone">
                            📞 +974 7214 8292
                        </a>
                    </div>

                    {/* Hamburger (mobile) */}
                    <button
                        className="hamburger"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div className={`mobile-menu ${menuOpen ? 'open' : ''}`} dir="ltr">
                <div className="mobile-menu-header">
                    <img src={LOGO} alt="Mamatha Logo" className="mobile-logo" />
                    <span className="mobile-brand-name">MAMATHA</span>
                </div>
                {navLinks.map(link => (
                    <a
                        key={link.href}
                        href={link.href}
                        onClick={(e) => handleNavClick(e, link.href)}
                    >
                        {link.label}
                    </a>
                ))}
                <div className="mobile-lang-row">
                    <button
                        className={`lang-toggle-btn ${lang === 'en' ? 'active' : ''}`}
                        onClick={() => { setLanguage('en'); setMenuOpen(false); }}
                    >
                        English
                    </button>
                    <button
                        className={`lang-toggle-btn ${lang === 'ar' ? 'active' : ''}`}
                        onClick={() => { setLanguage('ar'); setMenuOpen(false); }}
                    >
                        Arabic
                    </button>
                </div>
                <a href="tel:+97472148292" className="nav-phone" style={{ paddingTop: '0.25rem', fontSize: '0.9rem' }}>
                    📞 +974 7214 8292
                </a>
            </div>
        </>
    );
}
